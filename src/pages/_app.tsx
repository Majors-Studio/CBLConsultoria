import "@/styles/global.css"
import type { AppProps } from "next/app"
import React, { useEffect } from "react"
import Head from "next/head"
import Layout from "@/layout"
import { AppProvider } from "@/context/contextApi"
import LoadingIcon from "@/assets/icons/LoadingIcon"

export default function App({ Component, pageProps }: AppProps) {
  const [timeoutId, setTimeoutId] = React.useState(true)

  const head = (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
    </Head>
  )

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTimeoutId(false)
    }, 1000)

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [])

  if (typeof window === "undefined" || timeoutId)
    return (
      <>
        {head}
        <style>
          {`
            @keyframes rotate {
            0% {
            transform: scale(1) rotate(0deg);
            opacity: 1;

        }
        50% {
            transform: scale(1.12) rotate(180deg);
            opacity: 0.8;
        }
        100% {
            transform: scale(1) rotate(360deg);
            opacity: 1;
        }
            }
          `}
        </style>
        <div
          style={{
            width: "45px",
            height: "45px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "rotate(0deg)",
            animation: "rotate 0.8s infinite",
          }}
        >
          <LoadingIcon />
        </div>
      </>
    )

  return (
    <>
      {head}
      <AppProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppProvider>
    </>
  )
}
