"use client";

import React, { useEffect, useState } from "react";
import * as C from "./styles";
import { Button } from "@/components";
import Logo from "../Logo";
import { useDevice } from "@/hooks/useDevice";

import { navitems } from "@/utils/navitems";
import Link from "next/link";

const Header: React.FC = () => {
  const { isMobile } = useDevice();
  const [isOpenAccordion, setIsOpenAccordion] = useState(false);

  const handleOpenAccordion = () => {
    setIsOpenAccordion(!isOpenAccordion);
  };
  
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
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <C.Container show={isOnTop}>
      <C.Content>
        <Logo />
        <div>
          {isMobile && (
            <svg
              className="w-8 h-8 relative cursor-pointer"
              onClick={handleOpenAccordion}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              color="#fff"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}

          <C.Navbar>
            {navitems.map((item, index) => {
              return (
                <C.NavbarItem key={index}>
                  <Link href={item.url}>{item.title}</Link>
                </C.NavbarItem>
              );
            })}
          </C.Navbar>
        </div>

        <Button text="Fale Conosco" />
      </C.Content>
    </C.Container>
  );
};

export default Header;
