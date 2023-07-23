import React from "react";
import * as S from "./styles";
import Link from "next/link";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  href?: string;
  variant?: "primary" | "secondary";
}

const CtaButton: React.FC<Props> = ({
  text,
  children = <>Fale Conosco!</>,
  style,
  href,
  variant = "primary",
  ...props
}) => {
  return (
    <S.Button style={style} {...props} variant={variant}>
      {!!href ? (
        <Link href={href}>{text ? text : children}</Link>
      ) : text ? (
        text
      ) : (
        children
      )}
    </S.Button>
  );
};

export default CtaButton;
