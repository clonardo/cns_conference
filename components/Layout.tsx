import * as React from "react";
import Link from "next/link";
import Head from "next/head";
import { Card, Col, Row, Space, Typography, PageHeader } from "antd";
const { Title } = Typography;

type Props = {
  title?: string;
  /**
   * Optional slide header
   */
  slideHeader?: string;

  /**
   * Optional extra class to apply to PageHeader
   */
  extraHeaderClass?: string;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  slideHeader,
  extraHeaderClass,
  title = "Slide",
}) => (
  <div className="site-layout-content">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {slideHeader && (
      <PageHeader
        title={slideHeader}
        className={extraHeaderClass}
        backIcon={false}
      />
    )}
    {/* <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
        |{" "}
        <Link href="/about">
          <a>About</a>
        </Link>{" "}
        |{" "}
        <Link href="/users">
          <a>Users List</a>
        </Link>{" "}
        | <a href="/api/users">Users API</a>
      </nav>
    </header> */}
    {children}
    {/* <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer> */}
  </div>
);

export default Layout;
