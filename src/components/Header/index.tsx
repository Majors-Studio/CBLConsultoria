"use client";

import React, { useState } from "react";
import * as C from "./styles";
import { Button } from "@/components";
import Logo from "../Logo";

const Header: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpenAccordion, setIsOpenAccordion] = useState(false);

  const handleOpenAccordion = () => {
    setIsOpenAccordion(!isOpenAccordion);
  };

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
      <div>
        {isMobile && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 relative cursor-pointer"
            onClick={handleOpenAccordion}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}

        <C.Navbar>
          {navitems.map((item, index) => {
            return <C.NavbarItem key={index}>{item}</C.NavbarItem>;
          })}
        </C.Navbar>
      </div>

      <Button text="Fale Conosco" />
    </C.Container>
  );
};

export default Header;
