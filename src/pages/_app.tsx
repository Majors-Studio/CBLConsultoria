import "@/styles/global.css"
import type { AppProps } from "next/app"
import React, { useEffect, useState } from "react"
import Head from "next/head"
import Layout from "@/layout"
import { AppProvider } from "@/context/appContext"
import LoadingIcon from "@/assets/icons/LoadingIcon"
import Logo from "@/components/Logo"
import { tokens } from "@/utils/tokens"
import { HomeProvider } from "@/context/homeContext"

import { Bebas_Neue, Montserrat, Poppins } from "@next/font/google"
import localFont from "@next/font/local"

export const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin-ext"],
})

export const lastica = localFont({
  src: "../assets/fonts/Lastica.ttf",
})

export const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin-ext"],
})

export const poppins = Poppins({
  weight: "400",
  subsets: ["latin-ext"],
})

export default function App({ Component, pageProps }: AppProps) {
  const [timeoutId, setTimeoutId] = useState(true)

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
    }, 2000)

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

            @keyframes fadeout {
            0% {
            opacity: 1;
            }
      80% {
            opacity: 1;
}
            100% {
            opacity: 0;
          }
}
          `}
        </style>
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            gap: "20px",
            overflow: "hidden",
            backgroundColor: tokens.colors.brand.dark,
            animation: "fadeout 2s linear forwards",
          }}
        >
          <div
            style={{
              width: "45px",
              height: "45px",
              // top: "50%",
              left: "50%",
              transform: "rotate(0deg)",
              animation: "rotate 0.8s infinite",
              color: tokens.colors.brand.light,
            }}
          >
            <LoadingIcon />
          </div>
          <Logo />
        </div>
      </>
    )

  return (
    <>
      {head}
      <AppProvider>
        <HomeProvider>
          <main style={bebasNeue.style}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </main>
        </HomeProvider>
      </AppProvider>
    </>
  )
}
