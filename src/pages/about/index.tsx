import React from "react"
import * as C from "@/styles/about"
import Image from "next/image"
import { Card, CustomQuality, Title } from "@/components"
import PurposeForm from "@/components/PurposeForm"
import { useAbout } from "@/context/aboutContext"
import Video from "@/components/Video"
import HeadBanner from "@/components/HeadBanner"

const About: React.FC = () => {
  const { cardsList, avatarData, qualityList } = useAbout()

  return (
    <C.Container>
      <HeadBanner title="Sobre Nós" />

      <C.SwiperContainer>
        <CustomQuality data={qualityList} />
      </C.SwiperContainer>

      <C.CardsContainer>
        {cardsList.map((card, index) => (
          <Card
            key={index}
            index={card.id}
            title={card.title}
            description={card.description}
          />
        ))}
      </C.CardsContainer>

      <C.VideoContainer>
        <Title>Fique mais por dentro do nosso trabalho</Title>
        <C.AboutText>
          A CBL Consultoria possui vasta experiência no mercado e conta com
          profissionais capacitados para atender, de forma individualizada, a
          necessidade do cliente. O fato de não atuar com demandas de massa
          permite a CBL Consultoria desempenhar sempre o melhor atendimento ao
          cliente, de forma personalizada e eficaz, priorizando a agilidade,
          segurança e eficácia na proteção do seu patrimônio Nossa equipe é
          composta por profissionais graduados nas melhores universidades do
          Estado de São Paulo e atua tanto na área consultiva quanto
          contenciosa.
        </C.AboutText>

        <Video />

        <C.AboutText>
          Sua busca por uma consultoria jurídica confiável e experiente em
          precatórios chegou ao fim. Apresentamos a CBL Consultoria, uma empresa
          especializada no mercado, com vasta experiência. Fundada justamente
          pela percepção das dificuldades enfrentadas na venda de precatórios,
          nossa missão é oferecer segurança e qualidade em todos os aspectos do
          processo. Nossa equipe de consultores jurídicos altamente qualificados
          está pronta para guiar você de forma assertiva e transparente. Com
          conhecimento atualizado sobre as leis, regulamentos e jurisprudências
          mais recentes, proporcionamos orientação precisa para sua situação
          específica. Seja você um indivíduo, empresa ou instituição, temos a
          expertise necessária para lidar com todas as complexidades legais
          envolvidas. Já auxiliamos inúmeras pessoas e empresas a venderem seus
          precatórios com sucesso, obtendo o retorno financeiro esperado. Se
          você enfrenta dificuldades na venda de precatórios e busca uma
          consultoria jurídica confiável, segura e comprovada, não hesite em
          contar com a CBL Consultoria. Estamos aqui para proporcionar
          tranquilidade e garantir o sucesso em suas negociações. Nossa
          reputação é construída sobre resultados consistentes e clientes
          satisfeitos. São dezenas de imóveis regularizados pelo país, inúmeros
          clientes indenizados por erro médico e demais ações de ressarcimento,
          bem como uma consultoria jurídica consistente e coesa, buscando o
          melhor resultado para o cliente. Ao escolher a CBL Consultoria, você
          terá um serviço personalizado, voltado às suas necessidades. Nosso
          compromisso é ouvir suas preocupações e metas, para assim desenvolver
          estratégias eficazes e garantir o melhor resultado possível. CBL
          Consultoria - A sua segurança e qualidade na venda de precatórios!
          Deixe-nos ajudá-lo(a) a superar os desafios e alcançar o sucesso
          desejado. Juntos, iremos além!
        </C.AboutText>
      </C.VideoContainer>

      <C.AvatarsContainer>
        <Title
          variant="tertiary"
        >Conheça os responsáveis pelos nossos negócios</Title>
        {avatarData.map((avatar, index) => (
          <C.Info key={index}>
            <C.AvatarCharge>{avatar.charge}</C.AvatarCharge>
            <Image
              src={avatar.img}
              alt="avatar"
              style={{ borderRadius: "505%" }}
              width={60}
              height={60}
            />
            <C.AvatarName>{avatar.name}</C.AvatarName>
          </C.Info>
        ))}
      </C.AvatarsContainer>

      <C.FormContainer>
        <PurposeForm />
      </C.FormContainer>
    </C.Container>
  )
}

export default About
