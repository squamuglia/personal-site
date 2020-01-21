import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="I build friendly things in React, Node, WordPress &amp; Shopify"
          />
          <meta
            name="keywords"
            content="developer, web development, app development, node, javascript"
          />
          <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
          <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css?family=Nova+Cut|Space+Mono"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
