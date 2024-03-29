import React, { HtmlHTMLAttributes } from "react"

import * as S from "./styles"
import { tokens } from "@/utils/tokens"
import { useDevice } from "@/hooks/useDevice"

interface ContentBoxProps extends HtmlHTMLAttributes<HTMLDivElement>, S.IContainerProps  {
  children: React.ReactNode
  contentStyle?: React.CSSProperties
}

const ContentBox: React.FC<ContentBoxProps> = ({ children, bgColor, style, contentStyle }) => {
  const { isDesktop } = useDevice()
  return (
    <S.Container bgColor={bgColor} py={!isDesktop ? tokens.space.sizeXxs : tokens.space.sizeXl} style={style}>
      <S.Content style={contentStyle}>{children}</S.Content>
    </S.Container>
  )
}

export default ContentBox
