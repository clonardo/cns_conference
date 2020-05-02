/**
 * Row with images classified by % of effect.
 * Values should be the url of the image
 */
export interface IRowWithPct {
  url100: string;
  url90: string;
  url80: string;
  url70: string;
}

/**
 * Data rows of vertical and horizontal stimuli
 */
export interface IStimuliRows {
  hRow: IRowWithPct;
  vRow: IRowWithPct;
}
