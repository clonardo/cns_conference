import { useState, useCallback, useRef, useEffect } from "react";
import Layout from "../../components/Layout";
import { Document, Page } from "react-pdf";
import { CaretRightFilled } from "@ant-design/icons";
import { List, Typography } from "antd";
import { Scrollbars } from "react-custom-scrollbars";
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// for scrollbar
const renderThumb = ({ style, ...props }) => {
  const thumbStyle = {
    backgroundColor: `rgb(255, 255, 255)`,
  };
  return <div style={{ ...style, ...thumbStyle }} {...props} />;
};

/**
 * Options for bulleted list
 */
const DISPLAY_CONFIG = {
  listItems: [
    <span>
      Please view our poster below, or&nbsp;
      <a
        href="https://vconf_materials.s3.amazonaws.com/boothmaterials/DRAFT1CNSPOSTER20202_grjhb63os5.pdf"
        target="_blank"
      >
        click here to open it in a new window.&nbsp;
      </a>
      Thank you!
    </span>,
  ],
  pageDisplayTitle: "Main Poster",
};

// http://localhost:3000/slides/poster
const PoTaskPage: React.FC = () => {
  const [numPages, setNumPages] = useState<number>(null);
  const isMountedRef = useRef(null);
  // const [pageNumber, setPageNumber] = useState<number>(1);

  const setPagesLoaded = useCallback(
    (np: number) => {
      setNumPages(np);
    },
    [numPages]
  );

  /*
  useEffect(() => {
    isMountedRef.current = true;
    // TODO: https://www.debuggr.io/react-update-unmounted-component/
    return () => (isMountedRef.current = false);
  }, [numPages]);
  */

  return (
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
      <Document
        file={{
          url: `https://vconf_materials.s3.amazonaws.com/boothmaterials/DRAFT1CNSPOSTER20202_grjhb63os5.pdf`,
        }}
        onLoadSuccess={(res: { numPages: number }) => {
          console.log("got onLoadSuccess : ", res);
          setPagesLoaded(res.numPages);
        }}
        style={{
          maxWidth: "480px",
          width: "480px",
          marginBottom: "15px",
        }}
        options={{
          cMapUrl: `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/cmaps/`,
          cMapPacked: true,
        }}
      >
        {numPages && (
          // autoHide
          <Scrollbars
            universal
            autoHeight
            autoHeightMax={600}
            renderThumbVertical={renderThumb}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "15px",
                }}
              >
                <Page
                  width={480}
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                />
              </div>
            ))}
          </Scrollbars>
        )}
      </Document>
    </Layout>
  );
};

export default PoTaskPage;
