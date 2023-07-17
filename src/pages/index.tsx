import React, { useEffect } from "react"
import Head from "next/head"

import PurposeHome from "@/sections/PurposeHome"
import WhyToChoose from "@/sections/WhyToChoose"
import Faq from "@/sections/Faq"
import MainNews from "@/sections/MainNews"
import VideoShowcase from "@/sections/VideoShowcase"
import Banner from "@/components/Banner"
import { useApp } from "@/context/appContext"
import { createClient } from "contentful"

interface Props {
  news: any
}

export default function Home({ news }: Props) {
  const { setNewsList } = useApp()

  useEffect(() => {
    if (!news) return
    setNewsList(news)
  }, [news])

  return (
    <div>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        {/* <meta name="robots" content="index, follow" /> */}
        {/* <meta property="og:image" content="/images/og/harmony.png" /> */}
        {/* <link rel="manifest" href="site.webmanifest" /> */}
      </Head>
      <Banner />
      <VideoShowcase />
      <WhyToChoose />
      <Faq />
      <PurposeHome />
      <MainNews />
    </div>
  )
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
  })

  const res = await client.getEntries({ content_type: "newsArticle" })

  return {
    props: { fallback: true, news: res.items },
    revalidate: 1,
  }
}
