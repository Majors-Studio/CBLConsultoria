"use client"

import React, { useState } from "react"
import * as C from "./styles"
import { Button } from "@/components"
import Logo from "../Logo"
import { useDevice } from "@/hooks/useDevice"

const Header: React.FC = () => {
  const { isMobile } = useDevice()
  const [isOpenAccordion, setIsOpenAccordion] = useState(false)

  const handleOpenAccordion = () => {
    setIsOpenAccordion(!isOpenAccordion)
  }

  const navitems = [
    "Início",
    "Cenário dos Precatórios",
    "Sobre Nós",
    "Contato",
    "Notícias",
  ]
  return (
    <C.Container>
      <C.Content>
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
            return <C.NavbarItem key={index}>{item}</C.NavbarItem>
          })}
        </C.Navbar>
      </div>

        <Button text="Fale Conosco" />
      </C.Content>
        
    </C.Container>
  )
}

export default Header
