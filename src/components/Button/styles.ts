import styled from "styled-components";
import { iButton } from ".";

export const Button = styled.button<iButton>`
  border: 0;
  border-radius: 20px;
  padding: ${(props) => props.padding || "10px 25px"};
  background: ${(props) => props.bgColor || "#7a4726"};
  color: ${(props) => props.color || "#fff"};
  font-weight: ${(props) => props.fontWeight || "bold"};
  font-size: 14px;
  transition: background 0.2s;

  &:hover {
    background: ${(props) => props.bgHover};
  }

  @media (max-width: 1280px) {
    /* width: 100%; */
    display: none;
  }
`;
