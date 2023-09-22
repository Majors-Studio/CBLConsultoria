import React from "react"

import * as S from "./styles"
import Description from "../Description"
import ReactPlayer from "react-player"

interface VideoProps {
  src?: string
  title?: string
}

const Video: React.FC<VideoProps> = ({ src }) => {
  return (
    <S.VideoWrapper>
      {src ? (
        <ReactPlayer
          width="100%"
          height={"100%"}
          url={src}
          controls
          muted
          config={{
            dailymotion: {
              params: {
                autoplay: true,
              },
            }
          }}
        ></ReactPlayer>
      ) : (
        <S.NoVideo>
          <Description>No video</Description>
        </S.NoVideo>
      )}
    </S.VideoWrapper>
  )
}

export default Video
