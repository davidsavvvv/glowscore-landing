import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. `gold` = in-app primary, `white` = marketing CTA. @default "gold" */
  variant?: "gold" | "white" | "secondary" | "outline" | "ghost";
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  /** Stretch to full width (used for form submits & paywall CTAs). */
  block?: boolean;
  disabled?: boolean;
  /** Element rendered before the label (e.g. a Lucide icon). */
  iconLeft?: React.ReactNode;
  /** Element rendered after the label. */
  iconRight?: React.ReactNode;
}

/**
 * GlowScore button.
 * @startingPoint section="Core" subtitle="Gold / white / outline / ghost buttons" viewport="700x180"
 */
export function Button(props: ButtonProps): React.ReactElement;
