# GoodView

A calm, "watch at your pace" video site built from a Figma design. Plain HTML, CSS and JavaScript — no build step.

Screens: **Home**, **Watch**, **Library**, and individual **Channel** pages (hash routes: `#/`, `#/watch/1`, `#/library`, `#/channel/HG`).

The interface can be switched between English, Spanish, French, and Traditional Chinese. The selected language is saved in the browser.

## Run locally

The Node.js server serves the site and its same-origin anonymous metrics API. Node.js 18 or newer is recommended. No packages need to be installed.

```
node server.js
```

then visit http://localhost:4173. The server listens on `127.0.0.1` by default. Set `PORT` to change the port or `HOST` if you intentionally want to expose the server to another network.

## Project layout

```
index.html     page markup (latest: v4)
style.css      all styles
app.js         data, routing and rendering
i18n.js        interface translations and language switching
server.js      static-file server and aggregate metrics API
images/        thumbnails cropped from the Figma export
versions/      earlier single-file iterations, for reference
  goodview-v1-first-build.html
  goodview-v2-real-thumbnails.html
  goodview-v3-figma-match.html
```

## Notes

- Saved videos, subscriptions, autoplay and the demo sign-in persist in the browser's local storage. The sign-in window is a UI demo only; it does not verify or send credentials. Do not enter a real password.
- The Library opens to Saved videos. Save and remove actions immediately update the saved-video list; subscriptions are managed in one dedicated Library tab with a single subscribe/unsubscribe action per channel.
- Signed-in demo users can use the avatar menu for profile information, their videos, saved videos, watch history, subscriptions, and sign out.
- A fixed Back to top button returns to the main navigation.
- Main navigation, account, video, and Library actions include hover descriptions explaining what they do.
- Use the language selector in the header to switch between English, Spanish, French, and Traditional Chinese. Your choice is saved on this device.
- Usability metrics are opt-in. GoodView counts route backtracking, Backspace/Delete presses in search and sign-in fields, and sign-in/profile dialog dismissals. It never sends typed text, credentials, account details, or browser identifiers. Counts from consenting visitors are combined in `.data/metrics.json`; this file is excluded from version control. Turning sharing off stops future counts, but already-combined totals cannot be separated by visitor.
- View the combined counts and change the consent choice in Library → Usability metrics. Keep the Node server running for metrics collection and to view the server's totals.
- Headings use Lora and body text uses Inter, loaded from Google Fonts (system fonts are the offline fallback).
- Video data lives in the `V` array near the top of `app.js`.
- Channel pages show that channel's uploaded videos and include a search limited to that channel.
- v4 is the same design as v3, reformatted and split into separate files.
