// GlowScore app screens. Loaded as a Babel module; exports screens to window.
const { useState, useEffect, useRef } = React;

function Wordmark({ size = 18 }) {
  return (
    <span className="serif" style={{ fontWeight: 700, fontSize: size }}>
      <span style={{ color: "var(--gs-gold)" }}>Glow</span>Score
    </span>
  );
}

/* ───────────────────────── LOGIN ───────────────────────── */
function Login({ go }) {
  const { Button, Input } = window.GlowScoreDesignSystem_b335d6;
  const Icon = window.GSIcon;
  return (
    <div style={{ minHeight: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--gs-bg)", padding: 24 }}>
      <div style={{ width: "100%", maxWidth: 360 }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div className="serif" style={{ fontSize: 26, fontWeight: 700, color: "var(--gs-gold)" }}>GlowScore</div>
          <p style={{ color: "var(--gs-muted)", marginTop: 8, fontSize: 14 }}>Connectez-vous à votre compte</p>
        </div>
        <div style={{ background: "var(--gs-surface)", border: "1px solid var(--gs-border)", borderRadius: "var(--gs-radius-xl)", padding: 24, display: "flex", flexDirection: "column", gap: 16 }}>
          <Button variant="outline" block onClick={() => go("dashboard")} style={{ height: 44 }}
            iconLeft={<GoogleG />}>Continuer avec Google</Button>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ flex: 1, height: 1, background: "var(--gs-border)" }} />
            <span style={{ color: "var(--gs-muted-2)", fontSize: 12 }}>ou</span>
            <div style={{ flex: 1, height: 1, background: "var(--gs-border)" }} />
          </div>
          <Input placeholder="Email" type="email" defaultValue="alex@exemple.fr" />
          <Input placeholder="Mot de passe" type="password" defaultValue="••••••••" />
          <Button variant="gold" block onClick={() => go("dashboard")}>Se connecter</Button>
        </div>
        <p style={{ textAlign: "center", color: "var(--gs-muted)", fontSize: 14, marginTop: 16 }}>
          Pas de compte ? <a href="#" style={{ color: "var(--gs-gold)" }} onClick={(e) => { e.preventDefault(); go("dashboard"); }}>S'inscrire</a>
        </p>
      </div>
    </div>
  );
}
function GoogleG() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
  );
}

