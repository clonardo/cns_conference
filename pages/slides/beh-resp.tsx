import Layout from "../../components/Layout";
import { CaretRightFilled } from "@ant-design/icons";
import { List, Typography } from "antd";

/**
 * Options for bulleted list
 */
const DISPLAY_CONFIG = {
  listItems: [
    <span>
      Participants responded with one of two key presses indicating whether they
      thought the orientation of the Stimulus was
      <br />
      <b style={{ whiteSpace: "pre-line" }}>Horizontal (H)</b> or
      <b> Vertical (V)</b>
    </span>,
    "Accuracy and Reaction Time data were collected on this response",
  ],
  pageDisplayTitle: "Behavioral Response",
};

// http://localhost:3000/slides/beh-resp
const PoTaskPage = () => (
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

export default PoTaskPage;
