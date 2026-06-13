# GlowScore — Marketing UI kit

Recreation of the GlowScore marketing landing (`app/page.tsx`). Cooler near-black background (`#0d1117`) lit by gold glow blobs.

- **`index.html`** — full landing: floating glass nav, hero with before/after tiles, analysis showcase (score ring + chips + recommendations), science/stats, pricing tiers, final CTA, footer.

Composes `GlassNav`, `Button`, `Card`, `ScoreRing`, `ScoreChip`, `GlowBlob`, `Badge` from the design system bundle. Icons via Lucide (`../shared/icon.js`). Loads `../../_ds_bundle.js` — open through the design-system server so the bundle resolves.

Voice: tutoiement, aspirational. One gold accent per headline.
