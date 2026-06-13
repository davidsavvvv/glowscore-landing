const { useState } = React;

/**
 * Sidebar navigation item. Active = faint white fill + white text; idle =
 * white/40 text that brightens and picks up a faint fill on hover. Pass a
 * Lucide icon node via `icon`.
 */
export function NavItem({ icon = null, children, active = false, href = "#", style = {}, ...props }) {
  const [hover, setHover] = useState(false);
  const lit = active || hover;
  return (
    <a
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "10px 12px",
        borderRadius: "var(--gs-radius-xl)",
        fontSize: 14,
        fontWeight: active ? 500 : 400,
        textDecoration: "none",
        color: lit ? "#fff" : "var(--gs-white-40)",
        background: active ? "var(--gs-white-08)" : hover ? "var(--gs-white-05)" : "transparent",
        transition: "color var(--gs-dur-fast) var(--gs-ease), background var(--gs-dur-fast) var(--gs-ease)",
        ...style,
      }}
      {...props}
    >
      {icon && <span style={{ display: "inline-flex", width: 16, height: 16 }}>{icon}</span>}
      {children}
    </a>
  );
}
