import React, { useState } from "react";
import { useApp } from "@/context/appContext";
import * as S from "./styles";
import Link from "next/link";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  href?: string;
}

const CtaButton: React.FC<Props> = ({
  text,
  children = <>Fale Conosco!</>,
  style,
  href = "",
  ...props
}) => {
  return (
    <S.Button style={style} {...props}>
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
