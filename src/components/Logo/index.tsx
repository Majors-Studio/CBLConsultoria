import Image from "next/image";
import React from "react";

import * as S from "./styles";

import logo from "../../assets/png/logo.png";

const Logo: React.FC = () => {
  return (
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
  );
};

export default Logo;
