# GlowScore — App UI kit

Interactive click-through recreation of the authenticated GlowScore app.

- **`index.html`** — shell + state router (`login → dashboard → scan → result`).
- **`screens.jsx`** — the four screens:
  - **Login** — email/password + Google OAuth button (any submit advances to the dashboard).
  - **Dashboard** — fixed sidebar (`NavItem`s), analyses grid with locked/free cards, "Nouvelle analyse" CTA.
  - **Scanner** — simulated FaceScanner: corner brackets, gold face oval, moving scan line, phase instructions (Face → Gauche → Droite), step dots, then an "Analyse en cours" spinner that lands on the result.
  - **Result** — `ScoreRing`, points forts, detailed `SubScore`s, and the paywall (One shot / Mensuel). Unlocking swaps the paywall for the AI recommendations.

Composes `Button`, `Input`, `Card`, `NavItem`, `ScoreRing`, `SubScore` from the bundle. Icons via Lucide (`../shared/icon.js`). The scanner is simulated on timers (no real camera) so it runs anywhere. Loads `../../_ds_bundle.js` — open through the design-system server.

In-app register shifts to vouvoiement ("Regardez…", "Vos points forts").
