import { tokens } from "@/utils/tokens";
import styled from "styled-components";

export const Button = styled.button`
  font-weight: 700;
  border-radius: 0.5rem;
  border: 2px solid ${tokens.colors.brand.cta};
  box-shadow: inset 0 0 0 0px ${tokens.colors.brand.cta};
  transition: border-radius 0.5s, box-shadow 0.5s, color 0.5s;
  transition-timing-function: cubic-bezier(0.7, 0, 0.2, 1);
  padding-inline: 1.5rem;
  height: 4.5rem;
  width: fit-content;
  font-size: 1.5rem;
  color: ${tokens.colors.brand.cta};
  font-family: ${tokens.font.family.primary};
  &:hover {
    color: #e7e7e7;
    /* border-radius: 50%; */
    box-shadow: inset 0 0 0 40px ${tokens.colors.brand.cta};
    transition-delay: 0s, 0s, 0.2s;
    border: 2px solid transparent;
  }
`;
