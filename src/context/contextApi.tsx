import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";

interface AppContextProps {
  cardsList: {
    id: number;
    title: string;
    description: string;
  }[];
  avatarData: {
    img: string;
    name: string;
    charge: string;
  }[];
  whatList: {
    id: number;
    name: string;
    city: string;
    state: string;
    country: string;
    text: string;
    avatar: string;
  }[];
}

const AppContext = createContext<AppContextProps>({} as any);

export function AppProvider({ children }: any) {
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
  ];

  const avatarData = [
    {
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      name: "Natália de Andrade",
      charge: "CEO",
    },
    {
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      name: "Vanda Dias",
      charge: "Sócia Diretora",
    },
    {
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      name: "Luis Ferraz",
      charge: "Jurídico",
    },
    {
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      name: "Cezar Malafaia",
      charge: "Jurídico",
    },
    {
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      name: "Carlos José",
      charge: "Sócio Diretor",
    },
    {
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      name: "Carlos José",
      charge: "Sócio Diretor",
    },
    {
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      name: "Carlos José",
      charge: "Sócio Diretor",
    },
    {
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      name: "Carlos José",
      charge: "Sócio Diretor",
    },
    {
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      name: "Carlos José",
      charge: "Sócio Diretor",
    },
    {
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      name: "Carlos José",
      charge: "Sócio Diretor",
    },
  ];

  const whatList = [
    {
      id: 0,
      name: "João da Silva",
      city: "São Paulo",
      state: "SP",
      country: "Brasil",
      text: "“A Harmony me ajudou a realizar o sonho de comprar a minha casa própria. Foi tudo muito rápido e seguro, recomendo!”",
      avatar: "",
    },
    {
      id: 1,
      name: "João da Silva 2",
      city: "Rio de Janeiro",
      state: "RJ",
      country: "Brasil",
      text: "“A Harmony me ajudou a realizar o sonho de comprar a minha casa própria. Foi tudo muito rápido e seguro, recomendo!”",
      avatar: "",
    },
    {
      id: 2,
      name: "João da Silva 3",
      city: "Belo horizonte",
      state: "MG",
      country: "Brasil",
      text: "“A Harmony me ajudou a realizar o sonho de comprar a minha casa própria. Foi tudo muito rápido e seguro, recomendo!”",
      avatar: "",
    },
  ];

  const value = { cardsList, avatarData, whatList };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  return useContext(AppContext);
}
