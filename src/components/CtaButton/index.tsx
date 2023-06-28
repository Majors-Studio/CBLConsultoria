import React from "react"

import * as S from "./styles"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string
  children?: React.ReactNode
  style?: React.CSSProperties
}

const CtaButton: React.FC<Props> = ({
  text,
  children = <>Eu quero!</>,
  style,
  ...props
}) => {
  return (
    <S.Button style={style} {...props}>
      {text ? text : children}
    </S.Button>
  )
}

export default CtaButton
