/**
 * GlowScore surface card. #111 fill + hairline ring + generous radius.
 * `glass` makes it a translucent blurred panel (used over glow blobs);
 * `glow` adds the soft gold ambient shadow; `accent` adds a gold border.
 */
export function Card({ children, glass = false, glow = false, accent = false, padding = 20, style = {}, ...props }) {
  return (
    <div
      style={{
        background: glass ? "rgba(0,0,0,0.40)" : "var(--gs-surface)",
        backdropFilter: glass ? "var(--gs-glass-blur)" : undefined,
        WebkitBackdropFilter: glass ? "var(--gs-glass-blur)" : undefined,
        border: accent ? "1px solid rgba(255,215,0,0.30)" : "1px solid var(--gs-white-08)",
        borderRadius: "var(--gs-radius-2xl)",
        boxShadow: glow ? "var(--gs-glow-card)" : undefined,
        padding,
        color: "var(--gs-fg)",
        boxSizing: "border-box",
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
