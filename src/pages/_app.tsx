import "@/theme/global-styles"
import type { AppProps } from "next/app"
import React, { useEffect, useState } from "react"
import Head from "next/head"
import Layout from "@/layout"
import { AppProvider } from "@/context/appContext"
import LoadingIcon from "@/assets/icons/LoadingIcon"
import Logo from "@/components/Logo"
import { tokens } from "@/utils/tokens"
import { GlobalStyle } from "@/theme/global-styles"
import "@/styles/global.css"

import { Bebas_Neue, Montserrat, Poppins } from "@next/font/google"
import localFont from "@next/font/local"
import Loading from "@/components/Loading"

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
        <Loading />
      </>
    )

  return (
    <>
      <GlobalStyle />
      {head}
      <AppProvider>
        <main style={bebasNeue.style}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
      </AppProvider>
    </>
  )
}
