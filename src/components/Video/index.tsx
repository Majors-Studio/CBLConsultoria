import React from "react"

import * as S from "./styles"
import Description from "../Description"
import ReactPlayer from "react-player"

const Video: React.FC = () => {
  // https://youtu.be/lOFdW2UHpa4
  const url = "https://youtu.be/lOFdW2UHpa4"
  return (
    <S.VideoWrapper>
      <ReactPlayer
        width="100%"
        height="100%"
        url={url}
        controls
        muted
        config={{
          dailymotion: {
            params: {
              autoplay: true,
            },
          },
        }}
      ></ReactPlayer>
    </S.VideoWrapper>
  )
}

export default Video
