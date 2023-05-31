import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
  background-color: #fff;
  height: 120px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1280px) {
    width: 100%;
  }
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
  margin-top: 20px;

  @media (max-width: 920px) {
    display: none;
  }
`;
export const NavbarItem = styled.a`
  margin-left: 20px;
  font-size: 15px;

  &:hover {
    opacity: 0.7;
    color: #7a4726;
    cursor: pointer;
  }
`;

export const AccordionItem = styled.div`
  padding: 10px;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
`;
