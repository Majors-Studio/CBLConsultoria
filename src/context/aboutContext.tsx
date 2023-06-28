import { ListIcon, MagnifyingIcon, MoneyIcon, NewsIcon } from "@/assets/icons"
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react"

interface AboutContextProps {
  cardsList: {
    id: number
    title: string
    description: string
  }[]
  avatarData: {
    img: string
    name: string
    charge: string
  }[]
  
  qualityList: {
    id: number
    img: string
    title: string
    subtitle: string
  }[]
}

const AboutContext = createContext<AboutContextProps>({} as any)

export function AboutProvider({ children }: any) {
  const cardsList = [
    {
      id: 0,
      title: "Início da nossa trajetória de sucesso",
      description:
        "Em 2009, demos nossos primeiros passos, dando início de um compromisso de excelência.",
    },
    {
      id: 1,
      title: "Profissionais especializados",
      description:
        "Nossa equipe é formada por profissionais especializados em precatórios, com mais de 10 anos de experiência no mercado.",
    },
    {
      id: 2,
      title: "Mais de R$ 1 bilhão negociados",
      description:
        "Já negociamos mais de R$ 1 bilhão em precatórios e contamos com a satisfação de mais de 7 mil clientes.",
    },
  ]

  const avatarData = [
    {
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      name: "Natália de Andrade",
      charge: "CEO",
    },
  ]
  
  const qualityList = [
    {
      id: 1,
      img: "https://svgsilh.com/svg_v2/154684.svg",
      title: "Transparência e segurança",
      subtitle:
        "Garantimos a proteção dos seus dados e mantemos uma comunicação clara em todas as etapas. Sua confiança é nossa prioridade.",
    },
    {
      id: 2,
      img: "https://svgsilh.com/svg/2029303.svg",
      title: "Atendimento personalizado",
      subtitle:
        "Nossa equipe está pronta para oferecer suporte especializado em todas as etapas da negociação do seu precatório.",
    },
    {
      id: 3,
      img: "https://svgsilh.com/svg_v2/1414791.svg",
      title: "Credibilidade",
      subtitle:
        "Somos a maior empresa especializada na antecipação de precatórios em todo o Brasil, já negociamos mais de R$ 1 bilhão em precatórios para mais de 7 mil clientes",
    },
  ];
  
  for (let i = 0;i < 5;i++) {
    avatarData.push(avatarData[0])
  }

  const value = { cardsList, avatarData,qualityList }

  return <AboutContext.Provider value={value}>{children}</AboutContext.Provider>
}

export function useAbout() {
  return useContext(AboutContext)
}
