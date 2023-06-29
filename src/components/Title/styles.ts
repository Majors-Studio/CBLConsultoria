import styled from "styled-components"
import { tokens } from "@/utils/tokens"
import { TitleProps } from "."

export const Title = styled.h3<TitleProps>`
  font-size: ${tokens.font.sizes.xl};
  font-weight: 700;
  color: ${({ variant }) =>
    variant === "primary"
      ? tokens.colors.brand.pure
      : variant === "secondary"
      ? tokens.colors.brand.light
      : tokens.colors.brand.dark};
  font-family: ${tokens.font.family.primary};

  text-align: center;
`
