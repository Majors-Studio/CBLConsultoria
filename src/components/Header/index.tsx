"use client";

import "../../animations/main";
import { GlobalStyle } from "@/styles/global-styles";

import React, { useEffect, useState } from "react";
import * as C from "./styles";
import { Button } from "@/components";
import Logo from "../Logo";
import { useDevice } from "@/hooks/useDevice";

import { navitems } from "@/utils/navitems";
import Link from "next/link";
import Hamburguer from "../Hamburguer";
import CtaButton from "../CtaButton";
import { useApp } from "@/context/appContext";

const Header: React.FC = () => {
  const { isMobile, isTablet, isDesktop } = useDevice();

  const {
    isScrollingTop,
    menuOpened,
    submenuOpened,
    setSubmenuOpened,
    setMenuOpened,
  } = useApp();

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
            <Link
              href={item.url}
              style={
                isDesktop
                  ? {
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }
                  : undefined
              }
            >
              {item.title === "Precatórios" ||
              item.title === "Consultoria Jurídica" ? (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <div>{item.title} </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              ) : (
                item.title
              )}
            </Link>
            {item.subpaths && (
              <C.Submenu show={submenuOpened === index}>
                {item.subpaths.map((subitem, subindex) => {
                  return (
                    <React.Fragment key={subindex}>
                      <Link
                        href={item.url + subitem.anchor}
                        style={
                          isMobile
                            ? {
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                width: "70vw",
                              }
                            : undefined
                        }
                      >
                        {subitem.title}
                      </Link>
                      {subindex === item.subpaths.length - 1 ? null : <hr />}
                    </React.Fragment>
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
      <C.Container show={isScrollingTop}>
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
