export interface SubScoreProps {
  /** Category label, e.g. "Structure faciale". */
  label: string;
  /** @default 0 */
  value?: number;
  /** @default 10 */
  max?: number;
}

/** Labelled category score with a gold progress bar. */
export function SubScore(props: SubScoreProps): React.ReactElement;
