import styled from "styled-components";

export interface iTitle {
  fontSize?: string;
}

export const Title = styled.h3<iTitle>`
  font-size: ${(props) => props.fontSize || "30px"};
  color: #823b1d;
  text-align: center;
`;
