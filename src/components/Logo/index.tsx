import Image from "next/image";
import React from "react";

import * as S from "./styles";

import logo from "../../assets/png/logo.png";
import Link from "next/link";

export interface LogoProps {
  size?: "small" | "medium" | "large";
}

const Logo: React.FC<LogoProps> = ({size = 'medium'}) => {
  return (
    <Link href="/">
      <S.Container size={size}>
        <Image
          src={logo}
          alt="logo"
          priority
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        />
      </S.Container>
    </Link>
  );
};

export default Logo;
