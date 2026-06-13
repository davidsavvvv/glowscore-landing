import * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default "gold" */
  variant?: "gold" | "subtle" | "outline" | "soft";
}

/** Small fully-rounded pill label. */
export function Badge(props: BadgeProps): React.ReactElement;
