import React from "react"
import * as C from "./styles"

export interface SubtitleProps {
  children: React.ReactNode
  style?: React.CSSProperties
}

const Subtitle: React.FC<SubtitleProps> = ({ children, style }) => {
  return <C.Subtitle style={style}>{children}</C.Subtitle>
}

export default Subtitle
