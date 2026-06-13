/**
 * Ambient gold glow blob — GlowScore's signature lighting. Absolutely
 * positioned, heavily blurred radial gradient. Drop one behind a hero or CTA.
 */
export function GlowBlob({ size = 700, opacity = 0.18, blur = 120, style = {} }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        width: size,
        height: size * 0.57,
        borderRadius: "var(--gs-radius-full)",
        background: "var(--gs-blob-gold)",
        filter: `blur(${blur}px)`,
        opacity,
        pointerEvents: "none",
        ...style,
      }}
    />
  );
}
