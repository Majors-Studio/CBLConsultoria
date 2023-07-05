import { ListIcon, MagnifyingIcon, MoneyIcon, NewsIcon } from "@/assets/icons";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";

interface HomeContextProps {
  infoList: {
    id: number;
    title: string;
  }[];
  cardList: {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
  chooseList: {
    id: number;
    title: string;
    list: {
      id: number;
      text: string;
      status: string;
    }[];
  }[];
  whyList: {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
  faqList: {
    id: number;
    title: string;
    description: string;
  }[];
  blogList: {
    id: number;
    title: string;
    image: string;
  }[];
  bannerList: {
    img: string;
  }[];
}

const HomeContext = createContext<HomeContextProps>({} as any);

export function HomeProvider({ children }: any) {
  const bannerList = [
    {
      img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    },
    {
      img: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    },
    {
      img: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    }
  ]


  const infoList = [
    {
      id: 0,
      title: "Recebimento à vista;",
    },
    {
      id: 1,
      title: "Agilidade na venda;",
    },
    {
      id: 2,
      title: "Segurança e Suporte 24hrs;",
    },
    {
      id: 3,
      title: "Vasta experiência no mercado",
    },
  ];

  const cardList = [
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

  const chooseList = [
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

  const whyList = [
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

  const faqList = [
    {
      id: 0,
      title: "Como funciona a antecipação de precatórios?",
      description:
        "A antecipação de precatórios é uma operação financeira que consiste na compra de precatórios federais, estaduais e municipais. A Harmony realiza a compra do seu precatório e você recebe o valor à vista, sem burocracia e sem esperar anos para receber do Governo.",
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

  const blogList = [
    {
      id: 1,
      title: "Como funciona a antecipação de precatórios?",
      image:
        "https://images.unsplash.com/photo-1549923746-c502d488b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    },
    {
      id: 2,
      title: "Como funciona a antecipação de precatórios?",
      image:
        "https://images.unsplash.com/photo-1549923746-c502d488b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    },
    {
      id: 3,
      title: "Como funciona a antecipação de precatórios?",
      image:
        "https://images.unsplash.com/photo-1549923746-c502d488b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    },
    {
      id: 4,
      title: "Como funciona a antecipação de precatórios?",
      image:
        "https://images.unsplash.com/photo-1549923746-c502d488b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    },
    {
      id: 5,
      title: "Como funciona a antecipação de precatórios?",
      image:
        "https://images.unsplash.com/photo-1549923746-c502d488b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    },
    {
      id: 6,
      title: "Como funciona a antecipação de precatórios?",
      image:
        "https://images.unsplash.com/photo-1549923746-c502d488b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    },
    {
      id: 6,
      title: "Como funciona a antecipação de precatórios?",
      image:
        "https://images.unsplash.com/photo-1549923746-c502d488b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    },
    {
      id: 6,
      title: "Como funciona a antecipação de precatórios?",
      image:
        "https://images.unsplash.com/photo-1549923746-c502d488b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    },
    {
      id: 6,
      title: "Como funciona a antecipação de precatórios?",
      image:
        "https://images.unsplash.com/photo-1549923746-c502d488b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    },
  ];

  const value = {
    infoList,
    cardList,
    chooseList,
    whyList,
    faqList,
    blogList,
    bannerList
  };

  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
}

export function useHome() {
  return useContext(HomeContext);
}
