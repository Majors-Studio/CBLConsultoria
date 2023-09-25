import React, { useEffect } from "react"
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
  const { isDesktop } = useDevice()

  const { isScrollingTop, menuOpened, setMenuOpened, setIsScrollingTop } =
    useApp()

  const [subMenuOpened, setSubMenuOpened] = React.useState<number | null>(null)

  const path = useRouter().pathname

  const navBar = navitems.map((item, index) => {
    return (
      <C.NavbarItem
        key={index}
        onClick={() => setMenuOpened(false)}
        onMouseEnter={() => setSubMenuOpened(index)}
        onMouseLeave={() => setSubMenuOpened(null)}
      >
        <Link
          href={item.url}
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "flex",
            alignItems: "center",
            gap: "8px",
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
              fontSize: "18px",
            }}
          >
            {item.title}
          </Subtitle>
          {item.subpaths && isDesktop && (
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
            >
              <path
                fillRule="evenodd"
                d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z"
              />
            </svg>
          )}
        </Link>
        {item.subpaths && (
          <C.Submenu active={subMenuOpened === index || !isDesktop}>
            {item.subpaths.map((subitem, subindex) => {
              return (
                <React.Fragment key={subindex}>
                  <Link
                    onClick={() => setIsScrollingTop(false)}
                    href={item.url + subitem.anchor}
                    style={{
                      overflow: "visible",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                    }}
                  >
                    <C.NavItemTitle>{subitem.title}</C.NavItemTitle>
                  </Link>
                  {subindex === item.subpaths.length - 1 ? null : <hr />}
                </React.Fragment>
              )
            })}
            {item.title === "Precatórios" && isDesktop && (
              <CtaButton
                href="precatorios#purposeForm"
                variant="secondary"
                style={{ marginTop: 24 }}
              >
                Quero vender meu precatório
              </CtaButton>
            )}
          </C.Submenu>
        )}
      </C.NavbarItem>
    )
  })
  
  useEffect(() => {
    if (!isDesktop && menuOpened) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
      document.body.style.overflowX = "hidden"
    }
  }, [menuOpened])

  return (
    <ContentBox
      bgColor={tokens.colors.brand.cta}
      style={{
        top: isScrollingTop || menuOpened ? "0" : "-100%",
        position: "fixed",
        transition: "top 0.5s ease-in-out",
        zIndex: 9999,
        width: "100%",
        height: isDesktop ? "120px" : "auto",
        boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        borderBottom: "1px solid " + tokens.colors.brand.pure,
        display: "flex",
        alignItems: "center",
        padding: 0,
      }}
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: isDesktop ? 'fit-content' : "120px",
        width: "100%",
        padding: '0 24px'
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Logo />

        {isDesktop ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${navitems.length}, auto)`,
              gap: "24px",
              height: "100px",
              alignItems: "center",
            }}
          >
            {navBar}
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
            }}
          >
            <Hamburguer isOpen={menuOpened} setIsOpen={setMenuOpened} />
          </div>
        )}
      </div>
      {!isDesktop && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            width: "100%",
            height: "100%",
            overflow: "auto",
            overflowX: "hidden",
            position: 'fixed',
            top: menuOpened ? 0 : '-100%',
            transition: 'top 0.5s ease-in-out',
            backgroundColor: tokens.colors.brand.cta,
            paddingTop: 75,
            paddingLeft: 24,
          }}
        >
          {navBar}
          <CtaButton href="#purposeForm" variant="secondary">
            Quero vender meu precatório
          </CtaButton>
        </div>
      )}
    </ContentBox>
  )
}

export default Header
