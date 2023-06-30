import { Title } from "@/components"
import SpeechCarousel from "@/components/SpeechCarousel"
import { useApp } from "@/context/appContext"
import React from "react"

import * as C from "./styles"

const WhyToInvest: React.FC = () => {
  const { userList } = useApp()
    
  return (
    <C.WhatContainer>
      <Title
        style={{
          marginBottom: 32,
        }}
        variant="tertiary"
      >
        Porquê investir em precatórios?
      </Title>

      <SpeechCarousel data={userList} />
    </C.WhatContainer>
  )
}

export default WhyToInvest
