"use client"

import React, { useEffect, useState } from "react"
import * as C from "./styles"
import { Button } from "@/components"
import Logo from "../Logo"
import { useDevice } from "@/hooks/useDevice"

import { navitems } from "@/utils/navitems"
import Link from "next/link"
import Hamburguer from "../Hamburguer"

const Header: React.FC = () => {
  const { isMobile, isTablet, isDesktop } = useDevice()
  const [isOnTop, setIsOnTop] = useState(true)
  const [menuOpened, setMenuOpened] = useState(false)

  useEffect(() => {
    let lastScrollTop = 0
    const handleScroll = () => {
      setMenuOpened(false)
      const st = window.pageYOffset || document.documentElement.scrollTop
      if (st > lastScrollTop) {
        setIsOnTop(false)
      } else {
        setIsOnTop(true)
      }
      lastScrollTop = st <= 0 ? 0 : st
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navBar = (
    <C.Navbar>
      {navitems.map((item, index) => {
        return (
          <C.NavbarItem key={index} onClick={() => setMenuOpened(false)}>
            <Link href={item.url}>{item.title}</Link>
          </C.NavbarItem>
        )
      })}
    </C.Navbar>
  )

  return (
    <>
      {(isMobile || isTablet) && (
        <C.MenuMobile show={menuOpened}>{navBar}</C.MenuMobile>
      )}
      <C.Container show={isOnTop}>
        <C.Content>
          <Logo />
          {isMobile || isTablet ? (
            <Hamburguer isOpen={menuOpened} setIsOpen={setMenuOpened} />
          ) : (
            navBar
          )}

          {isDesktop && (
            <Link href="#purposeForm">
              <Button text="Fale Conosco" />
            </Link>
          )}
        </C.Content>
      </C.Container>
    </>
  )
}

export default Header
