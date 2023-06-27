import styled from "styled-components";
import { iButton } from ".";
import { tokens } from "../../utils/tokens";

export const Button = styled.button<iButton>`
  border-radius: 0.5rem;
  padding: ${(props) => props.padding || "10px 25px"};
  background: ${(props) => props?.bgColor};
  color: ${(props) => props.color || "${tokens.colors.brand.pure}"};
  font-weight: ${(props) => props.fontWeight || "bold"};
  font-size: 1.1rem;
  transition: background 0.2s;

  @media (max-width: 1200px) {
    display: none;
  }
`;
