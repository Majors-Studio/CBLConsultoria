import React from "react"

import * as S from "./styles"
import Logo from "../Logo"

import Link from "next/link"
import CtaButton from "../CtaButton"
import Subtitle from "../Subtitle"
import { tokens } from "@/utils/tokens"
import ContentBox from "../ContentBox"
import { useDevice } from "@/hooks/useDevice"
import InstagramIcon from "@/assets/icons/InstagramIcon"
import Description from "../Description"

const Footer: React.FC = () => {
  const { isDesktop } = useDevice()
  const midiaItems = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/cbl_cj/",
      logo: <InstagramIcon />,
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
          <Subtitle
            style={{
              textAlign: "left",
              color: tokens.colors.brand.light,
            }}
          >
            We growing up your business with personal AI manager.
          </Subtitle>
          <Description
            style={{
              color: tokens.colors.brand.light,
              textAlign: "left",
            }}
          >
            caue@cblconsultoria.com.br
          </Description>
          <CtaButton href="#purposeForm" variant="secondary">
            Entre em contato
          </CtaButton>
        </S.Midia>
        <S.ContainerInfo>
          {footerData.map((item, index) => (
            <S.Info key={index}>
              <Subtitle
                style={{
                  textAlign: "center",
                  color: tokens.colors.brand.light,
                  fontWeight: "bold",
                }}
              >
                {item.title}
              </Subtitle>
              {item.subtitle.map((subitem, subindex) => (
                <Link href={subitem.url} key={subindex}>
                  <Description
                    style={{
                      color: tokens.colors.brand.light,
                      textAlign: "center",
                    }}
                  >
                    {subitem.name}
                  </Description>
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
        <Description
          style={{
            color: tokens.colors.brand.light,
          }}
        >
          © 2023 CBLCONSULTORIA. All rights reserved.
        </Description>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: tokens.space.sizeXxxs,
          }}
        >
          {midiaItems.map((item, index) => (
            <S.MidiaItem key={index} href={item.url}>
              {item.logo}
            </S.MidiaItem>
          ))}
        </div>
      </ContentBox>
    </>
  )
}

export default Footer
