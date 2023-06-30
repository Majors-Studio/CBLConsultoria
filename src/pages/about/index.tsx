import React from "react"
import * as C from "@/styles/about"
import { CustomQuality } from "@/components"
import { useAbout } from "@/context/aboutContext"
import HeadBanner from "@/components/HeadBanner"
import Purpose from "@/sections/Purpose"

import AvatarList from "@/sections/AvatarList"
import SlabList from "@/sections/SlabList"
import VideoHistory from "@/sections/VideoHistory"

const About: React.FC = () => {
  const { qualityList } = useAbout()

  return (
    <C.Container>
      <HeadBanner title="Sobre Nós" />

      <C.SwiperContainer>
        <CustomQuality data={qualityList} />
      </C.SwiperContainer>

      <SlabList />

      <VideoHistory />

      <AvatarList />

      <Purpose />
    </C.Container>
  )
}

export default About
