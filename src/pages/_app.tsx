import "@/styles/global.css";
import type { AppProps } from "next/app";
import React from "react";
import Head from "next/head";
import Layout from "@/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        {/* <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" /> */}
        {/* <meta name="robots" content="index, follow" /> */}
        {/* <meta property="og:image" content="/images/og/harmony.png" /> */}
        {/* <link rel="manifest" href="site.webmanifest" /> */}
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
