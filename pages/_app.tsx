import App from 'next/app';

// globals
import 'antd/dist/antd.css';
import '../styles/index.scss';

/*
type AppMainProps = {
    pathname: string;
    pageProps: any;
};
*/
export default class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    render() {
        const { Component, pageProps } = this.props;
        return <Component {...pageProps} />;
    }
}

/*

render() {
        const { Component, pageProps } = this.props;
        return (
            <ThemeProvider theme={APP_THEME}>
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>
        );
    }
function MyApp({ Component, pageProps }) {
    return (
        <Container>
            <ThemeWrapper>
                <Component {...pageProps} />
            </ThemeWrapper>
        </Container>
    );
}
*/

/*
return <Component {...pageProps} />;
*/
// export default MyApp;
