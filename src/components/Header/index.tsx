"use client";

import React, { useState } from "react";
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

  return (
    <C.Container>
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
