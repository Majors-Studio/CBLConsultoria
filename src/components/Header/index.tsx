"use client";

import React from "react";
import * as C from "./styles";
import { Button } from "@/components";
// import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <C.Container>
      <C.Logo src="https://images.unsplash.com/photo-1685371863623-effd71822cf2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=1000&q=60" />
      <C.Navbar>
        <C.NavbarItem>Início</C.NavbarItem>
        <C.NavbarItem>Cenário dos Precatórios</C.NavbarItem>
        <C.NavbarItem>Sobre Nós</C.NavbarItem>
        <C.NavbarItem>Contato</C.NavbarItem>
        <C.NavbarItem>Notícias</C.NavbarItem>
      </C.Navbar>
      <Button text="Fale conosco" />
    </C.Container>
  );
};

export default Header;
