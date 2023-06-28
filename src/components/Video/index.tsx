import { useDevice } from "@/hooks/useDevice"
import React from "react"

import * as S from "./styles"

interface VideoProps {
  src?: string
  title?: string
}

const Video: React.FC<VideoProps> = ({ src }) => {
  const { isMobile, isTablet } = useDevice()
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
          <p>No video</p>
        </S.NoVideo>
      )}
    </S.VideoWrapper>
  )
}

export default Video
