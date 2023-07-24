import styled from "styled-components"
import { tokens } from "@/utils/tokens"

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

  width: 100%;
  background-color: transparent;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 0 0 35px;
  position: relative;
  top: 0;
  left: 0;
  opacity: 1;
  visibility: visible;

  margin: 20px 0 0 35px;
  border-left: 1px solid ${tokens.colors.brand.light};

  hr {
    margin: 10px 0;
  }

  a {
    font-size: 0.9rem;
    padding: 0;
    font-size: ${tokens.font.sizes.xs};
    color: ${tokens.colors.brand.light};
    font-family: ${tokens.font.family.secondary};
  }

@media (min-width: ${tokens.breakpoints.desktop}) {
  margin: 20px 0 0 0;

}
`
