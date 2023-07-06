import Document, { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head></Head>
        <body>
          <Main />
          <NextScript />
          <Script src="https://cdn.jsdelivr.net/npm/cleave.js@1.6.0/dist/cleave.min.js" />
        </body>
      </Html>
    );
  }
}
