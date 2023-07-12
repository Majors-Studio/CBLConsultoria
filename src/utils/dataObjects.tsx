"use client";
import { ListIcon, MagnifyingIcon, MoneyIcon, NewsIcon } from "@/assets/icons";
import { newsTextMock } from "./newsTextMock";
import ContractIcon from "@/assets/icons/ContractIcon";
import bannerImg1 from "@/assets/png/banner-1.png";  
import bannerImg2 from "@/assets/png/banner-2.png";
import bannerImg3 from "@/assets/png/banner-3.png";
import bannerImg4 from "@/assets/png/banner-4.png";
import bannerImg5 from "@/assets/png/banner-5.png";

export const feedbackList: {
  id: number;
  name: string;
  city: string;
  state: string;
  country: string;
  text: string;
  avatar: string;
}[] = [
  {
    id: 0,
    name: "João da Silva",
    city: "São Paulo",
    state: "SP",
    country: "Brasil",
    text: "“A CBL Consultoria me ajudou a realizar o sonho de comprar a minha casa própria. Foi tudo muito rápido e seguro, recomendo!”",
    avatar:
      "   /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1633332755192-727a05c4013d%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D60&w=128&q=75",
  },
];

export const newsList: {
  id: number;
  image: string;
  title: string;
  date: Date;
  author: string;
  text: string;
  source: string;
  link: string;
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
];

export const avatarData: {
  img: string;
  name: string;
  charge: string;
}[] = [
  {
    img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    name: "Caue Blasiolli",
    charge: "Coordinator",
  },
];

export const qualityList: {
  id: number;
  img: string;
  title: string;
  subtitle: string;
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
  // {
  //   id: 3,
  //   img: "https://svgsilh.com/svg_v2/1414791.svg",
  //   title: "Credibilidade",
  //   subtitle:
  //     "Somos a maior empresa especializada na antecipação de precatórios em todo o Brasil, já negociamos mais de R$ 1 bilhão em precatórios para mais de 7 mil clientes",
  // },
  {
    id: 3,
    img: "https://svgsilh.com/svg_v2/1414791.svg",
    title: "Agilidade e eficiência na negociação",
    subtitle:
      "Nossa equipe altamente qualificada está preparada para agir rapidamente, utilizando metodologias eficientes e tecnologias avançadas.",
  },
];

export const cardsList: {
  id: number;
  title: string;
  description: string;
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
];

export const whyToSellList: {
  id: number;
  text: React.ReactNode;
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
];

export const stepsList: {
  id: number;
  title: string;
  text: React.ReactNode;
  icon: React.ReactNode;
}[] = [
  {
    id: 0,
    title: "Análise do seu precatório",
    text: (
      <>
        Nosso time jurídico faz uma análise criteriosa do processo judicial do
        seu precatório para garantir <strong>segurança e transparência</strong>{" "}
        em todo o processo de compra.
      </>
    ),
    icon: <MagnifyingIcon />,
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
        Após o aceite da proposta, <strong>assinamos o contrato</strong> de
        venda <strong>no cartório</strong>, seguindo todas as obrigações legais,
        de forma <strong>rápida e segura</strong>.
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
        <strong>
          O dinheiro é creditado em conta no momento da assinatura
        </strong>{" "}
        e o comprovante de transferência entregue ao credor.
      </>
    ),
    icon: <MoneyIcon />,
  },
];

export const bannerList: {
  img: any ;
}[] = [
  {
    img: bannerImg1,
  },
  {
    img: bannerImg2,
  },
  {
    img: bannerImg3,
  },
  {
    img: bannerImg4,
  },
  {
    img: bannerImg5,
  },
];

export const civelList: {
  id: number;
  title: string;
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
];

export const infoList: {
  id: number;
  title: string;
}[] = [
  {
    id: 0,
    title: "Foco em resutados",
  },
  {
    id: 1,
    title: "Atendimento Personalizado",
  },
  {
    id: 2,
    title: "Segurança e Suporte 24hrs",
  },
  {
    id: 3,
    title: "Vasta experiência no mercado",
  },
];

export const cardList: {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
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
];

export const chooseList: {
  id: number;
  title: string;
  list: {
    id: number;
    text: string;
    status: string;
  }[];
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
];

export const whyList: {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}[] = [
  {
    id: 0,
    title: "Atendimento Personalizado",
    description:
      "Nós cuidamos para que o processo de negociação seja 100% seguro e transparente, desde a análise até o recebimento do seu precatório.",
    icon: (
      <>
        <img src="https://cdn-icons-png.flaticon.com/512/0/769.png" />
      </>
    ),
  },
  {
    id: 1,
    title: "1 bilhão em precatórios negociados",
    description:
      "Ao longo da nossa história, foram mais de 7 mil credores satisfeitos com a antecipação de seus precatórios",
    icon: (
      <>
        <img
          src="https://cdn-icons-png.flaticon.com/512/4947/4947118.png"
          alt="money"
        />
      </>
    ),
  },
  {
    id: 2,
    title: "Total segurança na negociação",
    description:
      "Empresa consolidada, com mais de uma década no mercado de precatórios.",
    icon: (
      <>
        <img src="https://cdn-icons-png.flaticon.com/512/159/159448.png" />
      </>
    ),
  },
  {
    id: 3,
    title: "Pagamento à vista",
    description:
      "O pagamento da antecipação do seu precatório é feito à vista, no ato da formalização em cartório de notas da sua cidade.",
    icon: (
      <>
        <img
          src="https://cdn.icon-icons.com/icons2/37/PNG/512/cardpayment_tarjet_3771.png"
          alt="pgto. a vista"
        />
      </>
    ),
  },
];

export const faqList: {
  id: number;
  title: string;
  description: string;
}[] = [
  {
    id: 0,
    title: "Como funciona a antecipação de precatórios?",
    description:
      "A antecipação de precatórios é uma operação financeira que consiste na compra de precatórios federais, estaduais e municipais. A CBL Consultoria realiza a compra do seu precatório e você recebe o valor à vista, sem burocracia e sem esperar anos para receber do Governo.",
  },
  {
    id: 1,
    title: "Quais são os tipos de precatórios?",
    description:
      "Precatórios Federais: são os precatórios emitidos pela União, autarquias e fundações públicas federais. Precatórios Estaduais: são os precatórios emitidos pelos Estados e Distrito Federal. Precatórios Municipais: são os precatórios emitidos pelos Municípios.",
  },
  {
    id: 2,
    title: "Quais são os tipos de precatórios?",
    description:
      "Precatórios Federais: são os precatórios emitidos pela União, autarquias e fundações públicas federais. Precatórios Estaduais: são os precatórios emitidos pelos Estados e Distrito Federal. Precatórios Municipais: são os precatórios emitidos pelos Municípios.",
  },
  {
    id: 3,
    title: "Quais são os tipos de precatórios?",
    description:
      "Precatórios Federais: são os precatórios emitidos pela União, autarquias e fundações públicas federais. Precatórios Estaduais: são os precatórios emitidos pelos Estados e Distrito Federal. Precatórios Municipais: são os precatórios emitidos pelos Municípios.",
  },
];
