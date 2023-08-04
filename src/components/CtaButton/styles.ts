import { tokens } from "@/utils/tokens"
import styled from "styled-components"

interface ButtonProps {
  variant?: "primary" | "secondary"
}

export const Button = styled.button<ButtonProps>`
  font-weight: ${tokens.font.weight.bold};
  border-radius: 0.5rem;
  transition: border-radius 0.5s, box-shadow 0.5s, color 0.5s;
  transition-timing-function: cubic-bezier(0.7, 0, 0.2, 1);
  padding-inline: 1.5rem;
  height: 45px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  width: fit-content;
  font-size: ${tokens.font.sizes.sm};
  font-family: ${tokens.font.family.primary};

  color: ${({ variant }) =>
    variant === "primary"
      ? tokens.colors.brand.cta
      : tokens.colors.neutral.highPure};
  border: 2px solid
    ${({ variant }) =>
      variant === "primary"
        ? tokens.colors.brand.cta
        : tokens.colors.neutral.highPure};
  box-shadow: inset 0 0 0 0px
    ${({ variant }) =>
      variant === "primary"
        ? tokens.colors.brand.cta
        : tokens.colors.neutral.highPure};

  white-space: nowrap;

  &:hover {
    color: ${({ variant }) =>
      variant === "primary"
        ? tokens.colors.brand.lightCream
        : tokens.colors.brand.cta};
    box-shadow: inset 0 0 0 40px
      ${({ variant }) =>
        variant === "primary"
          ? tokens.colors.brand.cta
          : tokens.colors.brand.lightCream};

    transition-delay: 0s, 0s, 0.2s;
    border: 2px solid transparent;
  }

  @media (max-width: ${tokens.breakpoints.desktop}) {
    margin: 0 auto;
    font-size: ${tokens.font.sizes.xs};
  }
`

export const Link = styled.a<ButtonProps>`
  border-radius: 0.5rem;
  transition: border-radius 0.5s, box-shadow 0.5s, color 0.5s;
  transition-timing-function: cubic-bezier(0.7, 0, 0.2, 1);
  padding-inline: 1.5rem;
  height: 45px;
  width: fit-content;
`
