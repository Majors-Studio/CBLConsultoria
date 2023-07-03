import styled from "styled-components";
import { tokens } from "@/utils/tokens";
import { TitleProps } from ".";

export const Title = styled.h3<TitleProps>`
  font-size: ${tokens.font.sizes.lg};
  font-weight: ${tokens.font.weight.medium};
  line-height: 1.2;
  font-family: ${tokens.font.family.primary};
  text-transform: uppercase;
  text-align: center;

  color: ${({ variant }) =>
    variant === "primary"
      ? tokens.colors.brand.pure
      : variant === "secondary"
      ? tokens.colors.brand.light
      : tokens.colors.brand.dark};

  strong {
    /* text-decoration: underline; */
    font-family: ${tokens.font.family.primary};
  }

  @media (max-width: 920px) {
    font-size: ${tokens.font.sizes.lg};
  }

  @media (max-width: 768px) {
    font-size: ${tokens.font.sizes.sm};
    margin-top: 10px;
    text-align: left;
  }
`;
