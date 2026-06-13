export interface ScoreChipProps {
  label: string;
  score: number | string;
  /** Color tier. @default "mid" */
  tone?: "low" | "mid" | "high";
}

/** Compact tier-colored score readout. */
export function ScoreChip(props: ScoreChipProps): React.ReactElement;
