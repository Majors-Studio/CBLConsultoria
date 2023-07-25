import React from "react"

import * as C from "./styles"
import { Title } from "@/components"
import ContentBox from "@/components/ContentBox"
import { tokens } from "@/utils/tokens"
import { avatarData } from "@/utils/dataObjects"
import Avatar from "@/components/Avatar"

const AvatarList: React.FC = () => {
  return (
    <ContentBox bgColor={tokens.colors.brand.lightCream}>
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
            <Avatar img={avatar.img} alt={avatar.name} size="large" />
            <C.AvatarName>{avatar.name}</C.AvatarName>
          </C.Item>
        ))}
      </C.List>
    </ContentBox>
  )
}

export default AvatarList
