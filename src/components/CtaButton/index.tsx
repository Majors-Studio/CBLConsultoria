import React from "react"
import * as S from "./styles"
import Link from "next/link"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  style?: React.CSSProperties
  href?: string
  variant?: "primary" | "secondary"
}

const CtaButton: React.FC<Props> = ({
  children = <>Fale Conosco!</>,
  style,
  href,
  variant = "primary",
  ...props
}) => {
  return (
    !!href ? <Link href={href}><S.Button style={style} {...props} variant={variant}>{children}</S.Button></Link> : <S.Button style={style} {...props} variant={variant}>{children}</S.Button>
  )
}

export default CtaButton
