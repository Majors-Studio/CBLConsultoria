import React from "react";
import Image from "next/image";

import * as C from "./styles";
import { Title } from "@/components";
import ContentBox from "@/components/ContentBox";
import { tokens } from "@/utils/tokens";
import { avatarData } from "@/utils/dataObjects";

const AvatarList: React.FC = () => {
  return (
    <ContentBox py={"60px"} bgColor={tokens.colors.brand.lightCream}>
      <Title
        style={{ marginTop: "50px", textAlign: "center" }}
        variant="tertiary"
      >
        Conheça nosso coordenador
      </Title>

      <C.List>
        {avatarData.map((avatar, index) => (
          <C.Item key={index}>
            <C.AvatarCharge>{avatar.charge}</C.AvatarCharge>
            <Image
              src={avatar.img}
              alt="avatar"
              style={{ borderRadius: "505%" }}
              width={60}
              height={60}
            />
            <C.AvatarName>{avatar.name}</C.AvatarName>
          </C.Item>
        ))}
      </C.List>
    </ContentBox>
  );
};

export default AvatarList;
