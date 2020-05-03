import Layout from "../../components/Layout";
import { CaretRightFilled } from "@ant-design/icons";
import { List, Typography } from "antd";

/**
 * Options for bulleted list
 */
const DISPLAY_CONFIG = {
  listItems: [
    "Delta Pupil Size was recorded by calculating difference scores between the first pupil diameter data capture of each trial and the last capture prior to response.",
    "Saccadic Response was calculated by collecting eye-movement data in either horizontal or vertical direction after filtering out jitter that was not part of an overall saccade.",
  ],
  pageDisplayTitle: "Pupil Dilation and Saccadic Response Measures",
};

// http://localhost:3000/slides/pupils
const PupilDilation = () => (
  <Layout
    title={DISPLAY_CONFIG.pageDisplayTitle}
    slideHeader={DISPLAY_CONFIG.pageDisplayTitle}
    extraHeaderClass="wider-page-header"
  >
    <List
      split
      className="fancy-list"
      dataSource={DISPLAY_CONFIG.listItems}
      renderItem={(item) => (
        <List.Item className="fancy-bulleted">
          <div className="icon-wrapper">
            <CaretRightFilled />
          </div>

          <div>{item}</div>
        </List.Item>
      )}
    />
  </Layout>
);

export default PupilDilation;
