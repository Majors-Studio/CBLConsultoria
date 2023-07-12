import React from "react"
import * as C from "./styles"

export interface SubtitleProps {
  children: React.ReactNode
  style?: React.CSSProperties
  ref?: React.Ref<HTMLParagraphElement>
}

const Subtitle: React.FC<SubtitleProps> = ({ children, style}, props) => {
  return <C.Subtitle style={style} {...props}>{children}</C.Subtitle>
}

export default Subtitle
