import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
  background-color: #000;
  height: 120px;
  padding: 0 20px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  max-width: 1200px;
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
  @media (max-width: 1200px) {
    display: none;
  }
`;
export const NavbarItem = styled.div`
  margin-left: 20px;
  font-size: 1.2rem;
  color: #fff;
  position: relative;
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

    @media (max-width: 920px) {
      display: none;
    }
  }
`;

export const AccordionItem = styled.div`
  padding: 10px;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
`;
