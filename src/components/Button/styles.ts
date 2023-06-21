import styled from "styled-components";
import { iButton } from ".";

export const Button = styled.button<iButton>`
  border: 0;
  border-radius: 0.5rem;
  padding: ${(props) => props.padding || "10px 25px"};
  background: ${(props) => props.bgColor || "#fff"};
  color: ${(props) => props.color || "#4f665a"};
  font-weight: ${(props) => props.fontWeight || "bold"};
  font-size: 1.2rem;
  transition: background 0.2s;

  @media (max-width: 1200px) {
    display: none;
  }
`;
