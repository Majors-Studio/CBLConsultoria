import styled from "styled-components";

export const Container = styled.header`
  width: 1280px;
  height: 80px;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`;
export const NavbarItem = styled.a`
  margin-left: 20px;
  font-size: 17px;

  &:hover {
    opacity: 0.7;
    color: #7a4726;
    cursor: pointer;
  }
`;
