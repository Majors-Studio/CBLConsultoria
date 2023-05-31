import styled from "styled-components";

interface TitleProps {
  fontSize: string;
}

export const Title = styled.h1<TitleProps>`
  font-size: ${(props) => props.fontSize};
  color: #823b1d;
  text-align: center;
`;
