/**
 * GlowScore circular score ring — the signature element. Gold progress arc on
 * a dark track, big serif number in the center, soft gold halo.
 */
export function ScoreRing({ score = 8.5, max = 10, size = 176, stroke = 10, label = "/10" }) {
  const radius = (size - stroke * 2) / 2;
  const circumference = 2 * Math.PI * radius;
  const pct = Math.max(0, Math.min(1, score / max));
  const offset = circumference - pct * circumference;
  const c = size / 2;
  const num = size * 0.55;

  return (
    <div style={{ position: "relative", width: size, height: size, display: "flex", alignItems: "center", justifyContent: "center", filter: "drop-shadow(var(--gs-glow-ring))" }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ position: "absolute", inset: 0, transform: "rotate(-90deg)" }}>
        <circle cx={c} cy={c} r={radius} stroke="var(--gs-border)" strokeWidth={stroke} fill="none" />
        <circle
          cx={c} cy={c} r={radius}
          stroke="var(--gs-gold)" strokeWidth={stroke} fill="none"
          strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 1s var(--gs-ease)" }}
        />
      </svg>
      <div style={{ textAlign: "center", zIndex: 1, lineHeight: 1 }}>
        <span style={{ fontFamily: "var(--gs-font-serif)", fontWeight: 700, fontSize: num, color: "var(--gs-gold)" }}>{score}</span>
        <span style={{ color: "var(--gs-muted)", fontSize: num * 0.32, marginLeft: 2 }}>{label}</span>
      </div>
    </div>
  );
}
