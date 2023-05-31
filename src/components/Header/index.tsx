"use client";

import React from "react";
import * as C from "./styles";
import { Button } from "@/components";
import Logo from "../Logo"
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
      <Logo />
      <C.Navbar>
        {navitems.map((item, index) => {
          return <C.NavbarItem key={index}>{item}</C.NavbarItem>;
        })}
      </C.Navbar>
      <Button text="Entre em contato!" />
    </C.Container>
  );
};

export default Header;
