import React from "react"
import Head from "next/head"
import * as S from "@/styles/home"

import PurposeHome from "@/sections/PurposeHome"
import CardSteps from "@/sections/CardSteps"
import WhyToChoose from "@/sections/WhyToChoose"
import Faq from "@/sections/Faq"
import MainNews from "@/sections/MainNews"
import ClientFeedback from "@/sections/ClientFeedback"
import VideoShowcase from "@/sections/VideoShowcase"
import WhyBetter from "@/sections/WhyBetter"

export default function Home() {
  return (
    <div>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        {/* <meta name="robots" content="index, follow" /> */}
        {/* <meta property="og:image" content="/images/og/harmony.png" /> */}
        {/* <link rel="manifest" href="site.webmanifest" /> */}
      </Head>
      <>
        <PurposeHome />

        <CardSteps />

        <VideoShowcase />

        <WhyBetter />

        <WhyToChoose />

        <ClientFeedback />

        <Faq />

        <MainNews />
      </>
    </div>
  )
}
