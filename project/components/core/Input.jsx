const { useState } = React;

/**
 * GlowScore text input. Dark #1a1a1a fill, #333 border that turns gold on
 * focus. Matches the auth forms.
 */
export function Input({ style = {}, type = "text", ...props }) {
  const [focus, setFocus] = useState(false);
  return (
    <input
      type={type}
      onFocus={(e) => { setFocus(true); props.onFocus && props.onFocus(e); }}
      onBlur={(e) => { setFocus(false); props.onBlur && props.onBlur(e); }}
      style={{
        width: "100%",
        background: "var(--gs-surface-2)",
        border: `1px solid ${focus ? "var(--gs-gold)" : "var(--gs-border-strong)"}`,
        borderRadius: "var(--gs-radius-xl)",
        padding: "11px 16px",
        fontSize: 14,
        fontFamily: "var(--gs-font-sans)",
        color: "#fff",
        outline: "none",
        boxSizing: "border-box",
        transition: "border-color var(--gs-dur-fast) var(--gs-ease)",
        ...style,
      }}
      {...props}
    />
  );
}
