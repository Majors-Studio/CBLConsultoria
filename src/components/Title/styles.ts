import styled from "styled-components"
import { tokens } from "@/utils/tokens"
import { TitleProps } from "."

export const Title = styled.h3<TitleProps>`
  font-size: ${tokens.font.sizes.xl};
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


`
