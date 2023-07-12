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
  href = "#purposeForm",
  ...props
}) => {
  return !!href ? (
    <S.Button style={style} {...props}>
      <Link href={href}>{text ? text : children}</Link>
    </S.Button>
  ) : (
    <S.Button style={style} {...props}>
      {text ? text : children}
    </S.Button>
  );
};

export default CtaButton;
