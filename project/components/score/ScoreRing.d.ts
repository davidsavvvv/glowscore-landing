export interface ScoreRingProps {
  /** Score value shown in the center. @default 8.5 */
  score?: number;
  /** Scale maximum. @default 10 */
  max?: number;
  /** Diameter in px. @default 176 */
  size?: number;
  /** Ring stroke width in px. @default 10 */
  stroke?: number;
  /** Caption after the number. @default "/10" */
  label?: string;
}

/**
 * Circular score gauge — GlowScore's signature visual.
 * @startingPoint section="Score" subtitle="Circular gold score gauge" viewport="700x260"
 */
export function ScoreRing(props: ScoreRingProps): React.ReactElement;
