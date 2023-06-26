import React from "react"
import * as C from "@/styles/about"
import Image from "next/image"
import { Card, CustomQuality, Subtitle, Title } from "@/components"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, A11y, Pagination,Navigation } from "swiper"

import SpeechBox from "@/components/SpeechBox"
import Avatar from "@/components/Avatar"

import governimg from "../../../public/assets/images/government.jpg"
import PurposeForm from "@/components/PurposeForm"

import { useApp } from "@/context/contextApi"
import Chart from "@/components/Chart"

const About: React.FC = () => {
  const { cardsList, avatarData } = useApp()

  const points = [
    {
      id: 0,
      name: "João da Silva",
      message:
        "Potencial de retorno financeiro significativo, uma vez que os precatórios podem ser adquiridos com descontos substanciais.",
      avatar: "https://i.pravatar.cc/300?img=1",
    },
    {
      id: 1,
      name: "Carlos Almeida",
      message:
        "Estabilidade e segurança jurídica, pois os precatórios são obrigações judiciais emitidas pelo governo, geralmente garantindo o pagamento futuro.",
      avatar: "https://i.pravatar.cc/300?img=2",
    },
    {
      id: 2,
      name: "Joana Castro",
      message:
        "Diversificação de portfólio, permitindo aos investidores mitigar riscos e aproveitar oportunidades alternativas de investimento.",
      avatar: "https://i.pravatar.cc/300?img=3",
    },
    {
      id: 3,
      name: "Maria dos Santos",
      message:
        "Possibilidade de utilização de precatórios para compensação de débitos fiscais, proporcionando benefícios fiscais adicionais.",
      avatar: "https://i.pravatar.cc/300?img=4",
    },
    {
      id: 4,
      name: "Hildo Augusto",
      message:
        "O cenário econômico atual e a expectativa de recuperação pós-pandemia tornam os precatórios uma opção atraente para investidores em busca de oportunidades lucrativas e seguras.",
      avatar: "https://i.pravatar.cc/300?img=5",
    },
  ]

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

      <C.ContainerChart>
        <C.WhatContainer>
          <C.WhatTitle>Porquê investir em precatórios?</C.WhatTitle>

          <C.WhatList>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              modules={[Autoplay, A11y]}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
            >
              {points.map((item, index) => (
                <SwiperSlide key={index}>
                  <C.WhatItem>
                    <SpeechBox text={item.message} />
                    <C.WhatTexts>
                      <Avatar src={item.avatar} size="large" />
                      <C.WhatName>{item.name}</C.WhatName>
                    </C.WhatTexts>
                  </C.WhatItem>
                </SwiperSlide>
              ))}
            </Swiper>
          </C.WhatList>
        </C.WhatContainer>
        <C.WhatTitle>
          Evolução de investimentos em precatórios{" "}
          <span style={{ fontSize: "18px" }}>(2018 - 2022)</span>
        </C.WhatTitle>

        <Chart />
      </C.ContainerChart>

      <C.SwiperContainer>
        <CustomQuality />
      </C.SwiperContainer>

      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        modules={[Autoplay, A11y, Navigation,]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={{
          
        }}
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
        <iframe
          style={{ marginBottom: "20px", marginTop: "20px" }}
          allowFullScreen
          uk-video="automute: true"
          width="70%"
          height="600px"
          src={`https://www.youtube.com/embed/aqz-KE-bpKQ?autoplay=0&controls=0&rel=1`}
        ></iframe>
      </C.VideoContainer>

      <Title text="Conheça os responsáveis pelos nossos negócios" />
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
  )
}

export default About
