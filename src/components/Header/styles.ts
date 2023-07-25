import styled from "styled-components"
import { tokens } from "@/utils/tokens"

export const NavbarItem = styled.div`
  color: #fff;
  cursor: pointer;
  position: relative;

  @media (min-width: ${tokens.breakpoints.desktop}) {
    display: flex;
    justify-content: center;
  }
`

interface NavbarItemProps {
  active?: boolean
}

export const Submenu = styled.div<NavbarItemProps>`
  position: relative;

  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;
  background-color: transparent;
  border-left: 1px solid ${tokens.colors.neutral.highPure};

  margin: 20px 0 0 35px;
  padding: 0 0 0 35px;

  hr {
    margin: 10px 0;
  }

  a {
    font-size: 0.9rem;
    padding: 0;
    font-size: ${tokens.font.sizes.xs};
    color: ${tokens.colors.neutral.highPure};
    font-family: ${tokens.font.family.secondary};
  }

  @media (min-width: ${tokens.breakpoints.desktop}) {
    padding: 20px;
    position: absolute;
    top: 100%;

    background-color: ${tokens.colors.brand.cta};
    border-left: 0;
    margin: 0;

    width: fit-content;
  }

  visibility: ${({ active }) => (active ? "visible" : "hidden")};
`
