import React from "react"
import Image from "next/image"

import * as C from "./styles"
import { Title } from "@/components"
import { useAbout } from "@/context/aboutContext"
import ContentBox from "@/components/ContentBox"
import { tokens } from "@/utils/tokens"

const AvatarList: React.FC = () => {
  const { avatarData } = useAbout()

  return (
    <ContentBox py={"60px"} bgColor={tokens.colors.brand.lightCream}>
      <Title variant="tertiary">
        Conheça os responsáveis pelos nossos negócios
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
  )
}

export default AvatarList
