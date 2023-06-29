import styled from "styled-components";
import { tokens } from "@/utils/tokens";

interface IProps {
  show: boolean;
}

export const Container = styled.header<IProps>`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 99999;
  background-color: ${tokens.colors.brand.pure};
  height: 120px;
  padding: 0 20px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

  transition: all 0.4s ease-in-out;

  ${({ show }) => (show ? `top: 0;` : `top: -100%;`)}
`;

interface IPropsMenu {
  show: boolean;
}

export const MenuMobile = styled.div<IPropsMenu>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  z-index: 9999;

  padding-top: 120px;

  transition: all 0.4s ease-in-out;

  ${({ show }) => (show ? `top: 0;` : `top: -100%;`)}
  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  max-width: ${tokens.breakpoints.desktopMd};
  margin: 0 auto;
`;

export const Logo = styled.img`
  width: 200px;
  margin-top: 20px;
  height: 100%;
  max-height: 200px;
  object-fit: cover;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${tokens.breakpoints.desktop};) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    overflow: hidden;
    height: fit-content;
  }
`;

export const NavbarItem = styled.div`
  margin-left: 20px;
  color: #fff;
  position: relative;
  cursor: pointer;
  font-size: ${tokens.font.sizes.xs};
  color: ${tokens.colors.brand.light};

  @media (min-width: ${tokens.breakpoints.desktop};) {
    font-size: 1.2rem;

    &:after {
      content: "";
      position: absolute;
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
`;

export const AccordionItem = styled.div`
  padding: 10px;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
`;
