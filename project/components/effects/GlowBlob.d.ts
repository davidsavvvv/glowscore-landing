export interface GlowBlobProps {
  /** Blob width in px (height is 0.57×). @default 700 */
  size?: number;
  /** @default 0.18 */
  opacity?: number;
  /** Blur radius in px. @default 120 */
  blur?: number;
  style?: React.CSSProperties;
}

/** Ambient gold radial-glow background element. */
export function GlowBlob(props: GlowBlobProps): React.ReactElement;
