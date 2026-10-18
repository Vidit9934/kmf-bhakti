# KMF Media Bhakti website

Multi-page site (Vite, React 18, react-router) in English and Hindi. Design idea: "Prabhat", dawn at the temple: ivory paper, maroon, gold and saffron, temple-arch photo frames, and words that light up gold under the cursor.

```
npm install
npm run dev       # http://localhost:5173
npm run build     # output in dist/ (vercel.json already rewrites routes to index.html)
```

## Pages

`/` Home, `/services`, `/services/<slug>` (8 pages: live-broadcasting, religious-event-management, celebrity-management, social-media-management, graphic-video-editing, audio-production, song-promotion, song-distribution), `/equipment`, `/about`, `/team`, `/testimonials`, `/contact`, `/credits`.

## Where to edit

| What | File |
|---|---|
| Services (text, "what this covers", "how we work") | `src/content/services.js` |
| Contact details, team, testimonials, equipment, stats, about, verse | `src/content/site.js` |
| Photos (path, size, focal point, alt text, credit) | `src/content/photos.js` |
| Interface text (buttons, labels, form messages) | `src/i18n/ui.js` |
| Colours, fonts, spacing | `src/styles/tokens.css` |

Every visible string is `{ en, hi }`; a missing Hindi value falls back to English.

## Please review (marked `CONFIRM` / `NEW` in the code)

- **Photos are free-licence stock images from Pexels**, not KMF's own work, and the people in them are not KMF staff. Replace them by dropping files in `public/photos/` and editing `photos.js`. Credits are in `public/photos/CREDITS.md` and on the `/credits` page.
- Contact phone and email come from the source video and look like placeholders. Social links point at each platform's home page.
- Written for this site, not in the source: Song Promotion and Song Distribution copy, every service's "what this covers" and "how we work", the hero supporting line, the Hindi channel names, and **all Hindi text**.
- "Canon 11 X 60" was left out of the equipment list because the model could not be verified. "Rhode NT1A" is spelled Rode NT1-A.
- Team photos: add `photo: '/team/name.jpg'` (file in `public/team/`) to a person in `site.js`. Founder LinkedIn and X links are empty, so those icons stay hidden until you add URLs.
- The source says "Founded 2018" and "5+ years"; both are kept.

## Forms

The contact form POSTs JSON to `VITE_FORM_ENDPOINT` when it is set (copy `.env.example` to `.env`). Without it it opens a prefilled email to the address in `site.js`.
