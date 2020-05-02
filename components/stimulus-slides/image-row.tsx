import * as React from "react";
import { COL_SPACING } from "./col-spacing.consts";
import { Card, Col, Row, Space, Typography } from "antd";
import { IRowWithPct } from "../../interfaces";
const { Title } = Typography;
type IImageRowProps = IRowWithPct & { direction: string };

/**
 * Row for stimulus images
 */
export const ImageRow: React.FC<IImageRowProps> = (props: IImageRowProps) => {
  return (
    <div className="stim-image-row-container">
      <div className="stim-group-label">
        <Title level={4}>{props.direction}</Title>
      </div>
      <Row gutter={COL_SPACING.gutter}>
        {/* <Col span={COL_SPACING.startCol}>
          Direction
          <Card bordered={false}>{props.direction}</Card>
        </Col> */}
        <Col span={COL_SPACING.imageCol}>
          {/* 100 */}
          <Card className="stim-image-col" bordered={false}>
            <img alt={`100% - ${props.direction}`} src={props.url100} />
          </Card>
        </Col>
        <Col span={COL_SPACING.imageCol}>
          {/* 90 */}
          <Card className="stim-image-col" bordered={false}>
            <img alt={`90% - ${props.direction}`} src={props.url90} />
          </Card>
        </Col>
        <Col span={COL_SPACING.imageCol}>
          {/* 80 */}
          <Card className="stim-image-col" bordered={false}>
            <img alt={`80% - ${props.direction}`} src={props.url80} />
          </Card>
        </Col>
        <Col span={COL_SPACING.imageCol}>
          {/* 70 */}
          <Card className="stim-image-col" bordered={false}>
            <img alt={`70% - ${props.direction}`} src={props.url70} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};
