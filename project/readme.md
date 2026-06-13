# GlowScore — Design System

> AI facial-attractiveness analysis, delivered as a sleek, dark, gold-lit web app. This design system captures GlowScore's brand: near-black canvas, a single confident gold accent, editorial serif headlines, and a "scan → score → glow up" product narrative.

---

## 1. Product context

**GlowScore** ("*Analyse ton attractivité par IA*" — *Analyze your attractiveness with AI*) is a French consumer web app. A user scans or uploads a photo of their face; a multimodal AI returns a **score out of 10**, sub-scores by category (facial structure, skin, style & care, harmony), three highlighted strengths, and — behind a paywall — five personalized recommendations and an improvement plan. Results can be exported as a shareable square card.

The emotional promise is aspirational and transformational: *"Deviens un 10/10 grâce à la Science"* — become a 10/10 through science. The marketing leans on cited studies linking attractiveness to income, hiring, confidence and sales.

**Surfaces**
- **Marketing landing** (`/`) — hero with before/after, analysis showcase, science/stats, transparent pricing, final CTA. Cooler near-black background (`#0d1117`), floating glass pill nav.
- **App** (authenticated) — dashboard (list of analyses), new-analysis flow with a live **FaceScanner** (camera, mesh overlay, capture sequence), and the analysis result page (circular score, sub-scores, paywall, full report, share card). Pure-black shell with a fixed left sidebar.
- **Auth** — login / register, email + Google OAuth.

**Business model** — Freemium. Free: global score + 3 strengths + category scores + AI summary. *One shot* (4,99 €): full report for one analysis. *Mensuel* (9,99 €/mois): unlimited analyses + progress tracking. Stripe checkout.

**Tech (original app)** — Next.js 15 (App Router) · React 19 · Tailwind v4 + shadcn + `@base-ui/react` · Supabase (auth + DB) · Google Gemini (`@google/generative-ai`) · Stripe · `lucide-react` icons · `next/font` (Playfair Display + Inter) · `sonner` toasts.

> ⚠️ **Sensitive domain.** The product scores human faces for "attractiveness." Keep the in-app legal disclaimer (results are automated, general information — *not* medical, dermatological or psychological advice). Avoid medicalized or absolute claims.

### Source

This system was reverse-engineered from the GlowScore codebase:
- **GitHub:** `https://github.com/davidsavvvv/GlowScore` (private, branch `master`)

Explore that repository to build higher-fidelity GlowScore designs — the `app/`, `components/`, and `app/globals.css` files are the source of truth for layout, copy and tokens.

---

## 2. Content fundamentals

**Language:** French (`lang="fr"`). All product copy is French. Pricing uses the French convention — comma decimal and a space before the unit: `4,99 €`, `9,99 €/mois`.

**Voice — informal, direct, motivational (tutoiement).** Marketing addresses the user as *tu/ton/ta*: *"L'IA scanne **ton** visage, **te** note sur 10 et **te** livre le plan exact pour **te** transformer en 90 jours."* Headlines are short, bold, aspirational and a little provocative: *"Deviens un 10/10 grâce à la Science"*, *"La beauté peut être mesurée et améliorée"*, *"Rejoins ceux qui transforment déjà leur apparence."*

**Register shifts to vouvoiement in transactional / result UI.** The scanner and report use *vous*: *"Regardez droit devant la caméra"*, *"Vos points forts"*, *"Votre analyse"*. Rule of thumb: **marketing = tu, in-app instructions/results = vous.** Match the surface you're writing for.

**Casing**
- Headlines & titles: **sentence case** ("Ton analyse faciale complète", "Tarifs transparents").
- Small eyebrow labels: **UPPERCASE** with wide tracking ("SCORE FACIAL", "RECOMMANDATIONS", "COLORIMÉTRIE", "AVANT", "APRÈS").
- Buttons: sentence case, often imperative ("Découvrir mon score", "Démarrer l'analyse", "Débloquer", "Nouvelle analyse").

**Emphasis pattern:** drop a single **gold word/number** into an otherwise white headline — *"Deviens un <gold>10/10</gold>"*, *"<gold>mesurée et améliorée</gold>"*. One gold accent per headline, no more.

**Numbers carry the brand.** Scores are always `/10` in product (`8.5/10`), `/100` only on the exported share card. Stats are concrete and sourced ("10-15% de plus", "55% plus de chances") with an academic citation underneath in faint text.

