import * as React from "react";
import { COL_SPACING } from "./col-spacing.consts";
import { Card, Col, Row, Space, Typography } from "antd";
const { Title } = Typography;

/**
 * Spacer row with labels
 */
export const SpacerRow: React.FC = () => {
  return (
    <Row gutter={COL_SPACING.gutter} className="stim-labels-row">
      {/* <Col offset={COL_SPACING.startCol} span={COL_SPACING.imageCol}>
        <Space align="center">
          <Title level={3}>100%</Title>
        </Space>
      </Col> */}
      <Col span={COL_SPACING.imageCol}>
        <Card bordered={false}>
          <Title className="stim-group-pct-label" level={4}>
            100%
          </Title>
        </Card>
      </Col>
      <Col span={COL_SPACING.imageCol}>
        <Card bordered={false}>
          <Title className="stim-group-pct-label" level={4}>
            90%
          </Title>
        </Card>
      </Col>
      <Col span={COL_SPACING.imageCol}>
        <Card bordered={false}>
          <Title className="stim-group-pct-label" level={4}>
            80%
          </Title>
        </Card>
      </Col>
      <Col span={COL_SPACING.imageCol}>
        <Card bordered={false}>
          <Title className="stim-group-pct-label" level={4}>
            70%
          </Title>
        </Card>
      </Col>
    </Row>
  );
};
