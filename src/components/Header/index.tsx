"use client";

import '../../animations/main'
import { GlobalStyle } from '@/styles/global-styles'

import React, { useEffect, useState } from "react";
import * as C from "./styles";
import { Button } from "@/components";
import Logo from "../Logo";
import { useDevice } from "@/hooks/useDevice";

import { navitems } from "@/utils/navitems";
import Link from "next/link";
import Hamburguer from "../Hamburguer";
import CtaButton from "../CtaButton";

const Header: React.FC = () => {
  const { isMobile, isTablet } = useDevice();
  const [isOnTop, setIsOnTop] = useState(true);
  const [menuOpened, setMenuOpened] = useState(false);
  const [submenuOpened, setSubmenuOpened] = useState<number | null>(null);

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      setMenuOpened(false);
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        setIsOnTop(st < 250);
      } else {
        setIsOnTop(true);
      }
      lastScrollTop = st <= 0 ? 0 : st;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navBar = (
    <C.Navbar>
      {navitems.map((item, index) => {
        return (
          <C.NavbarItem
            onMouseEnter={() => setSubmenuOpened(index)}
            onMouseLeave={() => setSubmenuOpened(null)}
            key={index}
            onClick={() => setMenuOpened(false)}
          >
            <Link href={item.url}>{item.title}</Link>
            {item.subpaths && (
              <C.Submenu show={submenuOpened === index}>
                {item.subpaths.map((subitem, subindex) => {
                  return (
                    <>
                      <Link href={item.url + subitem.anchor} key={subindex}>
                        {subitem.title}
                      </Link>
                      {subindex === item.subpaths.length - 1 ? null : <hr />}
                    </>
                  );
                })}
              </C.Submenu>
            )}
          </C.NavbarItem>
        );
      })}
    </C.Navbar>
  );

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
            <>
              {navBar}
              <CtaButton
                style={{
                  border: "1px solid #fff",
                  color: "#fff",
                }}
              >
                Fale Conosco
              </CtaButton>
            </>
          )}
        </C.Content>
      </C.Container>
    </>
  );
};

export default Header;
