# Portfolio Editing Guide

This guide is for simple day-to-day changes to the portfolio.

You only need to use 2 files most of the time:

- `script.js`
- `gallery-overrides.css`

## What each file does

### `script.js`
This is where the pictures live.

For each picture, you can change:

- which category it belongs to
- the image filename
- the title
- the smaller description below

### `gallery-overrides.css`
This is where you adjust how each picture sits inside the page.

You can use it to:

- zoom in
- move left or right
- move up or down
- crop to a fixed height if needed
- keep the full natural height if you do not want cropping

## Before you start

It helps to give files short, clear names.

Example:

- `marceau-detail-01.jpg`
- `tray-side-view.jpg`

For the private review site, each image should be uploaded to Supabase Storage using that same
filename, unless you set a custom `storagePath` in `script.js`.

## What happens after login

When you enter the review password, the gallery now waits on a loading page before it opens.

The site will:

- fetch secure signed image links from Supabase
- cache those signed links in the browser for about 55 minutes
- preload the full portfolio
- open the gallery only after all private images are loaded

For reviewer sharing, you can also send a link with `?pwd=...`.
Example: `https://emmafalkehed.github.io/?pwd=example-password`

The website removes that `pwd` value from the address bar right away, then tries it once through
the normal unlock flow. If it is wrong, the regular password form still appears.

This keeps the private gallery smoother to browse, while still reducing repeated API calls during
local development.

The loading page shows:

- image progress, for example `12 of 25 images`
- an estimated MB progress value based on the whole portfolio being `143 MB`

If that total changes later, update `estimatedPortfolioTotalMegabytes` in `script.js`.

## How to change a title or description

Open `script.js`.

Each picture has a small block that looks like this:

```js
{
  slug: "penelope",
  title: "Penelope",
  meta: "Pencil holders, studio composition",
  src: "COLLECTION G&B_OBJETS DECO_POT A CRAYON_PENELOPE_01.jpg",
  alt: "Three Penelope pencil holders arranged on a white background.",
},
```

Change:

- `title` for the main caption
- `meta` for the smaller text below

You can leave `alt` alone if you want, but it is good to update it when you change the picture.

## How to replace a picture

1. Upload the new image to the private Supabase bucket using the filename you want to reference
3. Open `script.js`
4. Find the picture you want to replace
5. Change only the `src` line

Example:

```js
src: "my-new-picture.jpg",
```

If the bucket filename is different, add:

```js
storagePath: "my-custom-file-name.jpg",
```

## How to add a new picture

1. Upload the new image to the private Supabase bucket using the filename you want to reference
3. Open `script.js`
4. Find the category where you want it
5. Copy one existing picture block
6. Paste it underneath another picture in the same category
7. Update `slug`, `title`, `meta`, `src`, and `alt`

Example:

```js
{
  slug: "new-bowl",
  title: "New bowl",
  meta: "Stoneware, satin finish",
  src: "new-bowl.jpg",
  alt: "Stoneware bowl on a white background.",
},
```

Important:

- `slug` should be short and unique inside that category
- use lowercase
- use hyphens instead of spaces
- you can also add `column`, `padding`, `zoom`, or `storagePath` when needed
- older `assets/images/...` values still work, but use plain filenames for new edits

Good examples:

- `new-bowl`
- `tray-detail`
- `glass-study-2`

## How to remove a picture

Open `script.js`, find the picture block, and delete the whole block from `{` to `},`

If you are not sure, remove one picture at a time and save.

## How to move a picture higher or lower in a category

In `script.js`, each category is a list of picture blocks.

The order in that list is the order shown on the website.

To move a picture:

1. Cut the full picture block
2. Paste it above or below another one in the same category

## How to move a picture to another category

1. Cut the full picture block from its current category
2. Paste it inside another category

The categories are:

- `ceramics-glass`
- `wood-lacquer`
- `metal-silver`
- `furniture`
- `projects`

## How to resize, zoom, center, or crop a picture

Open `gallery-overrides.css`.

Each picture has its own section name, for example:

