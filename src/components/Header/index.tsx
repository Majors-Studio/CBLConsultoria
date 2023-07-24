import React from "react"
import * as C from "./styles"
import Logo from "../Logo"
import { useDevice } from "@/hooks/useDevice"

import { navitems } from "@/utils/navitems"
import Link from "next/link"
import Hamburguer from "../Hamburguer"
import CtaButton from "../CtaButton"
import { useApp } from "@/context/appContext"
import { tokens } from "@/utils/tokens"
import ContentBox from "../ContentBox"

const Header: React.FC = () => {
  const { isMobile, isDesktop } = useDevice()

  const { isScrollingTop, menuOpened, setMenuOpened } = useApp()

  return (
    <>
      <C.MenuMobile show={menuOpened}>
        <ContentBox
          contentStyle={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          {navitems.map((item, index) => {
            return (
              <C.NavbarItem key={index} onClick={() => setMenuOpened(false)}>
                <Link
                  href={item.url}
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "flex",
                    alignContent: "center",
                    gap: "6px",
                  }}
                >
                  <div
                    style={{
                      marginLeft: isMobile ? "24px" : "0",
                    }}
                  >
                    {item.title}{" "}
                  </div>
                  {item.subpaths && isDesktop && (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
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
                  )}
                </Link>
                {item.subpaths && (
                  <C.Submenu>
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
                            <p style={{ width: "180px" }}>{subitem.title}</p>
                          </Link>
                          {subindex === item.subpaths.length - 1 ? null : (
                            <hr />
                          )}
                        </React.Fragment>
                      )
                    })}
                  </C.Submenu>
                )}
              </C.NavbarItem>
            )
          })}
        </ContentBox>
      </C.MenuMobile>
      <ContentBox
        py={"24px"}
        bgColor={tokens.colors.brand.cta}
        style={{
          top: isScrollingTop ? "0" : "-100%",
          position: "fixed",
          transition: "top 0.5s ease-in-out",
          zIndex: 9999,
          width: "100%",
          height: "120px",
          boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        }}
        contentStyle={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Logo />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <CtaButton
            href="#purposeForm"
            variant="secondary"
          >
            Quero vender meu precatório
          </CtaButton>
          <Hamburguer isOpen={menuOpened} setIsOpen={setMenuOpened} />
        </div>
      </ContentBox>
    </>
  )
}

export default Header
