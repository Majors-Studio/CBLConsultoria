import React from "react"
import * as C from "./styles"

export interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  text?: string
  variant?: 'primary' | 'secondary' | 'tertiary'
}

const Title: React.FC<TitleProps> = ({ text, style,variant = 'primary' }) => {
  return <C.Title variant={variant} style={style}>{text}</C.Title>
}

export default Title
