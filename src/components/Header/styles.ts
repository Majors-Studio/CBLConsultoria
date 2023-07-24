"use client"

import styled from "styled-components"
import { tokens } from "@/utils/tokens"

interface IPropsMenu {
  show: boolean
}

export const MenuMobile = styled.div<IPropsMenu>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${tokens.colors.brand.cta};
  z-index: 9999;

  padding-top: 120px;

  transition: all 0.4s ease-in-out;

  ${({ show }) => (show ? `top: 0;` : `top: -100%;`)}
  overflow: hidden;
`

export const Logo = styled.img`
  width: 200px;
  margin-top: 20px;
  height: 100%;
  max-height: 200px;
  object-fit: cover;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

export const NavbarItem = styled.div`
  color: #fff;
  position: relative;
  cursor: pointer;
  font-size: ${tokens.font.sizes.sm};
  color: ${tokens.colors.brand.light};
  position: relative;
  text-align: center;

  @media (min-width: ${tokens.breakpoints.desktop}) {
    font-size: 1rem;

    &:after {
      content: "";
      left: 0;
      bottom: -5px;
      width: 0;
      height: 2px;
      background-color: #fff;
      transition: all 0.3s ease-in-out;
    }
    &:hover {
      color: #fff;
      &:after {
        width: 100%;
      }
    }
  }
`

export const Submenu = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding: 10px;

  hr {
    margin: 10px 0;
  }

  a {
    padding: 0;
    font-size: ${tokens.font.sizes.xs};
    color: ${tokens.colors.brand.light};
    font-family: ${tokens.font.family.secondary};
  }

  width: 100%;
  background-color: transparent;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 0;
  padding: 0 0 0 35px;
  position: relative;
  top: 0;
  left: 0;
  opacity: 1;
  visibility: visible;

  margin: 20px 0 20px 35px;
  border-left: 1px solid ${tokens.colors.brand.light};

  a {
    font-size: 0.9rem;
  }
`
