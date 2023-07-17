import React from "react"
import PurposeHome from "@/sections/PurposeHome"
import WhyToChoose from "@/sections/WhyToChoose"
import Faq from "@/sections/Faq"
import MainNews from "@/sections/MainNews"
import VideoShowcase from "@/sections/VideoShowcase"
import Banner from "@/components/Banner"

export default function Home() {
  return (
    <>
      <Banner />
      <VideoShowcase />
      <WhyToChoose />
      <Faq />
      <PurposeHome />
      <MainNews />
    </>
  )
}
