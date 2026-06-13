const { useState } = React;

const SIZES = {
  sm: { height: 32, padding: "0 14px", fontSize: 13, radius: "var(--gs-radius-lg)", gap: 6 },
  md: { height: 44, padding: "0 20px", fontSize: 14, radius: "var(--gs-radius-xl)", gap: 8 },
  lg: { height: 56, padding: "0 32px", fontSize: 16, radius: "var(--gs-radius-2xl)", gap: 8 },
};

function base(variant, hover) {
  switch (variant) {
    case "gold":
      return { background: hover ? "var(--gs-gold-hover)" : "var(--gs-gold)", color: "#000", border: "1px solid transparent" };
    case "white":
      return { background: hover ? "rgba(255,255,255,0.9)" : "#fff", color: "#000", border: "1px solid transparent" };
    case "secondary":
      return { background: hover ? "#222" : "var(--gs-surface-2)", color: "#fff", border: "1px solid transparent" };
    case "outline":
      return { background: hover ? "var(--gs-surface-2)" : "transparent", color: "#fff", border: "1px solid var(--gs-border-strong)" };
    case "ghost":
      return { background: hover ? "var(--gs-white-05)" : "transparent", color: hover ? "#fff" : "var(--gs-white-50)", border: "1px solid transparent" };
    default:
      return {};
  }
}

/**
 * GlowScore primary button. Gold is the workhorse in-app CTA; white is the
 * marketing-landing CTA. Black foreground on filled variants.
 */
export function Button({
  children,
  variant = "gold",
  size = "md",
  block = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  style = {},
  ...props
}) {
  const [hover, setHover] = useState(false);
  const s = SIZES[size] || SIZES.md;
  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      disabled={disabled}
      style={{
        display: block ? "flex" : "inline-flex",
        width: block ? "100%" : "auto",
        alignItems: "center",
        justifyContent: "center",
        gap: s.gap,
        height: s.height,
        padding: s.padding,
        fontSize: s.fontSize,
        fontWeight: 700,
        fontFamily: "var(--gs-font-sans)",
        lineHeight: 1,
        borderRadius: s.radius,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        transition: "background var(--gs-dur-fast) var(--gs-ease), border-color var(--gs-dur-fast) var(--gs-ease)",
        whiteSpace: "nowrap",
        ...base(variant, hover && !disabled),
        ...style,
      }}
      {...props}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
