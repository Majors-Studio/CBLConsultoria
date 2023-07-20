import React from "react"

import * as S from "./styles"

interface AvatarProps {
  size?: "small" | "medium" | "large"
  img: any
  alt?: string
}

const Avatar: React.FC<AvatarProps> = ({
  size = "medium",
  img,
  alt = "Avatar",
}) => {
  return (
    <S.Container size={size}>
      <S.Image alt={alt} src={img.src} />
    </S.Container>
  )
}

export default Avatar
