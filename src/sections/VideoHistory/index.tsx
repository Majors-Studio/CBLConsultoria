import React, { useEffect, useRef, useState } from "react";
import ContentBox from "@/components/ContentBox";
import Video from "@/components/Video";
import { Subtitle, Title } from "@/components";
import { tokens } from "@/utils/tokens";

import * as C from "./styles";
import gsap from "gsap";

const VideoHistory: React.FC = () => {
  const [showMore, setShowMore] = useState<boolean>(false);

  const showMoreRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (showMoreRef.current) {
      if (showMore) {
        gsap.to(showMoreRef.current, {
          height: "auto",
          duration: 0.3,
          ease: "power2.inOut",
        });
      } else {
        gsap.to(showMoreRef.current, {
          height: "0px",
          duration: 0.3,
          ease: "power2.inOut",
        });
      }
    }
  }, [showMore]);

  return (
    <ContentBox
      bgColor={tokens.colors.neutral.highPure}
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        gap: tokens.space.sizeXxs,
      }}
    >
      <Title style={{ marginBottom: 24 }}>
        Estamos na vanguarda das antecipações de Precatórios, Regularização Imobiliária e Direito Médico no Brasil!
      </Title>
      <Subtitle style={{ textAlign: "justify" }}>
        <b>A CBL Consultoria possui vasta experiência no mercado</b> e conta com{" "}
        <b>profissionais capacitados</b> para atender, de forma individualizada,
        a necessidade do cliente. O fato de não atuar com demandas de massa
        permite a CBL Consultoria desempenhar sempre o melhor atendimento ao
        cliente, de forma personalizada e eficaz, priorizando a agilidade,
        segurança e eficácia na proteção do seu patrimônio Nossa equipe é
        composta por profissionais graduados nas melhores universidades do
        Estado de São Paulo e atua tanto na área consultiva quanto contenciosa.
      </Subtitle>

      <Video />

      <Subtitle
        style={{
          textAlign: "justify",
        }}
      >
        Sua busca por uma consultoria jurídica confiável e experiente em
        precatórios chegou ao fim. Apresentamos a CBL Consultoria, uma empresa
        especializada no mercado, com vasta experiência. Fundada justamente pela
        percepção das dificuldades enfrentadas na venda de precatórios, nossa
        missão é oferecer segurança e qualidade em todos os aspectos do
        processo.
        <br />
        <br />
        Nossa equipe de consultores jurídicos altamente qualificados está pronta
        para guiar você de forma assertiva e transparente. Com conhecimento
        atualizado sobre as leis, regulamentos e jurisprudências mais recentes,
        proporcionamos orientação precisa para sua situação específica. Seja
        você um indivíduo, empresa ou instituição, temos a expertise necessária
        para lidar com todas as complexidades legais envolvidas.
      </Subtitle>
      <div
        ref={showMoreRef}
        style={{
          overflow: "hidden",
        }}
      >
        <Subtitle
          style={{
            textAlign: "justify",
          }}
        >
          Nossa reputação é construída sobre resultados consistentes e clientes
          satisfeitos. São dezenas de imóveis regularizados pelo país, inúmeros
          clientes indenizados por erro médico e demais ações de ressarcimento,
          bem como uma consultoria jurídica consistente e coesa, buscando o
          melhor resultado para o cliente.
          <br />
          <br />
          Ao escolher a CBL Consultoria, você terá um serviço personalizado,
          voltado às suas necessidades. Nosso compromisso é ouvir suas
          preocupações e metas, para assim desenvolver estratégias eficazes e
          garantir o melhor resultado possível.
        </Subtitle>
      </div>
      <C.ShowMoreButton onClick={() => setShowMore(!showMore)}>
        Mostrar {showMore ? "menos" : "mais"}
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
          style={{
            marginLeft: "10px",
            transform: showMore ? "rotate(0deg)" : "rotate(180deg)",
            transition: "all 0.3s ease-in-out",
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"
          />
        </svg>
      </C.ShowMoreButton>
    </ContentBox>
  );
};

export default VideoHistory;
