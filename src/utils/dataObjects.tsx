"use client"
import { ListIcon, MagnifyingIcon, MoneyIcon, NewsIcon } from "@/assets/icons"
import { newsTextMock } from "./newsTextMock"
import ContractIcon from "@/assets/icons/ContractIcon"
import bannerImg1 from "@/assets/jpg/banner-1.jpg"
import bannerImg2 from "@/assets/jpg/banner-2.jpg"
import bannerImg3 from "@/assets/jpg/banner-3.jpg"
import Image, { StaticImageData } from "next/image"

import caue from "@/assets/jpg/caue_1_copy.jpg"

export const feedbackList: {
  id: number
  name: string
  city: string
  state: string
  country: string
  text: string
  avatar: StaticImageData
}[] = [
  {
    id: 0,
    name: "Cauê Blasiolli",
    city: "São Paulo",
    state: "SP",
    country: "Brasil",
    text: "“A CBL Consultoria me ajudou a realizar o sonho de comprar a minha casa própria. Foi tudo muito rápido e seguro, recomendo!”",
    avatar: caue,
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
    id: 0,
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
  {
    id: 2,
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
  {
    id: 3,
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
  {
    id: 4,
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
  {
    id: 5,
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
  {
    id: 6,
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
  img: StaticImageData
  name: string
  charge: string
}[] = [
  {
    img: caue,
    name: "Caue Blasiolli",
    charge: "Coordinator",
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
      "Nossa equipe está pronta para oferecer suporte especializado, com atendimento artesanal e especializado em todas as etapas do serviço prestado.",
  },
  {
    id: 3,
    img: "https://svgsilh.com/svg_v2/1414791.svg",
    title: "Credibilidade",
    subtitle:
      "Com anos de experiência no mercado, somos uma das maiores consultorias especializadas em nossas áreas de atuação em todo o Brasil",
  },
  {
    id: 4,
    img: "https://svgsilh.com/svg/47878.svg",
    title: "Agilidade ",
    subtitle:
      "Nossa equipe altamente qualificada está preparada para agir rapidamente, utilizando metodologias eficientes e tecnologias avançadas.",
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
        seu precatório para garantir <b>segurança e transparência</b>{" "}
        em todo o processo de compra.
      </>
    ),
    icon: <MagnifyingIcon />,
  },
  {
    id: 1,
    title: "Proposta de Valor",
    text: (
      <>
        Intermediamos negócios jurídicos para o oferecimento do melhor valor do
        mercado com propostas éticas e justas
      </>
    ),
    icon: <ListIcon />,
  },
  {
    id: 2,
    title: "Assinatura do Contrato",
    text: (
      <>
        Após o aceite da proposta, <b>assinamos o contrato</b> de
        venda <b>no cartório</b>, seguindo todas as obrigações legais,
        de forma <b>rápida e segura</b>.
      </>
    ),
    icon: <ContractIcon />,
  },
  {
    id: 3,
    title: "Pagamento no ato da assinatura",
    text: (
      <>
        Trabalhamos na análise de contratos e negociações somente com o
        pagamento à vista e sem burocracia.
      </>
    ),
    icon: <MoneyIcon />,
  },
]

export const bannerList: {
  img: any
  title: string
}[] = [
  {
    title: "Transformando desafios em oportunidades",
    img: bannerImg1,
  },
  {
    title: "Construindo um futuro mais justo",
    img: bannerImg2,
  },
  {
    title: "Juntos, transformamos realidades.",
    img: bannerImg3,
  },
]

export const civelList: {
  id: number
  title: string
}[] = [
  {
    id: 0,
    title: "Conhecimento Especializado",
  },
  {
    id: 1,
    title: "Análise do caso",
  },
  {
    id: 2,
    title: "Representação Efetiva",
  },
  {
    id: 3,
    title: "Estratégias personalizadas",
  },
]

export const infoList: {
  id: number
  title: string
}[] = [
  {
    id: 0,
    title: "Recebimento à vista",
  },
  {
    id: 1,
    title: "Agilidade na venda",
  },
  {
    id: 2,
    title: "Segurança e Suporte 24hrs",
  },
  {
    id: 3,
    title: "Vasta experiência no mercado",
  },
]

export const cardList: {
  id: number
  title: string
  description: string
  icon: React.ReactNode
}[] = [
  {
    id: 0,
    title: "Análise",
    description:
      "Nossos advogados analisam detalhadamente o processo judicial do seu precatório de forma rápida e segura;",
    icon: <MagnifyingIcon />,
  },
  {
    id: 1,
    title: "Proposta",
    description:
      "Enviamos a melhor proposta do mercado e esclarecemos todas as suas dúvidas com total transparência e segurança;",
    icon: <NewsIcon />,
  },
  {
    id: 2,
    title: "Formalização",
    description:
      "Análise da documentação e agendamento da sessão no cartório mais próximo de você, te acompanharemos presencialmente;",
    icon: <ListIcon />,
  },
  {
    id: 3,
    title: "Recebimento",
    description:
      "Contrato assinado e o dinheiro na sua conta, você recebe à vista e sem burocracia;",
    icon: <MoneyIcon />,
  },
]

export const chooseList: {
  id: number
  title: string
  list: {
    id: number
    text: string
    status: string
  }[]
}[] = [
  {
    id: 0,
    title: "Esperar o Governo pagar o precatório",
    list: [
      {
        id: 0,
        text: "Demora de anos para receber;",
        status: "danger",
      },
      {
        id: 1,
        text: "Aguardar uma fila de espera enorme;",
        status: "danger",
      },
      {
        id: 2,
        text: "Estresse, raiva e preocupação;",
        status: "danger",
      },
      {
        id: 3,
        text: "Notícias de calote e parcelamento",
        status: "danger",
      },
    ],
  },
  {
    id: 1,
    title: "Antecipar o recebimento do precatório",
    list: [
      {
        id: 0,
        text: "Pagamento à vista na sua conta bancária;",
        status: "success",
      },
      {
        id: 1,
        text: "Agilidade e segurança jurídica;",
        status: "success",
      },
      {
        id: 2,
        text: "Ajuda na realização de sonhos;",
        status: "success",
      },
      {
        id: 3,
        text: "Liberdade para usufruir do seu dinheiro",
        status: "success",
      },
    ],
  },
]

export const whyList: {
  id: number
  title: string
  description: string
  icon: React.ReactNode
}[] = [
  {
    id: 0,
    title: "Atendimento Personalizado",
    description:
      "A CBL se diferencia por realizar uma prestação de serviço artesanal. Não trabalhamos com processos de massa. Cada caso é único, e nossos advogados não trabalham com modelos, com cada peça processual sendo confeccionada especificamente para a necessidade do cliente.",
    icon: (
      <>
        <Image
          width={55}
          height={55}
          alt="atendimento"
          src="https://cdn-icons-png.flaticon.com/512/0/769.png"
        />
      </>
    ),
  },
  {
    id: 1,
    title: "Vasta experiência no mercado",
    description:
      "Ao longo da nossa história, foram centenas de clientes satisfeitos com a antecipação de seus precatórios",
    icon: (
      <>
        <Image
          width={55}
          height={55}
          src="https://cdn-icons-png.flaticon.com/512/4947/4947118.png"
          alt="money"
        />
      </>
    ),
  },
  {
    id: 2,
    title: "Segurança acadêmica",
    description:
      "Nossos advogados são graduados e pós-graduados nas melhores universidades do país, com nota máxima no MEC, e reconhecidas pela comunidade científica",
    icon: (
      <>
        <Image
          width={55}
          height={55}
          alt="seguranca"
          src="https://cdn-icons-png.flaticon.com/512/159/159448.png"
        />
      </>
    ),
  },
  {
    id: 3,
    title: "Especialização na prestação de serviços",
    description:
      "Em um mundo jurídico dinâmico, vasto e contemporâneo, é preciso estar atento às inovações nas esferas nacionais e internacionais inerentes a atuação do operador do direito. Por isso, é de suma importância contar com profissionais especializados. A CBL apenas trabalha com causas relacionadas às suas áreas de atuação e conta com um time altamente qualificado de forma a trazer o melhor desempenho e resultados ao cliente",
    icon: (
      <>
        <Image
          width={55}
          height={55}
          src="https://cdn.icon-icons.com/icons2/37/PNG/512/cardpayment_tarjet_3771.png"
          alt="pgto. a vista"
        />
      </>
    ),
  },
]

export const faqList: {
  id: number
  title: string
  description: string
}[] = [
  {
    id: 0,
    title: "Cuidado com golpes.",
    description:
      "Infelizmente há uma verdadeira epidemia de golpes, e os criminosos também praticam GOLPES com precatórios. Certifique que estão falando com você de fato, ligação em vídeo e visitas presenciais são sempre muito bem vindas. Caso esteja desconfiado, opte por um cartório de sua confiança. Para saber os GOLPES mais comuns, acompanham nossas dicas nas mídias sociais.",
  },
  {
    id: 1,
    title: "Quanto irei receber pela venda do precatório?",
    description:
      "Depende. A proposta é feita de acordo com cada caso levando em consideração inúmeras variáveis, como análise precedente e atual da Lei Orçamentária Anual (LOA), conjuntura macroeconômica, situação processual, entre outras.",
  },
  {
    id: 2,
    title: "Tenho um precatório. Preciso esperar anos para receber?",
    description:
      "Não. O tempo de espera para recebimento dos valores dos precatórios variam de acordo com cada ente federativo (União, Estados e Municípios) e respectivas entidades da administração indireta sujeitas ao regime. Este tempo pode demorar anos e, por vezes, até décadas. Portanto, a venda de seu precatório pode trazer o benefício do recebimento imediato dos valores, de acordo com a proposta feita.",
  },
  {
    id: 3,
    title: "Como terei segurança de que receberei o dinheiro?",
    description:
      "Todos os instrumentos de Cessão vem com cláusula de multa para atraso no pagamento, e se preferirem, tudo pode ser feito presencialmente no cartório, embora exista a possibilidade de se fazer online. A CBL atua na confecção e acompanhamento do negócio jurídico, analisando e validando a documentação para que o cliente tenha segurança jurídica, recebimento célere e eficiente.",
  },
  {
    id: 4,
    title:
      "Sou herdeiro(a). Recebi um precatório como parte da herança. Posso vender?",
    description:
      "Sim. Os herdeiros são detentores dos direitos creditórios, assim como são dos demais bens, de forma que podem, se assim quiserem, vender o precatório.",
  },
  {
    id: 5,
    title: "Qual benefício tenho em vender meu precatório?",
    description:
      "O primeiro é o recebimento imediato dos valores. Em segundo plano, apesar de ser uma análise individual, o recebimento rápido de valores pode te livrar de juros relacionados a outros contratos, proporcionando um custo-benefício econômico ao credor. Terceiro, você não precisa mais se preocupar com o processo ou advogados, cuidamos de tudo.",
  },
]
