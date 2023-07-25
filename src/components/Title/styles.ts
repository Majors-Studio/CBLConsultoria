import styled from "styled-components"
import { tokens } from "@/utils/tokens"
import { TitleProps } from "."

export const Title = styled.h3<TitleProps>`
  font-size: ${tokens.font.sizes.lg};
  font-weight: ${tokens.font.weight.medium};
  line-height: 1.2;
  font-family: ${tokens.font.family.primary};
  text-transform: uppercase;
  text-align: center;
  letter-spacing: -0.75px;

  color: ${({ variant }) =>
    variant === "primary"
      ? tokens.colors.brand.cta
      : variant === "secondary"
      ? tokens.colors.neutral.highPure
      : tokens.colors.brand.dark};

  strong,
  b {
    font-family: ${tokens.font.family.primary};
  }

  @media (max-width: ${tokens.breakpoints.desktop}) {
    font-size: ${tokens.font.sizes.lg};
  }

  @media (max-width: ${tokens.breakpoints.tablet}) {
    font-size: ${tokens.font.sizes.sm};
    margin-top: 10px;
  }
`
