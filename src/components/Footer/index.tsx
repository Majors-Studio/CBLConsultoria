import React from "react";

// google maps api
import { useLoadScript, GoogleMap, MarkerF } from "@react-google-maps/api";
import { useMemo } from "react";
import * as S from "./styles";
import Logo from "../Logo";

import Image from "next/image";
import Link from "next/link";

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
  ];

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
            </S.MainText>
          </S.Midia>
          <S.ContainerInfo>
            <S.Info>
              <S.Title>Company</S.Title>
              <S.Subtitle>Blog</S.Subtitle>
              <S.Subtitle>Carreiras</S.Subtitle>
              <S.Subtitle>Preços</S.Subtitle>
            </S.Info>
            <S.Info>
              <S.Title>Resources</S.Title>
              <S.Subtitle>Documentação</S.Subtitle>
              <S.Subtitle>Papéis</S.Subtitle>
              <S.Subtitle>Conferências</S.Subtitle>
            </S.Info>
            <S.Info>
              <S.Title>Legal</S.Title>
              <S.Subtitle>Termos de serviço</S.Subtitle>
              <S.Subtitle>Política e Privacidade</S.Subtitle>
              <S.Subtitle>Processamento de dados</S.Subtitle>
            </S.Info>
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
                <S.InfoText>{item.name}</S.InfoText>
              </S.MidiaItem>
            ))}
          </S.MidiaItems>
        </S.Content>
      </S.Rights>
    </>
  );
};

export default Footer;
