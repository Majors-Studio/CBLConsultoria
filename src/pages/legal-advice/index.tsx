import React from "react";
import * as C from "@/styles/legalAdvice";
import Image from "next/image";
import PurposeForm from "@/components/PurposeForm";
import HeadBanner from "@/components/HeadBanner";
import img2 from "../../assets/png/chaves.png";
import img3 from "../../assets/png/medic.png";
import img4 from "../../assets/png/reunion.png";
import { tokens } from "@/utils/tokens";
import { Subtitle, Title } from "@/components";
import ContentBox from "@/components/ContentBox";

const LegalAdvice: React.FC = () => {
  return (
    <>
      <HeadBanner title="Consultoria juridica" color="#fff" />

      <C.ContainerFluid bgColor={`${tokens.colors.brand.pure}`}>
        <C.Container>
          <C.BoxText>
            {/* <C.Title textColor={`${tokens.colors.brand.light}`}>
              REGULARIZAÇÃO DE IMÓVEIS
            </C.Title> */}
            <div id="real-estate" />
            <Title style={{ fontWeight: "bold" }} variant="secondary">
              REGULARIZAÇÃO DE IMÓVEIS
            </Title>
            <C.Text textColor={`${tokens.colors.brand.light}`}>
              Regularizamos qualquer problema com seu imóvel. Você sabia que a
              regularização do seu imóvel, urbano ou rural, é capaz de
              valorizá-lo em até 50%? Além disso, traz uma série de benefícios
              na alienação e sucessão desses bens.
              <br />
              <br />
              Os donos de imóveis rurais são impedidos de participar de
              privilégios na obtenção de créditos. Resguarde o seu patrimônio e
              regularize agora o seu imóvel
            </C.Text>
          </C.BoxText>
          <C.BoxImage>
            <Image src={img2} alt="regularizacao" priority />
          </C.BoxImage>
        </C.Container>
      </C.ContainerFluid>

      <C.ContainerFluid bgColor={`${tokens.colors.brand.lightCream}`}>
        <C.Container>
          <C.BoxImage>
            <Image src={img3} alt="regularizacao" priority />
          </C.BoxImage>
          <C.BoxText>
            <div id="medical-error" />
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
        </C.Container>
      </C.ContainerFluid>

      <ContentBox bgColor={`${tokens.colors.brand.pure}`}>
        <C.Container>
          <C.BoxText>
            <Title
              variant="secondary"
              style={{ fontWeight: "bold", textAlign: "left" }}
            >
              Erro médico
            </Title>
            <Subtitle style={{ color: "#fff", textAlign: "left" }}>
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
        </C.Container>
      </ContentBox>
      <C.ContainerFluid bgColor={`${tokens.colors.brand.pure}`}>
        <C.Container>
          <C.BoxText>
            <div id="civil-causes" />

            <Title variant="secondary" style={{ textAlign: "left" }}>
              Por que contratar uma consultoria Jurídica?
            </Title>
            <Subtitle style={{ color: "#fff", textAlign: "left" }}>
              Contar com um apoio legal preventivo é o primeiro passo para
              evitar complicações relacionadas ao futuro da sua empresa. Todo
              empreendimento enfrenta questões legais ligadas a contratos,
              assuntos trabalhistas, questões societárias, tributárias e outras.
              A violação ou mesmo a falta de conhecimento das leis pode resultar
              em litígios judiciais, além de multas e penalidades impostas por
              órgãos de fiscalização.
              <br />
              <br />
              Portanto, é fundamental ter o respaldo de um suporte jurídico
              especializado em Direito Empresarial, capaz de oferecer
              orientações sobre as melhores práticas para o seu negócio,
              prevenindo litígios e futuros desgastes.
              <br />
              <br />
              Muitos empreendedores, especialmente proprietários de pequenas
              empresas e startups, podem ter dúvidas ao contratar esse tipo de
              serviço. Considerando que pequenos negócios geralmente têm
              orçamentos limitados, alguns podem acreditar que vale mais a pena
              correr o risco de enfrentar problemas no futuro do que pagar para
              resolver questões agora.
            </Subtitle>
          </C.BoxText>
          <PurposeForm />
        </C.Container>
      </C.ContainerFluid>
    </>
  );
};
export default LegalAdvice;
