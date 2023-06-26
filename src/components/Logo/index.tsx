import Image from "next/image";
import React from "react";

import * as S from "./styles";

import logo from "../../assets/png/logo.png";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <S.Container>
        <Image
          width={192}
          height={62}
          src={logo}
          alt="logo"
          style={{
            objectFit: "cover",
          }}
        />
      </S.Container>
    </Link>
  );
};

export default Logo;
