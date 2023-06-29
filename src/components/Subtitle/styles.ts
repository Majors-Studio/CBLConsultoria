import { tokens } from "@/utils/tokens";
import styled from "styled-components";
import { SubtitleProps } from ".";


export const Subtitle = styled.p<SubtitleProps>`
  color: #121212;
  font-family: ${tokens.font.family.secondary};

  font-size: 20px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
`;
