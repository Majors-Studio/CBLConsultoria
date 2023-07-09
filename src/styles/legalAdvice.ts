import styled from "styled-components";
import { tokens } from "@/utils/tokens";

interface IProps {
  bgColor?: string;
  textColor?: string;
}

export const ContainerFluid = styled.div<IProps>`
  width: 100%;
  margin: 0 auto;
  position: relative;
  background-color: ${(props) => props.bgColor};

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;
export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
  padding: 95px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1280px) {
    flex-direction: column;
    gap: 30px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px 20px;
  }
`;
export const Bg = styled.div`
    width: 600px;
    margin: 0 auto;
    padding-top: 100px;
    padding-bottom: 100px;
    @media (max-width: 768px) {
      width: 100%;
      padding-inline: 20px;
      padding-top: 50px;
      padding-bottom: 50px;
    }
`
export const BoxText = styled.div`
  display: flex;
  flex-direction: colums;
  max-width: 500px;
  flex-direction: column;
  gap: 65px;

  @media (max-width: 768px) {
    max-width: 100%;
    gap: 20px;
  }
`;

export const Title = styled.h1<IProps>`
  font-size: ${tokens.font.sizes.xl};
  color: ${(props) => props.textColor};
  max-width: 400px;
  line-height: ${tokens.font.sizes.xxl};
  font-weight: 600;
  text-transform: uppercase;
`;
export const Text = styled.p<IProps>`
  font-size: ${tokens.font.sizes.sm};
  color: ${(props) => props.textColor};
  line-height: ${tokens.font.sizes.md};
  max-width: 100%;

  @media (max-width: 768px) {
    font-size: ${tokens.font.sizes.xs};
  }
`;
export const BoxImage = styled.div`
  width: 500px;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }
`;
