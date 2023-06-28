import React, { HtmlHTMLAttributes } from "react"

import * as S from "./styles"

interface ContentBoxProps extends HtmlHTMLAttributes<HTMLDivElement>, S.IContainerProps  {
  children: React.ReactNode
}

const ContentBox: React.FC<ContentBoxProps> = ({ children, bgColor,py,style }) => {
  return (
    <S.Container bgColor={bgColor} py={py} style={style}>
      <S.Content>{children}</S.Content>
    </S.Container>
  )
}

export default ContentBox
