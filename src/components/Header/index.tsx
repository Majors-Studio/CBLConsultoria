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
import { useRouter } from "next/router"
import Subtitle from "../Subtitle"

const Header: React.FC = () => {
  const { isMobile, isDesktop } = useDevice()

  const { isScrollingTop, menuOpened, setMenuOpened, setIsScrollingTop } =
    useApp()

  const path = useRouter().pathname

  return (
    <>
      <ContentBox
        bgColor={tokens.colors.brand.cta}
        style={{
          top: isScrollingTop ? "0" : "-100%",
          position: "fixed",
          transition: "top 0.5s ease-in-out",
          zIndex: 9999,
          width: "100%",
          height: "120px",
          boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
          borderBottom: "1px solid " + tokens.colors.brand.pure,
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
          {isDesktop && (
            <CtaButton href="#purposeForm" variant="secondary">
              Quero vender meu precatório
            </CtaButton>
          )}
          <Hamburguer isOpen={menuOpened} setIsOpen={setMenuOpened} />
        </div>
      </ContentBox>
      <ContentBox
        bgColor={tokens.colors.brand.cta}
        style={{
          position: "fixed",
          top: menuOpened ? "0" : "-100%",
          transition: "top 0.5s ease-in-out",
          zIndex: 9998,
          paddingTop: "144px",
          paddingBottom: "24px",
          width: "100%",
        }}
        contentStyle={{
          display: "flex",
          flexDirection: isDesktop ? "row" : "column",
          gap: "24px",
          justifyContent: "space-between",
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
                }}
              >
                <Subtitle
                  style={{
                    textAlign: "left",
                    color:
                      path === item.url
                        ? tokens.colors.brand.lightCream
                        : tokens.colors.neutral.highPure,
                    fontWeight: path === item.url ? "bold" : "normal",
                  }}
                >
                  {item.title}
                </Subtitle>
              </Link>
              {item.subpaths && (
                <C.Submenu>
                  {item.subpaths.map((subitem, subindex) => {
                    return (
                      <React.Fragment key={subindex}>
                        <Link
                          onClick={() => setIsScrollingTop(false)}
                          href={item.url + subitem.anchor}
                          style={{
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                          }}
                        >
                          <p>{subitem.title}</p>
                        </Link>
                        {subindex === item.subpaths.length - 1 ? null : <hr />}
                      </React.Fragment>
                    )
                  })}
                </C.Submenu>
              )}
            </C.NavbarItem>
          )
        })}
        {isDesktop || (
          <CtaButton href="#purposeForm" variant="secondary">
            Quero vender meu precatório
          </CtaButton>
        )}
      </ContentBox>
    </>
  )
}

export default Header
