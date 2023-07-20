import React from "react"

import * as S from "./styles"
import Logo from "../Logo"

import Image from "next/image"
import Link from "next/link"
import CtaButton from "../CtaButton"
import Title from "../Title"
import Subtitle from "../Subtitle"
import Description from "../Description"
import { tokens } from "@/utils/tokens"
import ContentBox from "../ContentBox"
import { useDevice } from "@/hooks/useDevice"

const Footer: React.FC = () => {
  const { isDesktop } = useDevice()
  const midiaItems = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/cbl_cj/",
      logo: "https://static.wixstatic.com/media/fea1c1_02a47dd2d3a14f7a908448826a993500~mv2.png/v1/fill/w_36,h_36,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/%C3%8Dcone%20Instagram.png",
    },
  ]

  const footerData = [
    {
      title: "Mapa do site",
      subtitle: [
        {
          name: "Home",
          url: "/",
        },
        {
          name: "Quem somos",
          url: "/about",
        },
        {
          name: "Notícias",
          url: "/news",
        },
      ],
    },
    {
      title: "Recursos",
      subtitle: [
        {
          name: "Documentação",
          url: "/",
        },
        {
          name: "Conferências",
          url: "/",
        },
        {
          name: "Consultoria",
          url: "/legal-advice",
        },
      ],
    },
  ]

  return (
    <>
      <ContentBox
        py={tokens.space.sizeXl}
        bgColor={tokens.colors.brand.cta}
        contentStyle={{
          display: "flex",
          flexDirection: isDesktop ? "row" : "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <S.Midia>
          <Logo />
            <S.BiggerText>
              We growing up your business with personal AI manager.
            </S.BiggerText>
            <Subtitle
              style={{
                color: tokens.colors.brand.light,
                textAlign: "left",
              }}
            >
              caue@cblconsultoria.com.br
            </Subtitle>
            <CtaButton
              href="#purposeForm"
              style={{
                border: "1px solid "+tokens.colors.brand.light,
                color: tokens.colors.brand.light,
              }}
            >
              Entre em contato
            </CtaButton>
        </S.Midia>
        <S.ContainerInfo>
          {footerData.map((item, index) => (
            <S.Info key={index}>
              <S.BiggerText>{item.title}</S.BiggerText>
              {item.subtitle.map((subitem, subindex) => (
                <Link href={subitem.url} key={subindex}>
                  <S.Subtitle>{subitem.name}</S.Subtitle>
                </Link>
              ))}
            </S.Info>
          ))}
        </S.ContainerInfo>
      </ContentBox>
      <ContentBox
        contentStyle={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          
        }}
        py={tokens.space.sizeXxs}
      >
        <S.Text>© 2023 CBLCONSULTORIA. All rights reserved.</S.Text>
        <S.MidiaItems>
          {midiaItems.map((item, index) => (
            <S.MidiaItem key={index} href={item.url}>
              <Image width={36} height={36} src={item.logo} alt={item.name} />
            </S.MidiaItem>
          ))}
        </S.MidiaItems>
      </ContentBox>
    </>
  )
}

export default Footer
