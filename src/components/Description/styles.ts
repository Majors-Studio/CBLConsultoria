import { tokens } from "@/utils/tokens"
import styled from "styled-components"

export const Description = styled.p`
  font-family: ${tokens.font.family.secondary};
  font-size: ${tokens.font.sizes.xxs};
  font-weight: ${tokens.font.weight.regular};
  line-height: 1.5em;
  color: ${tokens.colors.highlight.dark};

  b,
  strong {
    font-weight: ${tokens.font.weight.bold};
    font-family: ${tokens.font.family.secondary};
  }

  span {
    font-family: ${tokens.font.family.secondary};
    font-size: ${tokens.font.sizes.xxs};
  }
`
