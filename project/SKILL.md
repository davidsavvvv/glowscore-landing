---
name: glowscore-design
description: Use this skill to generate well-branded interfaces and assets for GlowScore (AI facial-attractiveness analysis), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation
- **readme.md** — the full design guide: product context, content/voice rules, visual foundations, iconography, and a file index.
- **styles.css** — single global stylesheet to link; pulls in all `tokens/*.css` (colors, typography, spacing, effects, fonts).
- **tokens/** — every CSS custom property (all `--gs-` prefixed) plus semantic aliases.
- **guidelines/** — visual specimen cards (colors, type, spacing, effects, brand).
- **components/** — reusable React primitives (`Button`, `Badge`, `Card`, `Input`, `ScoreRing`, `SubScore`, `ScoreChip`, `NavItem`, `GlassNav`, `GlowBlob`). Each has a `.prompt.md` with usage.
- **ui_kits/** — full product recreations: `marketing/` (landing) and `app/` (login, dashboard, scanner, result).
- **assets/** — `logo-wordmark.svg`, `logo-mark.svg`.

## The brand in one breath
Dark, premium "spotlight" look: near-black canvas lit by a single soft **gold (#FFD700)** glow, editorial **Playfair Display** headlines over crisp **Inter** UI. One gold accent per headline. Black text on gold. Icons are **Lucide**. French copy — tutoiement in marketing, vouvoiement for in-app instructions. No emoji.
