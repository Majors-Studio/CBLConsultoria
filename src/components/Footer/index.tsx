import React from "react"

// google maps api
import { useLoadScript, GoogleMap, MarkerF } from "@react-google-maps/api"
import { useMemo } from "react"
import * as S from "./styles"
import Logo from "../Logo"

import Image from "next/image"
import Link from "next/link"
import CtaButton from "../CtaButton"

const Footer: React.FC = () => {
  // google maps config
  // const libraries = useMemo(() => ["places"], []);
  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
  //   libraries: libraries as any,
  // });

  // const mapOptions = useMemo<google.maps.MapOptions>(
  //   () => ({
  //     disableDefaultUI: true,
  //     clickableIcons: true,
  //     scrollwheel: false,
  //   }),
  //   []
  // );

  // // map position
  // const mapCenter = useMemo(
  //   () => ({ lat: 27.672932021393862, lng: 85.31184012689732 }),
  //   []
  // );

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

  // if (!isLoaded) {
  //   return <p>Loading...</p>;
  // }

  return (
    <>
      <S.Container>
        <S.Content>
          <S.Midia>
            <Logo />
            <S.MainText>
              <S.BiggerText>
                We growing up your business with personal AI manager.
              </S.BiggerText>
              <S.Desc>caue@cblconsultoria.com.br</S.Desc>
              <CtaButton
                href="#purposeForm"
                style={{
                  border: "1px solid #fff",
                  color: "#fff",
                }}
              >
                Entre em contato
              </CtaButton>
            </S.MainText>
          </S.Midia>
          <S.ContainerInfo>
            {footerData.map((item, index) => (
              <S.Info key={index}>
                <S.Title>{item.title}</S.Title>
                {item.subtitle.map((subitem, subindex) => (
                  <Link href={subitem.url} key={subindex}>
                    <S.Subtitle>{subitem.name}</S.Subtitle>
                  </Link>
                ))}
              </S.Info>
            ))}
          </S.ContainerInfo>
        </S.Content>
      </S.Container>
      <S.Line />
      <S.Rights>
        <S.Content>
          <S.Text>© 2023 CBLCONSULTORIA. All rights reserved.</S.Text>
          <S.MidiaItems>
            {midiaItems.map((item, index) => (
              <S.MidiaItem key={index} href={item.url}>
                <Image width={36} height={36} src={item.logo} alt={item.name} />
              </S.MidiaItem>
            ))}
          </S.MidiaItems>
        </S.Content>
      </S.Rights>
    </>
  )
}

export default Footer
