import styled from "styled-components";

export interface iProps {
  fontSize?: string;
}

export const Subtitle = styled.p<iProps>`
  font-size: ${(props) => props.fontSize || "22px"};
  color: #823b1d;
  text-align: center;
`;
