import React from "react"

import * as C from "./styles"
import { Subtitle, Title } from "@/components"
import ContentBox from "@/components/ContentBox"
import { tokens } from "@/utils/tokens"
import { avatarData } from "@/utils/dataObjects"
import Avatar from "@/components/Avatar"
import { useDevice } from "@/hooks/useDevice"

const AvatarList: React.FC = () => {
  const { isMobile } = useDevice()
  return (
    <ContentBox
      bgColor={tokens.colors.brand.lightCream}
      contentStyle={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: tokens.space.sizeXl,
        alignItems: "center",
      }}
    >
      <Title
        style={{ marginTop: "50px", textAlign: "center" }}
        variant="tertiary"
      >
        Conheça nosso coordenador
      </Title>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: tokens.space.sizeXl,
        }}
      >
        <C.List>
          {avatarData.map((avatar, index) => (
            <C.Item key={index}>
              <Avatar img={avatar.img} alt={avatar.name} size="large" />
              <C.AvatarName>{avatar.name}</C.AvatarName>
              {/* <C.AvatarCharge>{avatar.charge}</C.AvatarCharge> */}
            </C.Item>
          ))}
        </C.List>
        <Subtitle>
          Caue Basiolli é graduado em 2013 pela Pontifícia Universidade Católica
          de São Paulo - PUC-SP, e Pós-Graduado em Regularização de Imóveis. Fez
          inúmeros cursos relacionados a Direito Médico, com atuação marcada nas
          esferas judicial e extrajudicial. É o CEO e Coordenador da CBL
          Consultoria, com vasta experiência no direito e visão inovadora. Sua
          liderança estratégica impulsiona a empresa a níveis superiores, sempre
          em busca da excelência e soluções eficazes.
          <br />
          <br />
          Como líder inspirador, valoriza a equipe e preza pelo atendimento
          personalizado aos clientes. Sua expertise em questões legais garante
          resultados excepcionais e torna a CBL uma referência no setor.
          <br />
          <br />
          Comprometido com a ética e o respeito, Caue guia a consultoria em um
          caminho de sucesso, proporcionando soluções sob medida e atendimento
          de excelência para cada desafio jurídico.
        </Subtitle>
      </div>
    </ContentBox>
  )
}

export default AvatarList
