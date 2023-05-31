import React from "react"

import * as S from "./styles"
import Logo from "../Logo"

import Image from 'next/image'

const Footer: React.FC = () => {
  const midiaItems = [
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/",
      logo: "https://static.wixstatic.com/media/fea1c1_206abe71ae4d48bd9bfc43d780568750~mv2.png/v1/fill/w_36,h_36,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/%C3%8Dcone%20Linkedin.png",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/",
      logo: "https://static.wixstatic.com/media/fea1c1_1dba9c8d59804f439b332177e81adde4~mv2.png/v1/fill/w_36,h_36,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/%C3%8Dcone%20Facebook.png",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/",
      logo: "https://static.wixstatic.com/media/fea1c1_02a47dd2d3a14f7a908448826a993500~mv2.png/v1/fill/w_36,h_36,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/%C3%8Dcone%20Instagram.png",
    },
  ]

  return (
    <S.Container>
      <S.Midia>
        <Logo />
        <S.MidiaItems>
          {midiaItems.map((item, index) => (
            <S.MidiaItem key={index} href={item.url}>
              <Image width={36} height={36} src={item.logo} alt={item.name} />
            </S.MidiaItem>
          ))}
        </S.MidiaItems>
      </S.Midia>
      <S.Info></S.Info>
      <S.Nav></S.Nav>
    </S.Container>
  )
}

export default Footer
