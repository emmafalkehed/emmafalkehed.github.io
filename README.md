# Emma Falkehed Portfolio

Minimal static portfolio website for product and furniture design applications.

Editing help is in `PORTFOLIO-GUIDE.md`.

## Run locally

Use either of these:

```bash
npm run start
```

```bash
./scripts/serve.sh
```

The site will open with `live-server` at `http://127.0.0.1:4173`.

## Update the portfolio

Edit [`script.js`](/Users/dmazzuca/src/emmafalkehed/script.js).

For each item you can update:

- `slug`: short unique id inside the category
- `src`: path to your image file
- `title`: short legend title
- `meta`: smaller legend text
- `alt`: accessible image description
- `column`: desktop column placement (`1`, `2`, or `3`)
- `padding`: inner spacing around the image (`none`, `small`, `medium`, `big`)
- `zoom`: extra zoom inside the frame (`0` to `1`)
- `storagePath`: optional custom Supabase bucket path if it differs from the filename in `src`

If `src` is left empty, the site shows a generated placeholder.

For image positioning and crop adjustments, edit
[`gallery-overrides.css`](/Users/dmazzuca/src/emmafalkehed/gallery-overrides.css).

## Login, loading, and cache behavior

After entering the review password, the site now:

- requests signed private image URLs from the Supabase Edge Function
- keeps those signed URLs in `localStorage` for about 55 minutes
- keeps the accepted password in `sessionStorage` for the current tab session
- shows a loading page and waits until all portfolio images are loaded before opening the gallery

Reviewer quick links can also include `?pwd=...`, for example
`https://emmafalkehed.github.io/?pwd=example-password`.

When that parameter is present, the site:

- removes `pwd` from the URL immediately with `history.replaceState`
- uses the provided password once through the normal unlock flow if no session password is already active
- falls back to the normal manual password form if the linked password is invalid

This keeps the smoother post-login experience while still reducing repeated API calls during local
development.

The loading screen also shows an estimated MB progress value. Right now that estimate is based on
the whole portfolio being `143 MB` in total, spread proportionally across the current image count.
If the total portfolio weight changes later, update `estimatedPortfolioTotalMegabytes` in
[`script.js`](/Users/dmazzuca/src/emmafalkehed/script.js).

## Suggested image folder

Place new images in [`assets/images`](/Users/dmazzuca/src/emmafalkehed/assets/images).

For Supabase Storage, upload each private image to the `Images` bucket using the same standardized
filename from `assets/images`, for example `ceramics-glass-image-01.jpg`.

## Font files

If you want to use FF Zwo on the website, place the licensed webfont files in
[`assets/fonts`](/Users/dmazzuca/src/emmafalkehed/assets/fonts) and tell me the exact filenames.

Best format:

- `.woff2`
- `.woff`

If you only have `.otf` or `.ttf`, I can wire those too, but webfont files are better for a site.
