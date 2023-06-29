import styled from "styled-components"
import { tokens } from "@/utils/tokens"
import { TitleProps } from "."

export const Title = styled.h3<TitleProps>`
  font-size: ${tokens.font.sizes.xl};
  font-weight: ${tokens.font.weight.medium};
  line-height: 1.2;
  font-family: ${tokens.font.family.primary};
  width: 100%;
  text-align: center;
  font-size: ${tokens.font.sizes.xl};

  color: ${({ variant }) =>
    variant === "primary"
      ? tokens.colors.brand.pure
      : variant === "secondary"
      ? tokens.colors.brand.light
      : tokens.colors.brand.dark};

  text-align: center;

  strong {
    /* text-decoration: underline; */
    font-family: ${tokens.font.family.primary};
  }
`
