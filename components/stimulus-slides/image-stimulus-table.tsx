import * as React from "react";
import { IStimuliRows } from "../../interfaces";
import { COL_SPACING } from "./col-spacing.consts";
import { Card, Col, Row, Space } from "antd";
import { ImageRow } from "./image-row";
import { SpacerRow } from "./spacer-row";
// IStimuliRows

interface IImageStimulusTableProps {
  gridContents: IStimuliRows;
}

// stim-table-wrapper

/**
 * Render both rows of image stimulus table
 */
export const ImageStimulusTable: React.FC<IImageStimulusTableProps> = (
  props: IImageStimulusTableProps
) => {
  return (
    <div className="stim-table-wrapper">
      <ImageRow {...props.gridContents.hRow} direction={"Horizontal"} />
      <SpacerRow />
      <ImageRow {...props.gridContents.vRow} direction={"Vertical"} />
    </div>
  );
};
