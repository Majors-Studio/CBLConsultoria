"use client";

import React from "react";
import * as C from "./styles";
import { Button } from "@/components";
// import { Container } from './styles';

const Header: React.FC = () => {
  const navitems = [
    "Início",
    "Cenário dos Precatórios",
    "Sobre Nós",
    "Contato",
    "Notícias",
  ];
  return (
    <C.Container>
      <C.Logo src="https://images.unsplash.com/photo-1685371863623-effd71822cf2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=1000&q=60" />
      <C.Navbar>
        {navitems.map((item, index) => {
          return <C.NavbarItem key={index}>{item}</C.NavbarItem>;
        })}
      </C.Navbar>
      <Button text="Fale conosco" />
    </C.Container>
  );
};

export default Header;
