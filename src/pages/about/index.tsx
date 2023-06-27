import React from "react";
import * as C from "@/styles/about";
import Image from "next/image";
import { Card, CustomQuality, Subtitle, Title } from "@/components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y, Pagination, Navigation } from "swiper";
import governimg from "../../../public/assets/images/government.jpg";
import PurposeForm from "@/components/PurposeForm";
import { useApp } from "@/context/contextApi";

const About: React.FC = () => {
  const { cardsList, avatarData } = useApp();

  return (
    <C.Container>
      <C.ContainerImg>
        <Image
          style={{
            position: "relative",
            height: "200px",
            objectFit: "cover",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          src={governimg}
          alt="bg"
        />
        <C.Overlay />
        <Title
          color="#fff"
          top="50%"
          fontWeight="bold"
          fontSize="40px"
          left="50%"
          transform="translate(-50%, -50%)"
          position="absolute"
          text="Sobre nós"
        />
      </C.ContainerImg>

      <C.SwiperContainer>
        <CustomQuality />
      </C.SwiperContainer>

      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        modules={[Autoplay, A11y, Navigation]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={{}}
        style={{
          width: "100%",
          margin: "0 auto",
          height: "100%",
        }}
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {cardsList.map((card) => (
          <SwiperSlide
            key={card.id}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card
              index={card.id}
              title={card.title}
              description={card.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <C.VideoContainer>
        <Title
          fontSize="32px"
          fontWeight="500"
          color="#000"
          text="Fique mais por dentro do nosso trabalho"
          marginBottom="20px"
          marginTop="20px"
        />
        <C.AboutText>
          {" "}
          A CBL Consultoria possui vasta experiência no mercado e conta com
          profissionais capacitados para atender, de forma individualizada, a
          necessidade do cliente. O fato de não atuar com demandas de massa
          permite a CBL Consultoria desempenhar sempre o melhor atendimento ao
          cliente, de forma personalizada e eficaz, priorizando a agilidade,
          segurança e eficácia na proteção do seu patrimônio Nossa equipe é
          composta por profissionais graduados nas melhores universidades do
          Estado de São Paulo e atua tanto na área consultiva quanto
          contenciosa."
        </C.AboutText>
        <iframe
          style={{ marginBottom: "20px", marginTop: "20px" }}
          allowFullScreen
          uk-video="automute: true"
          width="70%"
          height="600px"
          src={`https://www.youtube.com/embed/aqz-KE-bpKQ?autoplay=0&controls=0&rel=1`}
        ></iframe>
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

      <Title
        color="#000"
        text="Conheça os responsáveis pelos nossos negócios"
      />
      <C.AvatarsContainer>
        {avatarData.map((avatar, index) => (
          <C.Info key={index}>
            <Image
              src={avatar.img}
              alt="avatar"
              style={{ borderRadius: "505%" }}
              width={60}
              height={60}
            />
            <C.AvatarName>{avatar.name}</C.AvatarName>
            <C.AvatarCharge>{avatar.charge}</C.AvatarCharge>
          </C.Info>
        ))}
      </C.AvatarsContainer>

      <C.FormContainer>
        <Image src={governimg} width={750} alt="image" />
        <PurposeForm />
      </C.FormContainer>
    </C.Container>
  );
};

export default About;
