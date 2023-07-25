import React from "react"
import { CustomQuality, Title } from "@/components"
import HeadBanner from "@/components/HeadBanner"
import AvatarList from "@/sections/AvatarList"
import VideoHistory from "@/sections/VideoHistory"
import PurposeForm from "@/components/PurposeForm"
import { tokens } from "@/utils/tokens"
import ContentBox from "@/components/ContentBox"
import Video from "@/components/Video"
import CtaButton from "@/components/CtaButton"

const About: React.FC = () => {
  return (
    <>
      <HeadBanner title="Sobre nós" />

      <ContentBox
        bgColor={tokens.colors.brand.lightCream}
        py={tokens.space.sizeXl}
        contentStyle={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: tokens.space.sizeXxs,
        }}
      >
        <Title>Conheça a CBL Consultoria!</Title>
        <Video />
        <CtaButton href="#purposeForm">Entre em contato</CtaButton>
      </ContentBox>

      <VideoHistory />

      <CustomQuality />

      <AvatarList />

      <ContentBox
        py={"30px"}
        bgColor={tokens.colors.neutral.highLight}
        contentStyle={{
          gap: tokens.space.sizeXxs,
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
        }}
      >
        <Title variant="primary"
          style={{
            textAlign: "left",
          }}
        >
          A <b>sua segurança</b> e <b>qualidade</b> na venda de <b>precatórios</b>! Deixe-nos
          ajudá-lo(a) a <b>superar os desafios</b> e alcançar o <b>sucesso</b> desejado.
          <br/>
          <br/>
          Juntos, iremos além!
        </Title>
        <PurposeForm />
      </ContentBox>
    </>
  )
}

export default About
