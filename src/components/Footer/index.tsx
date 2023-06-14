import React from "react";

// google maps api
import { useLoadScript, GoogleMap, MarkerF } from "@react-google-maps/api";
import { useMemo } from "react";
import * as S from "./styles";
import Logo from "../Logo";

import Image from "next/image";

const Footer: React.FC = () => {
  // google maps config
  const libraries = useMemo(() => ["places"], []);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
    libraries: libraries as any,
  });

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
    }),
    []
  );

  // map position
  const mapCenter = useMemo(
    () => ({ lat: 27.672932021393862, lng: 85.31184012689732 }),
    []
  );

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

  const middleInfoData = [
    "Política de privacidade",
    "Termos de uso",
    "Contato",
    "Sobre",
  ];

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <S.Container>
      <S.Midia>
        <Logo />
        <S.MidiaItems>
          {midiaItems.map((item, index) => (
            <S.MidiaItem key={index} href={item.url}>
              <Image width={36} height={36} src={item.logo} alt={item.name} />
              <S.InfoText>{item.name}</S.InfoText>
            </S.MidiaItem>
          ))}
        </S.MidiaItems>
      </S.Midia>
      <S.MiddleInfo>
        {middleInfoData.map((item, index) => (
          <S.Subtitle>{item}</S.Subtitle>
        ))}
      </S.MiddleInfo>
      <S.Info>
        <S.Title>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
            />
          </svg>
          Localização
        </S.Title>
        <GoogleMap
          options={mapOptions}
          zoom={14}
          center={mapCenter}
          mapTypeId={google.maps.MapTypeId.ROADMAP}
          mapContainerStyle={{ width: "500px", height: "200px" }}
          onLoad={() => console.log("Map Component Loaded...")}
        >
          <MarkerF
            position={mapCenter}
            icon="https://picsum.photos/64"
            onLoad={() => console.log("Marker Loaded")}
          />
        </GoogleMap>
        <S.Subtitle>Rua Timote Silva, 280</S.Subtitle>

        <S.Title>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
            />
          </svg>
          Email
        </S.Title>
        <S.Subtitle>Clbconsultoria@gmail.com</S.Subtitle>
      </S.Info>
    </S.Container>
  );
};

export default Footer;
