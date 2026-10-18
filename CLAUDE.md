# KMF Media Bhakti

Vite + React 18 + react-router-dom 6, plain CSS with tokens (no UI or animation library), English and Hindi. `npm run dev` / `npm run build`.

- **Content is data.** Pages read from `src/content/{site,services,photos}.js`; UI strings from `src/i18n/ui.js`. Every visible string is `{ en, hi }`; use `pick(obj)` for content and `t(key)` for UI strings (`useLang()`). Never hard-code English in a component.
- **Routes** live in `src/App.jsx`. Service pages are one template (`pages/ServiceDetail.jsx`) driven by `content/services.js`; adding a service means adding one entry there (and a photo in `photos.js`).
- **Design language:** ivory / peach / maroon / gold / kesar / night bands (`styles/tokens.css`, `styles/layout.css`). Recurring shapes: temple-arch photo frames (`Arch`), scalloped band edges (`.band--scallop` with an inline `--band` colour), gold ticker with a wavy edge. Gold is for light and highlight; kesar is the primary call-to-action colour.
- **Lit text** (`LitText` + `lib/useDiyaLight.js`): words glow under the cursor via `--lx/--ly` CSS variables written from a rAF loop. Keep the `.lit` wrapper mounted when text changes (the hook holds a reference to it); only the inner spans are keyed.
- **Hindi:** never letter-space Devanagari (`:lang(hi)` resets it); headings get extra line height; Tiro Devanagari is for shlokas only.
- **Photos** are Pexels stock, optimised to WebP in `public/photos`. Each slot has a designed fallback (`Photo.jsx`). Credits: `public/photos/CREDITS.md` and `/credits`.
- **Fonts** are self-hosted via fontsource (`@fontsource-variable/anek-devanagari` weight axis only, `@fontsource/tiro-devanagari-hindi` 400).
- **Forms:** `lib/submitForm.js`. `VITE_FORM_ENDPOINT` (public URL) enables POST; unset falls back to `mailto:` to the address in `site.js`.
- **Routing in production:** `vercel.json` rewrites everything except `/photos`, `/assets` and static files to `index.html`.
- `.claude/` holds the hook scripts; commands use `$CLAUDE_PROJECT_DIR`. `push-gate.local.sh` is local and gitignored.
- **Unselectable page:** `styles/base.css` sets `user-select: none` on everything (and stops image/link dragging). Form fields (`input`, `textarea`, `select`) are exempt on purpose, otherwise typing and pasting break, especially on Safari. Don't remove that exemption.
