import React from "react"
import * as C from "./styles"

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  text?: string
}

const Title: React.FC<TitleProps> = ({ text, style }) => {
  return <C.Title style={style}>{text}</C.Title>
}

export default Title
