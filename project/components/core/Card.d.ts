import * as React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Translucent blurred panel (place over a GlowBlob). */
  glass?: boolean;
  /** Soft gold ambient glow shadow. */
  glow?: boolean;
  /** Gold border instead of the neutral hairline (e.g. highlighted pricing tier). */
  accent?: boolean;
  /** Inner padding in px. @default 20 */
  padding?: number;
}

/**
 * Surface container.
 * @startingPoint section="Core" subtitle="Surface, glass and accent cards" viewport="700x220"
 */
export function Card(props: CardProps): React.ReactElement;
