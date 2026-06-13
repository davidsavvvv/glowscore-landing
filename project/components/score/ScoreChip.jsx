/**
 * Compact label + score readout, colored by tier (low / mid / high). Used in
 * the landing-page "Score facial" radar grid.
 */
export function ScoreChip({ label, score, tone = "mid" }) {
  const colors = { low: "var(--gs-score-low)", mid: "var(--gs-score-mid)", high: "var(--gs-score-high)" };
  return (
    <div style={{ fontFamily: "var(--gs-font-sans)" }}>
      <div style={{ fontSize: 12, color: "var(--gs-white-40)", marginBottom: 2 }}>{label}</div>
      <div style={{ fontSize: 14, fontWeight: 700, color: colors[tone] || colors.mid }}>
        {score}<span style={{ color: "var(--gs-white-20)", fontSize: 12, fontWeight: 400 }}>/10</span>
      </div>
    </div>
  );
}