```css
.work-card[data-card="ceramics-glass-penelope"] {
  --frame-crop-height: auto;
  --media-width: 100%;
  --media-scale: 1;
  --media-shift-x: 0px;
  --media-shift-y: 0px;
  --media-origin: center center;
}
```

In `script.js`, you can also use:

- `column` to choose desktop column `1`, `2`, or `3`
- `padding` to add inner spacing: `none`, `small`, `medium`, or `big`
- `zoom` for extra zoom inside the frame, from `0` to `1`

### What each line means

`--frame-crop-height`

- `auto` = show full image height
- `26rem` or another value = crop to a fixed visible height

`--media-width`

- `100%` = normal width
- `110%` = slightly wider inside the frame

`--media-scale`

- `1` = normal
- `1.05` = slightly zoomed in
- `1.15` = more zoomed in

`--media-shift-x`

- moves left or right
- negative = left
- positive = right

Examples:

- `-10px`
- `12px`

`--media-shift-y`

- moves up or down
- negative = up
- positive = down

Examples:

- `-20px`
- `15px`

`--media-origin`

- usually leave as `center center`

## Simple crop examples

### Keep the full picture

```css
.work-card[data-card="ceramics-glass-penelope"] {
  --frame-crop-height: auto;
  --media-width: 100%;
  --media-scale: 1;
  --media-shift-x: 0px;
  --media-shift-y: 0px;
  --media-origin: center center;
}
```

### Zoom in a little and move up

```css
.work-card[data-card="ceramics-glass-penelope"] {
  --frame-crop-height: 28rem;
  --media-width: 108%;
  --media-scale: 1.05;
  --media-shift-x: 0px;
  --media-shift-y: -18px;
  --media-origin: center center;
}
```

### Move a picture slightly left

```css
.work-card[data-card="wood-lacquer-nestor-detail"] {
  --frame-crop-height: auto;
  --media-width: 100%;
  --media-scale: 1;
  --media-shift-x: -14px;
  --media-shift-y: 0px;
  --media-origin: center center;
}
```

## If you add a completely new picture

After adding it in `script.js`, also add a matching block in `gallery-overrides.css`.

Example:

If your new picture in `script.js` has:

```js
slug: "new-bowl"
```

inside the `ceramics-glass` category, then the matching CSS block is:

```css
.work-card[data-card="ceramics-glass-new-bowl"] {
  --frame-crop-height: auto;
  --media-width: 100%;
  --media-scale: 1;
  --media-shift-x: 0px;
  --media-shift-y: 0px;
  --media-origin: center center;
}
```

## Easiest editing workflow

1. Add or change the picture in `script.js`
2. Save
3. Check the page
4. If the framing feels wrong, open `gallery-overrides.css`
5. Tweak only one value at a time

Best order:

1. `--frame-crop-height`
2. `--media-scale`
3. `--media-shift-y`
4. `--media-shift-x`

## Good habit

When something looks wrong, usually only one of these needs changing:

- the `src` path
- the `slug`
- the `title`
- the crop values in `gallery-overrides.css`

Keep changes small and save often.

## How to see your changes locally

This project includes a small start script for the website.

You do not need to understand coding to use it.

### What is Terminal

Terminal is a simple app on your Mac where you can type short commands.

To open it:

1. Press `Command + Space`
2. Type `Terminal`
3. Press `Enter`

### How to start the website

Copy and paste these two lines, one after the other:

```bash
cd /Users/dmazzuca/src/emmafalkehed
./scripts/serve.sh
```

After that:

- a browser window may open by itself
- if not, open your browser and go to `http://127.0.0.1:4173`

If the `.images` folder is empty or missing, the preview will automatically use the normal secure
Supabase image loading path.

### While you are editing

1. Keep Terminal open
2. Make your changes in the project files
3. Save the file
4. Go back to the browser
5. Refresh the page if needed

If you changed private images, the loading screen may appear again after refresh while the browser
reloads the full portfolio. That is expected.

### How to stop the local website

1. Click the Terminal window
2. Press `Control + C`

That stops the local preview.

## Very short GitHub guide

When you are happy with your changes and you are in the project folder, use:

```bash
git push
```

If you already started the local server in Terminal, stop it first with `Control + C`, then type:

```bash
git push
```
