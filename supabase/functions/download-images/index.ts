// Supabase Edge Function name: `download-images`
// Create the function in Supabase with exactly that name so it matches the frontend.
//
// Required Supabase secrets:
// - Either SITE_PASSWORD for a single shared reviewer password
// - Or SITE_PASSWORDS_JSON with a JSON object that maps reviewer ids to passwords
//   Example: {"acme":"company-password","globex":"another-password"}
// - SUPABASE_URL: provided by Supabase
// - SUPABASE_SERVICE_ROLE_KEY: provided by Supabase
//
// Recommended function setting for this project:
// - Disable JWT verification in the Supabase function settings.
//   This function already checks the reviewer password itself.
//
// Expected bucket:
// - Private bucket named `Images`
//
// Expected file naming inside the bucket:
// - `categoryname-image-0N.ext`
// - Example: `ceramics-glass-image-01.jpg`
// - Example: `wood-lacquer-image-03.jpg`
//
// Expected request body:
// {
//   "password": "your-shared-password",
//   "paths": [
//     "ceramics-glass-image-01.jpg",
//     "ceramics-glass-image-03.jpeg"
//   ]
// }

import { createClient } from "npm:@supabase/supabase-js@2";

const BUCKET_NAME = "Images";
const SIGNED_URL_TTL_SECONDS = 60 * 60;
const legacyReviewerId = "shared";
const PASSWORD_MAX_LENGTH = 256;
const PATH_MAX_LENGTH = 512;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json",
};

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }

  try {
    const body = await request.json();
    const password = sanitizePasswordInput(body?.password);

    if (!Array.isArray(body?.paths) || body.paths.length === 0) {
      return json({ error: "No image paths were provided." }, 400);
    }

    const normalizedPaths = sanitizeImagePaths(body.paths);

    if (!normalizedPaths.length) {
      return json({ error: "No valid image paths were provided." }, 400);
    }

    const reviewerId = getReviewerIdForPassword(password);

    if (!reviewerId) {
      console.warn(
        JSON.stringify({
          event: "download-images.auth_denied",
          pathCount: normalizedPaths.length,
        })
      );
      return json({ error: "Invalid password" }, 401);
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const { data, error } = await supabase.storage
      .from(BUCKET_NAME)
      .createSignedUrls(normalizedPaths, SIGNED_URL_TTL_SECONDS);

    if (error) {
      return json({ error: error.message }, 500);
    }

    const signedEntries = (data ?? []).filter((entry) => {
      const signedUrl = getSignedUrlFromEntry(entry);
      return typeof entry?.path === "string" && Boolean(signedUrl);
    });
    const signedPathSet = new Set(signedEntries.map((entry) => entry.path));
    const missingPaths = normalizedPaths.filter((path) => !signedPathSet.has(path));

    if (missingPaths.length) {
      console.warn(
        JSON.stringify({
          event: "download-images.missing_paths",
          reviewerId,
          missingPathCount: missingPaths.length,
          missingPaths,
        })
      );
    }

    console.info(
      JSON.stringify({
        event: "download-images.access_granted",
        reviewerId,
        pathCount: normalizedPaths.length,
        signedPathCount: signedEntries.length,
        missingPathCount: missingPaths.length,
        paths: normalizedPaths,
      })
    );

    return json({ reviewerId, images: data ?? [], missingPaths }, 200);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unexpected error";
    return json({ error: message }, 500);
  }
});

function json(payload: unknown, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: corsHeaders,
  });
}

function getSignedUrlFromEntry(entry: unknown) {
  if (!entry || typeof entry !== "object") {
    return "";
  }

  const candidateEntry = entry as Record<string, unknown>;
  const signedUrl =
    candidateEntry.signedUrl ??
    candidateEntry.signedURL ??
    candidateEntry.signed_url ??
    candidateEntry.url;

  return typeof signedUrl === "string" ? signedUrl : "";
}

function getReviewerIdForPassword(password: unknown) {
  const sanitizedPassword = sanitizePasswordInput(password);

  if (!sanitizedPassword) {
    return "";
  }

  for (const [reviewerId, reviewerPassword] of getConfiguredReviewerPasswords()) {
    if (sanitizedPassword === reviewerPassword) {
      return reviewerId;
    }
  }

  return "";
}

function getConfiguredReviewerPasswords() {
  const multiPasswordConfig = Deno.env.get("SITE_PASSWORDS_JSON")?.trim();

  if (multiPasswordConfig) {
    const parsedConfig = JSON.parse(multiPasswordConfig);

    if (!parsedConfig || Array.isArray(parsedConfig) || typeof parsedConfig !== "object") {
      throw new Error("SITE_PASSWORDS_JSON must be a JSON object.");
    }

    const configuredPasswords = Object.entries(parsedConfig)
      .map(([reviewerId, reviewerPassword]) => [
        reviewerId.trim(),
        sanitizePasswordInput(reviewerPassword),
      ] as const)
      .filter(([reviewerId, reviewerPassword]) => reviewerId && reviewerPassword);

    if (!configuredPasswords.length) {
      throw new Error("SITE_PASSWORDS_JSON must include at least one reviewer password.");
    }

    return configuredPasswords;
  }

  const legacyPassword = Deno.env.get("SITE_PASSWORD")?.trim();

  if (legacyPassword) {
    const sanitizedLegacyPassword = sanitizePasswordInput(legacyPassword);

    if (sanitizedLegacyPassword) {
      return [[legacyReviewerId, sanitizedLegacyPassword]] as const;
    }
  }

  throw new Error("Set SITE_PASSWORD or SITE_PASSWORDS_JSON before calling download-images.");
}

function sanitizePasswordInput(value: unknown) {
  if (typeof value !== "string") {
    return "";
  }

  const sanitizedValue = value.trim();

  if (
    !sanitizedValue ||
    sanitizedValue.length > PASSWORD_MAX_LENGTH ||
    /[\u0000-\u001F\u007F]/.test(sanitizedValue)
  ) {
    return "";
  }

  return sanitizedValue;
}

function sanitizeImagePaths(paths: unknown[]) {
  return [
    ...new Set(
      paths
        .map((path) => sanitizeImagePath(path))
        .filter(Boolean)
    ),
  ];
}

function sanitizeImagePath(path: unknown) {
  if (typeof path !== "string") {
    return "";
  }

  const sanitizedPath = path.trim();

  if (!sanitizedPath || sanitizedPath.length > PATH_MAX_LENGTH) {
    return "";
  }

  if (/[\u0000-\u001F\u007F\\]/.test(sanitizedPath)) {
    return "";
  }

  if (
    sanitizedPath.startsWith("/") ||
    sanitizedPath.endsWith("/") ||
    sanitizedPath.includes("//")
  ) {
    return "";
  }

  const segments = sanitizedPath.split("/");

  if (segments.some((segment) => !segment || segment === "." || segment === "..")) {
    return "";
  }

  return sanitizedPath;
}
