import React from "react"

import * as S from "./styles"
import Description from "../Description"

interface VideoProps {
  src?: string
  title?: string
}

const Video: React.FC<VideoProps> = ({ src }) => {
  return (
    <S.VideoWrapper>
      {src ? (
        <iframe
          allowFullScreen
          uk-video="automute: true"
          width="100%"
          height={"100%"}
          src={src}
        ></iframe>
      ) : (
        <S.NoVideo>
          <Description>No video</Description>
        </S.NoVideo>
      )}
    </S.VideoWrapper>
  )
}

export default Video
