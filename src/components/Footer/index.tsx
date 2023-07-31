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
import { navitems } from "@/utils/navitems"
import FacebookIcon from "@/assets/icons/FacebookIcon"

const Footer: React.FC = () => {
  const { isDesktop,isMobile } = useDevice()
  const midiaItems = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/cbl_cj/",
      logo: <InstagramIcon />,
    },
    {
      name: 'Facebook',
      url: 'https://m.facebook.com/p/CBLConsultoria-100094063807429/?refid=52&__tn__=C-R&wtsid=rdr_0dek66DkkpEtmOwc2&_rdr',
      logo: <FacebookIcon />,
    }
  ]

  const footerData = [
    {
      title: "Mapa do site",
      subtitle: navitems,
    },
    // {
    //   title: "Recursos",
    //   subtitle: [
    //     {
    //       title: "Documentação",
    //       url: "/",
    //     },
    //     {
    //       title: "Conferências",
    //       url: "/",
    //     },
    //     {
    //       title: "Consultoria",
    //       url: "/legal-advice",
    //     },
    //   ],
    // },
  ]

  return (
    <>
      <ContentBox
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
              color: tokens.colors.neutral.highPure,
            }}
          >
            Transformando desafios em oportunidades.
          </Subtitle>
          <Description
            style={{
              color: tokens.colors.neutral.highPure,
              textAlign: isMobile ? 'center' : "left",
              width: "100%",
            }}
          >
            caue@cblconsultoria.com.br
          </Description>
          <CtaButton
            href="#purposeForm"
            variant="secondary"
            style={{
              width: "100%",
            }}
          >
            Entre em contato
          </CtaButton>
        </S.Midia>
        <S.ContainerInfo>
          {footerData.map((item, index) => (
            <S.Info key={index}>
              <Subtitle
                style={{
                  textAlign: "center",
                  color: tokens.colors.neutral.highPure,
                  fontWeight: "bold",
                }}
              >
                {item.title}
              </Subtitle>
              {item.subtitle.map((subitem, subindex) => (
                <Link href={subitem.url} key={subindex}>
                  <Description
                    style={{
                      color: tokens.colors.neutral.highPure,
                      textAlign: "center",
                    }}
                  >
                    {subitem.title}
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
      >
        <Description
          style={{
            color: tokens.colors.neutral.highPure,
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
