import React from "react"

import * as S from "./styles"
import Link from "next/link"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string
  children?: React.ReactNode
  style?: React.CSSProperties
  href?: string
}

const CtaButton: React.FC<Props> = ({
  text,
  children = <>Eu quero!</>,
  style,
  href = "",
  ...props
}) => {
  return !!href ? (
    <Link href={href}>
      <S.Button style={style} {...props}>
        {text ? text : children}
      </S.Button>
    </Link>
  ) : (
    <S.Button style={style} {...props}>
      {text ? text : children}
    </S.Button>
  )
}

export default CtaButton