**No emoji** in the UI. Checkmarks are the lucide `Check` icon (a literal `✓` glyph appears only inside the canvas-rendered share image). Directional arrows `←` `→` appear as large type in the scanner. Keep it clean and editorial, not playful.

**Tone in one line:** confident, modern, science-flavored self-improvement — premium but accessible, never clinical or shaming.

---

## 3. Visual foundations

**Overall impression:** a dark, premium "spotlight" aesthetic — a near-black stage lit by a single soft **gold** glow, with editorial **Playfair Display** headlines floating over crisp **Inter** UI. Think luxury beauty meets quantified-self dashboard.

### Color
- **Canvas is near-black, never pure-flat.** App shell `#000`, default page `#0a0a0a`, marketing landing the slightly cooler `#0d1117`. Cards/surfaces step up to `#111111`; inputs and muted fills `#1a1a1a`.
- **One accent: gold `#FFD700`.** Hover deepens to `#FFC200` (app buttons); the gradient/amber partner is `#FFA500`. Text/icons on gold are **black** (`#000`). Gold is used surgically — score numbers, primary CTAs, active states, single highlighted words, glow.
- **Text is white on an opacity ladder, not a grey palette.** `white` → `white/70` → `white/50` → `white/40` → `white/30` → `white/20`. Muted grey `#888` for secondary text, `#555` for placeholders. This ladder also drives **borders** (`white/10`, `white/8`, `white/5`) and faint fills (`bg-white/[0.02]`).
- **Semantic score colors** (only on score readouts): red `#ff6b6b` (below par), gold `#FFD700` (on par), green `#4ade80` (strong).

### Typography
- **Playfair Display** (serif) for all display & headings — hero up to 72px, section heads 36–48px, weight 700, line-height ~1.05, sentence case. High-contrast serif = the "editorial / premium" signal.
- **Inter** for body, UI, labels, buttons. 14px is the UI default; 16–18px body; 12px meta/eyebrow.
- Eyebrow labels: 12px, weight 700, UPPERCASE, `letter-spacing: 0.12em`, in `white/40`.

### Spacing & layout
- 4px base scale. Sections breathe: `py-24` (96px) standard, `py-32` (128px) for hero/final CTA. Content max-widths ~`max-w-3xl`–`max-w-5xl`, centered.
- **App shell:** fixed 240px left sidebar (logo, nav, sign-out) on a `#000` background; main content centered in `max-w-3xl`. On mobile the sidebar collapses to a sticky top bar + bottom tab nav.
- **Marketing nav:** a **floating glass pill** — `sticky top-4`, centered, `rounded-2xl`, `border-white/10`, `bg-black/60`, `backdrop-blur-xl`.

### Shape & radius
- Rounded and soft. Cards/inputs `rounded-xl` (0.75rem); panels, CTAs, the nav pill, photo tiles `rounded-2xl` (1rem); pills, badges, score rings, avatars fully round. Base `--radius` is `0.5rem`.

### Borders, cards & shadows
- **Cards** = `#111` fill + a **hairline** (`ring-1 ring-white/10` or `border-white/8`) + generous radius. Glassy variants use `bg-black/40` + `backdrop-blur`. Marketing "feature" cards often use `bg-white/[0.02]` with a `white/8` border.
- **Shadows are gold glows, not drop shadows.** `card-glow` = `0 0 40px rgba(255,215,0,0.06)`; `gold-glow` = `0 0 20px rgba(255,215,0,0.3)`; score ring halo `0 0 60px rgba(255,215,0,0.2)`. There are essentially no neutral grey shadows — depth comes from light, not from cast shadow.

### Backgrounds & ambient light (signature motif)
- **Gold glow blobs.** Large blurred radial gradients (`radial-gradient(ellipse, #FFD700, transparent)`, `blur(120–150px)`, opacity `0.15–0.2`) sit behind the hero, the analysis section and the final CTA. This is *the* GlowScore atmosphere — one warm light source on a dark stage.
- No photography in the shell; faces appear only as the user's own scan, shown inside mesh-overlaid `rounded-2xl` tiles on a `#1a2030` placeholder. The scanner draws a **gold mesh grid**, **corner brackets**, a moving **scan line**, and a **face oval** over the live camera.

