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
- the picture file
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

Put new pictures inside:

- `assets/images`

It helps to give files short, clear names.

Example:

- `marceau-detail-01.jpg`
- `tray-side-view.jpg`

## How to change a title or description

Open `script.js`.

Each picture has a small block that looks like this:

```js
{
  slug: "penelope",
  title: "Penelope",
  meta: "Pencil holders, studio composition",
  src: "assets/images/COLLECTION G&B_OBJETS DECO_POT A CRAYON_PENELOPE_01.jpg",
  alt: "Three Penelope pencil holders arranged on a white background.",
},
```

Change:

- `title` for the main caption
- `meta` for the smaller text below

You can leave `alt` alone if you want, but it is good to update it when you change the picture.

## How to replace a picture

1. Put the new image in `assets/images`
2. Open `script.js`
3. Find the picture you want to replace
4. Change only the `src` line

Example:

```js
src: "assets/images/my-new-picture.jpg",
```

## How to add a new picture

1. Put the new image in `assets/images`
2. Open `script.js`
3. Find the category where you want it
4. Copy one existing picture block
5. Paste it underneath another picture in the same category
6. Update `slug`, `title`, `meta`, `src`, and `alt`

Example:

```js
{
  slug: "new-bowl",
  title: "New bowl",
  meta: "Stoneware, satin finish",
  src: "assets/images/new-bowl.jpg",
  alt: "Stoneware bowl on a white background.",
},
```

Important:

- `slug` should be short and unique inside that category
- use lowercase
- use hyphens instead of spaces

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

### While you are editing

1. Keep Terminal open
2. Make your changes in the project files
3. Save the file
4. Go back to the browser
5. Refresh the page if needed

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
