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

      <Video src='https://doc-0k-1k-docs.googleusercontent.com/docs/securesc/4cfdi8tgpvu09uf724vellc6npgcb3le/bs5t79eh6qlr85mr1c392s7otrmtmq0u/1695411825000/17445386894071458295/11697229048635996574/155D_L9z5Iix00c6ofuoh9Hm3u8d3QAUJ?ax=AA75yW7biDe3chHPDM-I1f8hE3sLJzUL3w7aZHEeAQRVnwdfAfc_2ZMRKRASTQVwHAYm3h1w6KYUvl7ohYTHZkp_G62i2L858RMxOx3y3xv7-TRFJctcNqQyO_p8IdGRhEq8-EYM2Csi3UTnR83Fn3BH0PtjrOBAIHegZFqMw7a35RP2hAs5oogLlABFQklI9VB1BAAlqKqyzt02ofJQ_4FNE51AMEm1oJmkTnMW8FSfdDV-qyFDruhLTtsfgz17X5EWgRy3OWQvaEVfi1cl0BmHjGvOijIp28kBZt32kCSqe5_033Pn5FDSfCt1LOy5xVOca-9QN-NlC-aejZqlQHA6Uo7GR1av6481A4sB8pIpwR5XKAvRKULiZOI3JSX0i7xg1fOjLLl9SZZVNVR_0kKk4EixhcBfM75phMeih71XlV5dFWPB_sHLq0Vbq3BMg71c5gTMs759oiiHcExnq7XED3BZX8WYsdeIKZIzo4sJhwf_9uKfSzUMkWOaGtBWpRnF8jzDskiXx7fU1xDC3y0A-RAcsDZuyuetfr3MgSaIQvLpd7F3Ceu3FTBp6dmjEvd1JI-nZRSnHRNN8bvV0P-vpQtL3_IASvRTQl85tIZXYL-p-EWP7huIgbKnIAb7MC3phadF8MwJByKcVlbf0fD0sWlUKWaVX8Llsu-VZyI06V0enOwE7yW2YxNL-nfR9ZlTk5rLeyhK1gLToLArHivFzwTfM79ciBE8y9X-FpnRxM9pODTHIOTQsYEVvQU5uZbYjMcoCGc1WnLDFCFFAQbHrtNO7YNv1DfKvqjNiNbScTj5GV88ObHiZCCOS5eYbXmCHQ6wjVLZ5roTvMtWynzoFitztiXkXwPEKZSgdaHFgbhx0-de6hgKK3MeGzHk2CWg6A&uuid=b41d9c14-777b-40a2-84f4-2c0667b6a57f&authuser=0&nonce=5jf63t2s5bnnq&user=11697229048635996574&hash=sbj16kssmrt31pgaf3tgqpdkjolfh9g8'/>

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
