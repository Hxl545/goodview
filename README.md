# GoodView

A calm, "watch at your pace" video site built from a Figma design. Plain HTML, CSS and JavaScript — no build step.

Screens: **Home**, **Watch**, **Library** (hash routes: `#/`, `#/watch/1`, `#/library`).

## Run locally

Open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8000
```

then visit http://localhost:8000.

## Project layout

```
index.html     page markup (latest: v4)
style.css      all styles
app.js         data, routing and rendering
images/        thumbnails cropped from the Figma export
versions/      earlier single-file iterations, for reference
  goodview-v1-first-build.html
  goodview-v2-real-thumbnails.html
  goodview-v3-figma-match.html
```

## Notes

- Saved videos, subscriptions, autoplay and the demo sign-in persist in the browser's local storage.
- Headings use Lora and body text uses Inter, loaded from Google Fonts (system fonts are the offline fallback).
- Video data lives in the `V` array near the top of `app.js`.
- v4 is the same design as v3, reformatted and split into separate files.