/* ───────────────────────── SHELL ───────────────────────── */
function Shell({ active, go, children }) {
  const { NavItem } = window.GlowScoreDesignSystem_b335d6;
  const Icon = window.GSIcon;
  const items = [
    { key: "dashboard", icon: "layout-dashboard", label: "Mes analyses" },
    { key: "scan", icon: "camera", label: "Nouvelle analyse" },
    { key: "settings", icon: "settings", label: "Paramètres" },
  ];
  return (
    <div style={{ minHeight: "100%", display: "flex", background: "#000", color: "#fff" }}>
      <aside style={{ width: 240, borderRight: "1px solid var(--gs-white-05)", padding: 20, display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <div style={{ marginBottom: 36, cursor: "pointer" }} onClick={() => go("dashboard")}><Wordmark /></div>
        <nav style={{ display: "flex", flexDirection: "column", gap: 4, flex: 1 }}>
          {items.map(it => (
            <NavItem key={it.key} icon={<Icon name={it.icon} size={16} />} active={active === it.key}
              onClick={(e) => { e.preventDefault(); go(it.key === "settings" ? "dashboard" : it.key); }}>{it.label}</NavItem>
          ))}
        </nav>
        <NavItem icon={<Icon name="log-out" size={16} />} onClick={(e) => { e.preventDefault(); go("login"); }}>Déconnexion</NavItem>
      </aside>
      <div style={{ flex: 1, minWidth: 0 }}>{children}</div>
    </div>
  );
}

/* ───────────────────────── DASHBOARD ───────────────────────── */
function Dashboard({ go, analyses }) {
  const { Button, Badge } = window.GlowScoreDesignSystem_b335d6;
  const Icon = window.GSIcon;
  return (
    <Shell active="dashboard" go={go}>
      <main style={{ maxWidth: 720, margin: "0 auto", padding: "40px 24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32 }}>
          <div>
            <h1 style={{ fontSize: 24, fontWeight: 700, margin: 0 }}>Mes analyses</h1>
            <p style={{ color: "var(--gs-white-40)", fontSize: 14, marginTop: 4 }}>alex@exemple.fr</p>
          </div>
          <Button variant="gold" size="md" onClick={() => go("scan")} iconLeft={<Icon name="plus" size={16} color="#000" />}>Nouvelle analyse</Button>
        </div>
        {analyses.length === 0 ? (
          <div style={{ textAlign: "center", padding: "96px 0", border: "1px dashed var(--gs-white-08)", borderRadius: "var(--gs-radius-2xl)" }}>
            <div style={{ width: 64, height: 64, borderRadius: "var(--gs-radius-2xl)", background: "var(--gs-white-05)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
              <Icon name="camera" size={28} color="var(--gs-white-20)" />
            </div>
            <p style={{ color: "var(--gs-white-40)", fontWeight: 500, marginBottom: 8 }}>Aucune analyse pour le moment</p>
            <p style={{ color: "var(--gs-white-20)", fontSize: 14, marginBottom: 24 }}>Lance ta première analyse pour découvrir ton score</p>
            <Button variant="gold" onClick={() => go("scan")} iconLeft={<Icon name="camera" size={16} color="#000" />}>Analyser ma première photo</Button>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {analyses.map((a, i) => (
              <div key={i} onClick={() => go("result")} style={{ border: "1px solid var(--gs-white-08)", borderRadius: "var(--gs-radius-2xl)", padding: 16, background: "var(--gs-white-02)", cursor: "pointer", display: "flex", gap: 16 }}>
                <div style={{ width: 64, height: 64, borderRadius: "var(--gs-radius-xl)", background: "var(--gs-white-05)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon name="lock" size={20} color="var(--gs-white-20)" />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                    <span style={{ color: "var(--gs-white-30)", fontSize: 12 }}>{a.date}</span>
                    <Badge variant="subtle">Gratuit</Badge>
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                    <span style={{ fontSize: 30, fontWeight: 700, color: "var(--gs-gold)" }}>{a.score}</span>
                    <span style={{ color: "var(--gs-white-30)", fontSize: 14 }}>/10</span>
                  </div>
                  <p style={{ color: "var(--gs-white-40)", fontSize: 12, marginTop: 4 }}>Débloquez pour voir le rapport complet</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </Shell>
  );
}

/* ───────────────────────── SCANNER ───────────────────────── */
const PHASES = [
  { key: "front", instr: "Regardez droit devant la caméra", sub: "Restez immobile", pct: 20 },
  { key: "turn-left", instr: "Tournez la tête à gauche ←", sub: "Tournez lentement et maintenez", pct: 40, arrow: "←" },
  { key: "turn-right", instr: "Tournez la tête à droite →", sub: "Tournez lentement et maintenez", pct: 70, arrow: "→" },
  { key: "uploading", instr: "Analyse IA en cours", sub: "", pct: 100 },
];
function Scanner({ go, finish }) {
  const { Button } = window.GlowScoreDesignSystem_b335d6;
  const Icon = window.GSIcon;
  const [active, setActive] = useState(false);
  const [pi, setPi] = useState(0);
  const [scanY, setScanY] = useState(0);
  const phase = PHASES[pi];

  useEffect(() => {
    if (!active) return;
    if (phase.key === "uploading") { const t = setTimeout(() => finish(), 1800); return () => clearTimeout(t); }
    const t = setTimeout(() => setPi(p => p + 1), 2000);
    return () => clearTimeout(t);
  }, [active, pi]);
  useEffect(() => {
    if (!active) return;
    const id = setInterval(() => setScanY(y => (y + 1.5) % 100), 16);
    return () => clearInterval(id);
  }, [active]);

  const steps = [["Face", pi >= 1], ["Gauche", pi >= 2], ["Droite", pi >= 3]];
  return (
    <Shell active="scan" go={go}>
      <main style={{ maxWidth: 480, margin: "0 auto", padding: "48px 24px" }}>
        <a href="#" onClick={(e) => { e.preventDefault(); go("dashboard"); }} style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--gs-white-40)", fontSize: 14, marginBottom: 32 }}>
          <Icon name="arrow-left" size={16} color="var(--gs-white-40)" />Retour
        </a>
        <h1 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 8px" }}>Nouvelle analyse</h1>
        <p style={{ color: "var(--gs-white-40)", fontSize: 14, marginBottom: 32 }}>Télécharge une photo de ton visage pour obtenir ton score sur 10.</p>

        <div style={{ border: "1px solid var(--gs-white-10)", borderRadius: "var(--gs-radius-2xl)", background: "var(--gs-white-02)", padding: 32, display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
          {active && (
            <div style={{ width: "100%", maxWidth: 320, height: 4, background: "var(--gs-white-10)", borderRadius: 9999, overflow: "hidden" }}>
              <div style={{ height: "100%", background: "var(--gs-gold)", borderRadius: 9999, width: phase.pct + "%", transition: "width .7s var(--gs-ease)" }} />
            </div>
          )}
          <div style={{ position: "relative", width: "100%", maxWidth: 320, aspectRatio: "3/4", borderRadius: "var(--gs-radius-2xl)", overflow: "hidden", border: "1px solid var(--gs-white-10)", background: "var(--gs-surface-blue)" }}>
            {!active ? (
              <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }}>
                <div style={{ width: 96, height: 96, borderRadius: 9999, border: "2px dashed var(--gs-white-20)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name="user-round" size={40} color="var(--gs-white-30)" strokeWidth={1.2} />
                </div>
                <p style={{ color: "var(--gs-white-30)", fontSize: 14 }}>Centrez votre visage ici</p>
              </div>
            ) : (
              <>
                {["top:12px;left:12px;border-top:2px solid;border-left:2px solid", "top:12px;right:12px;border-top:2px solid;border-right:2px solid", "bottom:12px;left:12px;border-bottom:2px solid;border-left:2px solid", "bottom:12px;right:12px;border-bottom:2px solid;border-right:2px solid"].map((c, i) => (
                  <div key={i} style={{ position: "absolute", width: 24, height: 24, borderColor: "var(--gs-gold)", borderRadius: 4, ...styleFromString(c) }} />
                ))}
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
                  <div style={{ width: 160, height: 224, borderRadius: 9999, border: "2px solid rgba(255,215,0,0.3)", boxShadow: "0 0 20px rgba(255,215,0,0.1)" }} />
                </div>
                {phase.key === "front" && (
                  <div style={{ position: "absolute", left: 0, right: 0, top: scanY + "%", height: 2, background: "linear-gradient(90deg,transparent,#FFD700,transparent)", boxShadow: "0 0 8px rgba(255,215,0,0.8)" }} />
                )}
                {phase.arrow && (
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 60, color: "var(--gs-gold)", fontWeight: 700, textShadow: "0 0 30px rgba(255,215,0,0.9)" }} className="gs-pulse">{phase.arrow}</div>
                )}
                {phase.key === "uploading" && (
                  <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.8)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }}>
                    <div className="gs-spin" style={{ width: 40, height: 40, border: "2px solid var(--gs-gold)", borderTopColor: "transparent", borderRadius: 9999 }} />
                    <p style={{ color: "var(--gs-gold)", fontSize: 14, fontWeight: 500 }}>Analyse en cours…</p>
                  </div>
                )}
              </>
            )}
          </div>

          {active && phase.key !== "uploading" && (
            <div style={{ textAlign: "center" }}>
              <p style={{ color: "var(--gs-gold)", fontWeight: 600, fontSize: 16, margin: 0 }}>{phase.instr}</p>
              <p style={{ color: "var(--gs-white-30)", fontSize: 12, marginTop: 4 }}>{phase.sub}</p>
            </div>
          )}
          {active && (
            <div style={{ display: "flex", gap: 12 }}>
              {steps.map(([label, done]) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12 }}>
                  <div style={{ width: 8, height: 8, borderRadius: 9999, background: done ? "var(--gs-gold)" : "var(--gs-white-20)" }} />
                  <span style={{ color: done ? "var(--gs-gold)" : "var(--gs-white-30)" }}>{label}</span>
                </div>
              ))}
            </div>
          )}
          {!active && <Button variant="gold" block onClick={() => { setActive(true); setPi(0); }}>Démarrer l'analyse</Button>}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginTop: 24, textAlign: "center" }}>
          {[["Score /10", "Précis & objectif"], ["30 secondes", "Résultat immédiat"], ["5 conseils", "Personnalisés pour toi"]].map(([l, d]) => (
            <div key={l} style={{ border: "1px solid var(--gs-white-05)", borderRadius: "var(--gs-radius-xl)", padding: 12 }}>
              <div style={{ fontSize: 14, fontWeight: 600 }}>{l}</div>
              <div style={{ color: "var(--gs-white-30)", fontSize: 12 }}>{d}</div>
            </div>
          ))}
        </div>
      </main>
    </Shell>
  );
}
function styleFromString(s) {
  const o = {};
  s.split(";").forEach(d => { const [k, v] = d.split(":"); if (!k) return; const key = k.trim().replace(/-([a-z])/g, (_, c) => c.toUpperCase()); o[key] = v.trim(); });
  return o;
}

/* ───────────────────────── RESULT ───────────────────────── */
function Result({ go, paid, unlock }) {
  const { Button, Card, ScoreRing, SubScore } = window.GlowScoreDesignSystem_b335d6;
  const Icon = window.GSIcon;
  const [plan, setPlan] = useState("one_shot");
  const forts = ["Mâchoire bien définie et structure faciale équilibrée", "Regard expressif avec une bonne symétrie oculaire", "Teint homogène et éclat de peau naturel"];
  const subs = [["Structure faciale", 8.0], ["Peau", 7.4], ["Style & soins", 7.6], ["Harmonie", 7.7]];
  return (
    <div style={{ minHeight: "100%", background: "var(--gs-bg)", color: "#fff" }}>
      <header style={{ borderBottom: "1px solid var(--gs-border)", position: "sticky", top: 0, background: "var(--gs-bg)", zIndex: 10 }}>
        <div style={{ maxWidth: 640, margin: "0 auto", padding: "16px 24px", display: "flex", alignItems: "center", gap: 16 }}>
          <a href="#" onClick={(e) => { e.preventDefault(); go("dashboard"); }} style={{ color: "var(--gs-muted)" }}><Icon name="arrow-left" size={20} color="var(--gs-muted)" /></a>
          <span className="serif" style={{ fontSize: 20, fontWeight: 700, color: "var(--gs-gold)" }}>GlowScore</span>
        </div>
      </header>
      <main style={{ maxWidth: 540, margin: "0 auto", padding: "32px 24px", display: "flex", flexDirection: "column", alignItems: "center", gap: 32 }}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: 24, fontWeight: 700, margin: 0 }}>Votre analyse</h1>
          <p style={{ color: "var(--gs-muted)", fontSize: 14, marginTop: 4 }}>13 juin 2026</p>
        </div>
        <ScoreRing score={8.5} />
        <p style={{ color: "var(--gs-muted)", fontSize: 14, textAlign: "center", maxWidth: 380, margin: 0 }}>
          Un visage harmonieux avec une structure équilibrée. Quelques optimisations ciblées peuvent élever ton score.
        </p>

        <Card style={{ width: "100%" }}>
          <h3 style={{ fontWeight: 600, margin: "0 0 12px" }}>Vos points forts</h3>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
            {forts.map((p, i) => (
              <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <div style={{ marginTop: 2, width: 20, height: 20, borderRadius: 9999, background: "rgba(255,215,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon name="check" size={12} color="var(--gs-gold)" />
                </div>
                <span style={{ color: "#ccc", fontSize: 14 }}>{p}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card style={{ width: "100%" }}>
          <h3 style={{ fontWeight: 600, margin: "0 0 16px" }}>Scores détaillés</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {subs.map(([l, v]) => <SubScore key={l} label={l} value={v} />)}
          </div>
        </Card>

        {!paid ? (
          <Card accent style={{ width: "100%", textAlign: "center", padding: 24 }}>
            <div style={{ width: 48, height: 48, borderRadius: 9999, background: "rgba(255,215,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
              <Icon name="lock" size={20} color="var(--gs-gold)" />
            </div>
            <h3 style={{ fontWeight: 600, fontSize: 18, margin: 0 }}>Débloquer le rapport complet</h3>
            <p style={{ color: "var(--gs-muted)", fontSize: 14, marginTop: 4, marginBottom: 16 }}>5 recommandations personnalisées + axes d'amélioration</p>
            <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
              {[["one_shot", "One shot", "4,99 €", null], ["monthly", "Mensuel", "9,99 €/mois", "Analyses illimitées"]].map(([k, name, price, note]) => (
                <button key={k} onClick={() => setPlan(k)} style={{ flex: 1, borderRadius: "var(--gs-radius-lg)", padding: 12, fontSize: 14, cursor: "pointer", textAlign: "center", background: plan === k ? "rgba(255,215,0,0.1)" : "transparent", border: `1px solid ${plan === k ? "var(--gs-gold)" : "var(--gs-border-strong)"}`, color: plan === k ? "#fff" : "var(--gs-muted)" }}>
                  <div style={{ fontWeight: 600 }}>{name}</div>
                  <div style={{ color: "var(--gs-gold)", fontWeight: 700, marginTop: 2 }}>{price}</div>
                  {note && <div style={{ color: "var(--gs-muted-2)", fontSize: 12, marginTop: 2 }}>{note}</div>}
                </button>
              ))}
            </div>
            <Button variant="gold" block size="lg" onClick={unlock}>Débloquer pour {plan === "one_shot" ? "4,99 €" : "9,99 €/mois"}</Button>
          </Card>
        ) : (
          <Card glow style={{ width: "100%" }}>
            <h3 style={{ fontWeight: 600, margin: "0 0 12px" }}>Recommandations IA</h3>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {["Adopter une coiffure avec plus de volume sur les côtés", "Routine soin : nettoyant doux + hydratant SPF le matin", "Travailler la posture et l'angle du menton sur les photos", "Affiner les sourcils pour ouvrir le regard", "Privilégier des cols qui structurent la mâchoire"].map((r, i) => (
                <li key={i} style={{ display: "flex", gap: 12, fontSize: 14, color: "#ccc", alignItems: "flex-start" }}>
                  <span style={{ color: "var(--gs-gold)", fontWeight: 700 }}>{i + 1}.</span>{r}
                </li>
              ))}
            </ul>
          </Card>
        )}
      </main>
    </div>
  );
}

Object.assign(window, { GSLogin: Login, GSDashboard: Dashboard, GSScanner: Scanner, GSResult: Result });
