'use client'

import MagnifyingGlass from "@/assets/icons/MagnifyingIcon"
import { newsTextMock } from "./newsTextMock"
import { ListIcon, MoneyIcon } from "@/assets/icons"
import ContractIcon from "@/assets/icons/ContractIcon"

export const userList: {
  id: number
  name: string
  city: string
  state: string
  country: string
  text: string
  avatar: string
}[] = [
  {
    id: 0,
    name: "João da Silva",
    city: "São Paulo",
    state: "SP",
    country: "Brasil",
    text: "“A Harmony me ajudou a realizar o sonho de comprar a minha casa própria. Foi tudo muito rápido e seguro, recomendo!”",
    avatar:
      "   /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1633332755192-727a05c4013d%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D60&w=128&q=75",
  },
]

export const newsList: {
  id: number
  image: string
  title: string
  date: Date
  author: string
  text: string
  source: string
  link: string
}[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJsb2d8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    title:
      "Precatórios Sob a Perspectiva dos Grandres Mestres: Aprendendo com Graham, Fisher e Lynch",
    date: new Date(),
    author: "João da Silva",
    text: newsTextMock,
    source: "Google",
    link: "https://www.google.com",
  },
]

export const avatarData: {
  img: string
  name: string
  charge: string
}[] = [
  {
    img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    name: "Natália de Andrade",
    charge: "CEO",
  },
]

export const qualityList: {
  id: number
  img: string
  title: string
  subtitle: string
}[] = [
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
]

export const cardsList: {
  id: number
  title: string
  description: string
}[] = [
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

  export const whyToSellList: {
    id: number
    text: React.ReactNode
  }[] = [
    {
      id: 0,
      text: (
        <>
          <strong>
            Os pagamentos não são realizados no prazo pelo poder público.
          </strong>{" "}
          A data de pagamento muda o tempo todo, portanto a fila de credores só
          aumenta.
        </>
      ),
    },
    {
      id: 1,
      text: (
        <>
          Liquidez: Receber rapidamente e à vista.{" "}
          <strong>Dinheiro na conta sem burocracia.</strong>
        </>
      ),
    },
    {
      id: 2,
      text: (
        <>
          <strong>Não faça dívidas com juros abusivos</strong>, a venda do
          precatório é a melhor opção para retomar sua saúde financeira.
        </>
      ),
    },
    {
      id: 3,
      text: (
        <>
          Acabe com a incerteza de recebimento,{" "}
          <strong>venda com segurança jurídica e financeira.</strong>
        </>
      ),
    },
  ]

  export const stepsList: {
    id: number
    title: string
    text: React.ReactNode
    icon: React.ReactNode
  }[] = [
    {
      id: 0,
      title: "Análise do seu precatório",
      text: (
        <>
          Nosso time jurídico faz uma análise criteriosa do processo judicial do
          seu precatório para garantir <strong>segurança e transparência</strong> em
          todo o processo de compra.
        </>
      ),
      icon: <MagnifyingGlass />,
    },
    {
      id: 1,
      title: "Proposta de Valor",
      text: (
        <>Oferecemos o melhor valor do mercado com propostas éticas e justas.</>
      ),
      icon: <ListIcon />,
    },
    {
      id: 2,
      title: "Assinatura do Contrato",
      text: (
        <>
          Após o aceite da proposta, <strong>assinamos o contrato</strong> de venda{" "}
          <strong>no cartório</strong>, seguindo todas as obrigações legais, de
          forma <strong>rápida e segura</strong>.
        </>
      ),
      icon: <ContractIcon />,
    },
    {
      id: 3,
      title: "Pagamento no ato da assinatura",
      text: (
        <>
          À vista e sem burocracia direto na sua conta.{" "}
          <strong>O dinheiro é creditado em conta no momento da assinatura</strong>{" "}
          e o comprovante de transferência entregue ao credor.
        </>
      ),
      icon: <MoneyIcon />,
    },
  ]