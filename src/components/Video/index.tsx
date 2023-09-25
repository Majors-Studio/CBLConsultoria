import React from "react"
import * as S from "./styles"

const Video: React.FC = () => {
  const id = "MT_9EBNS-2o"

  const url =
    `https://www.youtube.com/embed/${id}` +
    `
    ?autoplay=1
    &modestbranding=1
    &showinfo=0
    &fs=0
    &cc_load_policy=1
    &iv_load_policy=3
    &autohide=0
    &enablejsapi=1
    &rel=0
    &controls=0
    &loop=1
    &playsinline=1
    &mute=0
    `.replaceAll(/\s/g, "")
  
  console.log(url)

  return (
    <S.VideoWrapper>
      <iframe width="100%" height="100%" src={url}></iframe>
    </S.VideoWrapper>
  )
}

export default Video
