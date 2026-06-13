/**
 * GlowScore pill badge. Fully-rounded, small. Default = gold (e.g. score
 * chips / "Populaire"); subtle = faint white chip ("Gratuit").
 */
export function Badge({ children, variant = "gold", style = {}, ...props }) {
  const variants = {
    gold: { background: "var(--gs-gold)", color: "#000", border: "1px solid transparent" },
    subtle: { background: "var(--gs-white-05)", color: "var(--gs-white-30)", border: "1px solid var(--gs-white-08)" },
    outline: { background: "transparent", color: "var(--gs-white-50)", border: "1px solid var(--gs-white-10)" },
    soft: { background: "rgba(255,215,0,0.10)", color: "var(--gs-gold)", border: "1px solid rgba(255,215,0,0.20)" },
  };
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        height: 22,
        padding: "0 10px",
        fontSize: 12,
        fontWeight: 700,
        fontFamily: "var(--gs-font-sans)",
        borderRadius: "var(--gs-radius-full)",
        whiteSpace: "nowrap",
        lineHeight: 1,
        ...variants[variant],
        ...style,
      }}
      {...props}
    >
      {children}
    </span>
  );
}
