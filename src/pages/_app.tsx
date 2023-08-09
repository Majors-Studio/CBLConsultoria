import "@/theme/global-styles"
import type { AppProps } from "next/app"
import React from "react"
import Layout from "@/layout"
import { GlobalStyle } from "@/theme/global-styles"
import "@/styles/global.css"
import { Analytics } from "@vercel/analytics/react"
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
  return (
    <>
      <Analytics />
      <GlobalStyle />
      <title>
      Site off até o pagamento
      </title>
        {/* <main style={bebasNeue.style}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main> */}
    </>
  )
}
