import Layout from "../../components/Layout";
import { ImageStimulusTable } from "../../components";
import { makeStimUrls } from "../../utils";

/**
 * Options for display grid
 */
const STIM_DISPLAY_CONFIG = {
  grid: makeStimUrls("luminance"),
  pageDisplayTitle: "Luminance Stimuli",
};

// http://localhost:3000/slides/luminance-stimuli
const StimPage = () => (
  <Layout
    title={STIM_DISPLAY_CONFIG.pageDisplayTitle}
    slideHeader={STIM_DISPLAY_CONFIG.pageDisplayTitle}
    extraHeaderClass="wider-page-header"
  >
    <ImageStimulusTable gridContents={STIM_DISPLAY_CONFIG.grid} />
  </Layout>
);

export default StimPage;