### Motion & states
- **Transitions are quiet:** `transition-colors` / `transition-all` on hover, ~150–300ms; the score ring animates its stroke over `1s ease`; progress bars `transition-all duration-700`. The scanner uses pulses (`animate-pulse`), a spinner, and a brief flash on capture.
- **Hover:** primary white CTA → `bg-white/90`; gold CTA → `bg-[#FFC200]`; ghost/nav items lift opacity (`text-white/40 → text-white`) and pick up a faint `bg-white/5`. Cards brighten their border (`border-white/8 → white/15`).
- **Press:** buttons nudge down 1px (`active:translate-y-px`). No bouncy/springy easing — keep it composed.
- Use transparency + blur deliberately: floating nav, glassy result cards, uploading overlay (`bg-black/80`). Reserve blur for genuinely floating/overlay surfaces.

---

## 4. Iconography

- **Primary set: [Lucide](https://lucide.dev)** (`lucide-react` in the app). Clean 1.5–2px stroke, rounded line caps, no fills. This system loads Lucide from CDN — it is the real GlowScore icon set, not a substitute.
- Icons seen in product: `ArrowRight`, `ArrowLeft`, `Check`, `Plus`, `Lock`, `Camera`, `Star`, `LayoutDashboard`, `Settings`, `Home`, `LogOut`, `Download`, `Share2`, `Loader2`. Sizes are small and consistent — `w-4 h-4` (16px) inline, `w-5 h-5` (20px) nav, `w-3/3.5` inside chips.
- **Color:** icons inherit text color — usually `white/30–60` muted, or **gold** when active/affirmative (the `Check` in strengths lists, the active bottom-nav item).
- **Brand SVGs:** the Google "G" logo is inlined as a multi-color SVG on the auth buttons (kept in `assets/`). The original `public/` shipped only Next.js scaffolding SVGs (no real brand logo), so GlowScore's "logo" is a **type wordmark**: *Glow* in gold + *Score* in white, Playfair Display 700. See `assets/logo-wordmark.svg` and the score-ring monogram `assets/logo-mark.svg`.
- **No emoji, no unicode pictographs** as icons. The only non-lucide glyphs are the `←` `→` arrows rendered as large Playfair/Inter type inside the scanner, and a `✓` baked into the canvas share image.
- The face **mesh grid** (thin gold lines) and **corner brackets** are a recurring iconographic motif of the scan/analysis experience — reuse them to signal "AI is measuring."

---

## 5. Index / manifest

**Root**
- `styles.css` — global entry point (consumers link this). `@import`s only.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill front-matter wrapper.

**`tokens/`** — CSS custom properties (all prefixed `--gs-`, plus semantic aliases)
- `fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `effects.css`

**`assets/`**
- `logo-wordmark.svg` · `logo-mark.svg` (score-ring monogram)

**`guidelines/`** — foundation specimen cards (Design System tab)
- Colors: `colors-gold` · `colors-surfaces` · `colors-text` · `colors-score`
- Type: `type-display` · `type-body` · `type-labels`
- Spacing: `radius` · `spacing-scale` · `effects-glows`
- Brand: `brand-logo`

**`components/`** — reusable React primitives (each has `.jsx` + `.d.ts` + `.prompt.md`, namespace `window.GlowScoreDesignSystem_b335d6`)
- `core/` — **Button** (gold/white/secondary/outline/ghost), **Badge**, **Card** (surface/glass/accent/glow), **Input**
- `score/` — **ScoreRing** (signature gauge), **SubScore** (labelled progress), **ScoreChip** (tier-colored readout)
- `navigation/` — **NavItem** (sidebar row), **GlassNav** (floating marketing pill)
- `effects/` — **GlowBlob** (ambient gold glow)

**`ui_kits/`** — full-screen product recreations
- `marketing/index.html` — the landing page (hero, analysis showcase, science, pricing, CTA).
- `app/index.html` + `screens.jsx` — interactive app: login → dashboard → face scanner → scored result with paywall.
- `shared/icon.js` — Lucide icon wrapper shared by both kits.

> Both kits load the compiled `_ds_bundle.js` — open them through the design-system preview server so the bundle and `styles.css` resolve. Components, kits and screens appear in the Design System tab and Starting Points picker.
