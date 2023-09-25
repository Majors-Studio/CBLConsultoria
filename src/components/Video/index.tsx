import React from "react"
import * as S from "./styles"

const Video: React.FC = () => {
  const id = "MT_9EBNS-2o"

  const url = `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&controls=0&rel=0&showinfo=0&loop=1`

  return (
    <S.VideoWrapper>
      <iframe
        width="100%"
        height="100%"
        src={url}
      ></iframe>
    </S.VideoWrapper>
  )
}

export default Video
