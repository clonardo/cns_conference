import Layout from "../../components/Layout";
import { CaretRightFilled } from "@ant-design/icons";
import { List, Typography } from "antd";

/**
 * Options for bulleted list
 */
const PO_DISPLAY_CONFIG = {
  listItems: [
    "The PO Task taps into visual processing of form and texture under varying degrees of noise.",
    "This task has been found to be problematic for pathological populations such as Schizophrenia, indicating problems in processing of visual form.",
    "Stimuli consisted of 20 x 20 arrays of elements that indicate general organization in either Horizontal or Vertical direction.",
    "Degree of organization was varied across stimuli: 100%, 90%, 80%, 70%, where the percentages indicate the proportion of elements that conform to the dominant orientation alignment.",
    <span>
      We used three kinds of visual elements that defined orientation: <wbr />
      Color, Luminance, and Gabor.
    </span>,
  ],
  pageDisplayTitle: "The Perceptual Organization (PO) Task",
};

// http://localhost:3000/slides/po-task
const PoTaskPage = () => (
  <Layout
    title={PO_DISPLAY_CONFIG.pageDisplayTitle}
    slideHeader={PO_DISPLAY_CONFIG.pageDisplayTitle}
    // note: second class is needed because of long header text
    extraHeaderClass="wider-page-header longWinded"
  >
    <List
      split
      className="fancy-list"
      dataSource={PO_DISPLAY_CONFIG.listItems}
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
