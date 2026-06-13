/**
 * Floating glass pill nav used on the marketing landing — sticky, centered,
 * 2xl radius, translucent black + heavy blur, hairline border.
 */
export function GlassNav({ children, style = {}, ...props }) {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 32,
        width: "100%",
        maxWidth: 880,
        padding: "12px 20px",
        borderRadius: "var(--gs-radius-2xl)",
        border: "1px solid var(--gs-white-10)",
        background: "var(--gs-glass-bg)",
        backdropFilter: "var(--gs-glass-blur)",
        WebkitBackdropFilter: "var(--gs-glass-blur)",
        boxSizing: "border-box",
        ...style,
      }}
      {...props}
    >
      {children}
    </nav>
  );
}
