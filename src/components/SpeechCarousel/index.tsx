import React from "react"
import { SwiperSlide, Swiper } from "swiper/react"
import { Autoplay, A11y } from "swiper"
import SpeechBox from "../SpeechBox"
import Avatar from "../Avatar"

import * as C from "./styles"
import { StaticImageData } from "next/image"

interface SpeechCarouselProps {
  data: {
    name: string
    avatar: string
    text: string
    city?: string
    state?: string
    country?: string
  }[]
}

const SpeechCarousel: React.FC<SpeechCarouselProps> = ({ data }) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      modules={[Autoplay, A11y]}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      style={{
        width: "100%",
      }}
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <C.WhatItem>
            <SpeechBox text={item.text} />
            <C.WhatTexts>
              <Avatar img={item.avatar} size="large" />
              <C.WhatName>{item.name}</C.WhatName>
              {item.city && item.state && item.country && (
                <C.WhatPlace>
                  {item.city}, {item.state} - {item.country}
                </C.WhatPlace>
              )}
            </C.WhatTexts>
          </C.WhatItem>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SpeechCarousel
