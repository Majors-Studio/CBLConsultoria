import { tokens } from "@/utils/tokens";
import styled from "styled-components";

export interface iProps {
  fontSize?: string;
}

export const Subtitle = styled.p<iProps>`
  font-size: ${(props) => props.fontSize || "22px"};
  max-width: 650px;
  text-align: center;
  margin-bottom: 20px;
font-family: ${tokens.font.family.secondary};
`;
