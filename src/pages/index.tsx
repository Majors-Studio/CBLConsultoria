import React, { useEffect } from "react";
import Head from "next/head";

import PurposeHome from "@/sections/PurposeHome";
import WhyToChoose from "@/sections/WhyToChoose";
import Faq from "@/sections/Faq";
import MainNews from "@/sections/MainNews";
import VideoShowcase from "@/sections/VideoShowcase";
import Banner from "@/components/Banner";
import { bannerList } from "@/utils/dataObjects";
import { getNewsList } from "@/utils/getNews";
import { useApp } from "@/context/appContext";

interface Props {
  data: any
}

export default function Home({ data }: Props) {
    const { setNewsList } = useApp()

  useEffect(() => {
    if (!data) return
    setNewsList(data.posts.nodes)
  }, [data])
  
  return (
    <div>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        {/* <meta name="robots" content="index, follow" /> */}
        {/* <meta property="og:image" content="/images/og/harmony.png" /> */}
        {/* <link rel="manifest" href="site.webmanifest" /> */}
      </Head>
      <>
        {/* TODO: 
          add banner
          remove all precatory stuff
        */}
        {/* Gerando Autoridade */}
        {/* <CardSteps /> */}
        <Banner data={bannerList} />
        <div id='videoshowcase'/>
        <VideoShowcase />
        <WhyToChoose /> {/* Adaptar com o texto que o caue mandar */}
        <Faq /> {/* Alterar o conteudo */}
        <PurposeHome />
        <MainNews />
      </>
    </div>
  );
}

export async function getStaticProps() {
  const data = await getNewsList()

  return {
    props: { data, fallback: true },
  }
}
