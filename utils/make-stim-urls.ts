import { IRowWithPct, IStimuliRows } from "../interfaces";

/**
 * Make default stimulus image URLs for a given stimulus type for a horizontal or vertical row
 * Returned paths should resolve relative to `public`
 * @param stimType Stimulus type: gabor, color, luminance
 * @param direction stimulus direction (h or v)
 * @param extension File extension (default: png)
 */
const makeRowForStim = (
  stimType: string,
  direction: "h" | "v",
  extension: string = "png"
): IRowWithPct => {
  const basePrefix = `/images`;
  // Returns like e.g., /images/gabor/h-gabor-100.png
  return {
    url100: `${basePrefix}/${stimType}/${direction}-${stimType}-100.${extension}`,
    url90: `${basePrefix}/${stimType}/${direction}-${stimType}-90.${extension}`,
    url80: `${basePrefix}/${stimType}/${direction}-${stimType}-80.${extension}`,
    url70: `${basePrefix}/${stimType}/${direction}-${stimType}-70.${extension}`,
  };
};

/**
 * Make default stimulus image URLs for a given stimulus type.
 * Returned paths should resolve relative to `public`
 * @param stimType Stimulus type: gabor, color, luminance
 * @param extension File extension (default: png)
 */
export const makeStimUrls = (
  stimType: string,
  extension: string = "png"
): IStimuliRows => {
  return {
    hRow: makeRowForStim(stimType, "h", extension),
    vRow: makeRowForStim(stimType, "v", extension),
  };
};
