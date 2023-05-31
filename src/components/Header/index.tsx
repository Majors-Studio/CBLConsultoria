"use client";

import React, { useState } from "react";
import * as C from "./styles";
import { Button } from "@/components";
import Logo from "../Logo";
// import { Container } from './styles';

const Header: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  //  se o tamanho da tela for menor que 768px, seta o estado de isMobile para true

  if (typeof window !== "undefined") {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });
  }

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
      {isMobile && (
        <C.Hamburger>
          <C.HamburgerItem />
          <C.HamburgerItem />
          <C.HamburgerItem />
        </C.Hamburger>
      )}
      <C.Navbar>
        {navitems.map((item, index) => {
          return <C.NavbarItem key={index}>{item}</C.NavbarItem>;
        })}
      </C.Navbar>
      <Button text="Fale Conosco" />
    </C.Container>
  );
};

export default Header;
