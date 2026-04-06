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

- `src`: path to your image file
- `title`: short legend title
- `meta`: smaller legend text
- `frame.width`: width of the card in the gallery
- `frame.aspectRatio`: shape of the frame
- `image.scale`: zoom level inside the frame
- `image.position`: crop anchor, for example `50% 40%`
- `image.translateX` and `image.translateY`: manual nudge values

If `src` is left empty, the site shows a generated placeholder.

## Suggested image folder

Place new images in [`assets/images`](/Users/dmazzuca/src/emmafalkehed/assets/images).

## Font files

If you want to use FF Zwo on the website, place the licensed webfont files in
[`assets/fonts`](/Users/dmazzuca/src/emmafalkehed/assets/fonts) and tell me the exact filenames.

Best format:

- `.woff2`
- `.woff`

If you only have `.otf` or `.ttf`, I can wire those too, but webfont files are better for a site.
