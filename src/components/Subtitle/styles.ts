import styled from "styled-components";

export interface iProps {
  fontSize?: string;
}

export const Subtitle = styled.p<iProps>`
  font-size: ${(props) => props.fontSize || "22px"};
  max-width: 650px;
  color: #823b1d;
  text-align: center;
  margin-bottom: 20px;
`;
