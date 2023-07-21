import React from "react"
import { ConfirmIcon } from "@/assets/icons"

import * as C from "@/styles/legalAdvice"
import Image from "next/image"
import PurposeForm from "@/components/PurposeForm"
import HeadBanner from "@/components/HeadBanner"
import img2 from "../../assets/png/chaves.png"
import img3 from "../../assets/png/medic.png"
import img4 from "../../assets/png/reunion.png"
import img5 from "../../assets/png/consult.jpg"
import { tokens } from "@/utils/tokens"
import { Subtitle, Title } from "@/components"
import ContentBox from "@/components/ContentBox"
import { civelList } from "@/utils/dataObjects"
import Anchor from "@/components/Anchor"
import { useDevice } from "@/hooks/useDevice"

const LegalAdvice: React.FC = () => {
  const { isMobile } = useDevice()
  return (
    <>
      <HeadBanner
        title="Consultoria juridica"
        color={tokens.colors.brand.light}
      />

      <ContentBox
        py={"60px"}
        bgColor={`${tokens.colors.brand.cta}`}
        contentStyle={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: isMobile ? "column-reverse" : "row",
          gap: isMobile ? "24px" : undefined,
        }}
      >
        <C.BoxText>
          <Anchor id="real-estate" />
          <Title
            style={{ fontWeight: "bold", textAlign: "left" }}
            variant="secondary"
          >
            REGULARIZAÇÃO DE IMÓVEIS
          </Title>
          <Subtitle
            style={{ textAlign: "left", color: tokens.colors.brand.light }}
          >
            Regularizamos qualquer problema com seu imóvel. Você sabia que a
            regularização do seu imóvel, urbano ou rural, é capaz de valorizá-lo
            em até 50%? Além disso, traz uma série de benefícios na alienação e
            sucessão desses bens.
            <br />
            <br />
            Os donos de imóveis rurais são impedidos de participar de
            privilégios na obtenção de créditos. Resguarde o seu patrimônio e
            regularize agora o seu imóvel
          </Subtitle>
        </C.BoxText>

        <C.BoxImage>
          <Image src={img2} alt="regularizacao" priority />
        </C.BoxImage>
      </ContentBox>

      <ContentBox
        py={"60px"}
        bgColor={`${tokens.colors.brand.lightCream}`}
        contentStyle={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: isMobile ? "column-reverse" : "row",
          gap: isMobile ? "24px" : undefined,
        }}
      >
        <C.BoxImage>
          <Image src={img3} alt="regularizacao" priority />
        </C.BoxImage>
        <C.BoxText>
          <Anchor id="medical-error" />
          <Title style={{ fontWeight: "bold", textAlign: "right" }}>
            Erro médico
          </Title>
          <Subtitle style={{ textAlign: "right" }}>
            A Organização Mundial da Saúde (OMS) publicou um relatório que
            mostra um aumento na ocorrência de erros médicos em todo o mundo e
            no Brasil não é diferente.
            <br />
            <br />O acesso à justiça nesta área deve ser promovida por
            profissionais capacitados e com experiência na atividade, seja em
            âmbito judicial ou perante os Conselhos Regionais e Federal de
            Medicina (CRM e CFM).
          </Subtitle>
        </C.BoxText>
      </ContentBox>

      <ContentBox
        py={"60px"}
        bgColor={`${tokens.colors.brand.cta}`}
        contentStyle={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: isMobile ? "column-reverse" : "row",
          gap: isMobile ? "24px" : undefined,
        }}
      >
        <C.BoxText>
          <Title
            variant="secondary"
            style={{ fontWeight: "bold", textAlign: "left" }}
          >
            Erro médico
          </Title>
          <Subtitle
            style={{ color: tokens.colors.brand.light, textAlign: "left" }}
          >
            A Organização Mundial da Saúde (OMS) publicou um relatório que
            mostra um aumento na ocorrência de erros médicos em todo o mundo e
            no Brasil não é diferente.
            <br />
            <br />O acesso à justiça nesta área deve ser promovida por
            profissionais capacitados e com experiência na atividade, seja em
            âmbito judicial ou perante os Conselhos Regionais e Federal de
            Medicina (CRM e CFM).
          </Subtitle>
        </C.BoxText>
        <C.BoxImage>
          <Image src={img4} alt="regularizacao" priority />
        </C.BoxImage>
      </ContentBox>

      <ContentBox
        py={"60px"}
        contentStyle={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: isMobile ? "column-reverse" : "row",
          gap: isMobile ? "24px" : undefined,
        }}
        bgColor={`${tokens.colors.brand.lightCream}`}
      >
        <C.BoxImage>
          <Image src={img5} alt="regularizacao" priority />
        </C.BoxImage>
        <C.BoxText>
          <Anchor id="civil-causes" />
          <Title
            variant="secondary"
            style={{ textAlign: "left", color: "#000" }}
          >
            Por que contratar uma consultoria Jurídica?
          </Title>
          <Subtitle style={{ color: "#000", textAlign: "left" }}>
            Em casos cíveis, é de extrema importância buscar o aconselhamento
            jurídico especializado para alcançar uma resolução justa e
            eficiente. Aqui na CBL Consultoria, compreendemos a complexidade do
            sistema legal e o impacto significativo que uma representação
            adqueada pode ter em seu caso. Veja por que é fundamental contar com
            um advogado especializado
            <div style={{ marginTop: "20px" }}>
              {civelList.map((item) => (
                <C.CivelListInfoItem key={item.id}>
                  <ConfirmIcon />
                  <Subtitle style={{ color: "#000" }}>{item.title}</Subtitle>
                </C.CivelListInfoItem>
              ))}
            </div>
          </Subtitle>
        </C.BoxText>
      </ContentBox>
      <PurposeForm />
    </>
  )
}
export default LegalAdvice
