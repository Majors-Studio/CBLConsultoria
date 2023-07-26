import { tokens } from "@/utils/tokens";
import styled from "styled-components";
import { SubtitleProps } from ".";

export const Subtitle = styled.p<SubtitleProps>`
  color: #121212;
  font-family: ${tokens.font.family.secondary};
  font-size: ${tokens.font.sizes.sm};
  font-weight: ${tokens.font.weight.regular};
  line-height: 25px;
  text-align: center;

  @media (max-width: ${tokens.breakpoints.tablet}) {
    font-size: ${tokens.font.sizes.xs};
  }

  strong,
  b {
    font-weight: ${tokens.font.weight.bold};
    font-family: ${tokens.font.family.secondary};
  }
`;
