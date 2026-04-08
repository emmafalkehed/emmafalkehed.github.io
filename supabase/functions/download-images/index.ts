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
    const { password, paths } = await request.json();

    if (!Array.isArray(paths) || paths.length === 0) {
      return json({ error: "No image paths were provided." }, 400);
    }

    const normalizedPaths = [...new Set(paths)]
      .filter((path) => typeof path === "string")
      .map((path) => path.trim())
      .filter(Boolean);

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

    console.info(
      JSON.stringify({
        event: "download-images.access_granted",
        reviewerId,
        pathCount: normalizedPaths.length,
        paths: normalizedPaths,
      })
    );

    return json({ reviewerId, images: data ?? [] }, 200);
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

function getReviewerIdForPassword(password: unknown) {
  if (typeof password !== "string" || !password) {
    return "";
  }

  const normalizedPassword = password.trim();

  if (!normalizedPassword) {
    return "";
  }

  for (const [reviewerId, reviewerPassword] of getConfiguredReviewerPasswords()) {
    if (normalizedPassword === reviewerPassword) {
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
        typeof reviewerPassword === "string" ? reviewerPassword.trim() : "",
      ] as const)
      .filter(([reviewerId, reviewerPassword]) => reviewerId && reviewerPassword);

    if (!configuredPasswords.length) {
      throw new Error("SITE_PASSWORDS_JSON must include at least one reviewer password.");
    }

    return configuredPasswords;
  }

  const legacyPassword = Deno.env.get("SITE_PASSWORD")?.trim();

  if (legacyPassword) {
    return [[legacyReviewerId, legacyPassword]] as const;
  }

  throw new Error("Set SITE_PASSWORD or SITE_PASSWORDS_JSON before calling download-images.");
}
