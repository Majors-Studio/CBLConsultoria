import React from "react"

import * as S from "./styles"

interface AvatarProps {
    size?: "small" | "medium" | "large"
  src: string
  alt?: string
}

const Avatar: React.FC<AvatarProps> = ({ size = 'medium',src, alt = "Avatar" }) => {
  return (
    <S.Container size={size}>
      <S.Image alt={alt} src={src} />
    </S.Container>
  )
}

export default Avatar
