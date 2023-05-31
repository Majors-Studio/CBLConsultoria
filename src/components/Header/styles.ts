import styled from "styled-components";

export const Container = styled.header`
  width: 1280px;
  height: 80px;
  padding: 0 20px;
  margin: 30px auto;
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

  @media (max-width: 1280px) {
    display: none;
  }
`;
export const NavbarItem = styled.a`
  margin-left: 20px;
  font-size: 15x;

  &:hover {
    opacity: 0.7;
    color: #7a4726;
    cursor: pointer;
  }
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 30px;
  cursor: pointer;

  @media (max-width: 1280px) {
    display: flex;
  }
`;

export const HamburgerItem = styled.div`
  width: 100%;
  height: 3px;
  background-color: #7a4726;
  border-radius: 5px;
`;
