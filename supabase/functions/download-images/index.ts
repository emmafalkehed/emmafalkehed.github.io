// Supabase Edge Function name: `download-images`
// Create the function in Supabase with exactly that name so it matches the frontend.
//
// Required Supabase secrets:
// - SITE_PASSWORD: the shared reviewer password
// - SUPABASE_URL: provided by Supabase
// - SUPABASE_SERVICE_ROLE_KEY: provided by Supabase
//
// Recommended function setting for this project:
// - Disable JWT verification in the Supabase function settings.
//   This function already checks the shared password itself.
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
    const sitePassword = sanitizePasswordInput(Deno.env.get("SITE_PASSWORD"));

    if (!sitePassword) {
      return json({ error: "Server password is not configured." }, 500);
    }

    if (!password || password !== sitePassword) {
      return json({ error: "Invalid password" }, 401);
    }

    if (!Array.isArray(body?.paths) || body.paths.length === 0) {
      return json({ error: "No image paths were provided." }, 400);
    }

    const normalizedPaths = sanitizeImagePaths(body.paths);

    if (!normalizedPaths.length) {
      return json({ error: "No valid image paths were provided." }, 400);
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

    return json({ images: data ?? [] }, 200);
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
