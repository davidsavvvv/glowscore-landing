/**
 * Labelled sub-score row with a gold progress bar. Used in the detailed-scores
 * panel (Structure faciale, Peau, Style & soins, Harmonie).
 */
export function SubScore({ label, value = 0, max = 10 }) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div style={{ fontFamily: "var(--gs-font-sans)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", fontSize: 14, marginBottom: 6 }}>
        <span style={{ color: "var(--gs-muted)" }}>{label}</span>
        <span style={{ color: "#fff", fontWeight: 500 }}>{value}<span style={{ color: "var(--gs-white-30)" }}>/{max}</span></span>
      </div>
      <div style={{ height: 8, background: "var(--gs-border)", borderRadius: "var(--gs-radius-full)", overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${pct}%`, background: "var(--gs-gold)", borderRadius: "var(--gs-radius-full)", transition: "width var(--gs-dur-slow) var(--gs-ease)" }} />
      </div>
    </div>
  );
}
