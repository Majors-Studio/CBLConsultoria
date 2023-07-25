import React from "react"
import PurposeHome from "@/sections/PurposeHome"
import WhyToChoose from "@/sections/WhyToChoose"
import MainNews from "@/sections/MainNews"
import VideoShowcase from "@/sections/VideoShowcase"
import Banner from "@/components/Banner"

export default function Home() {
  return (
    <>
      <Banner />
      <PurposeHome />
      <VideoShowcase />
      <WhyToChoose />
      <MainNews />
    </>
  )
}
