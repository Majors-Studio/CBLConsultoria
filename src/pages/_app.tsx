import "@/styles/global.css"
import type { AppProps } from "next/app"
import React from "react"
import Head from "next/head"
import Layout from "@/layout"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
