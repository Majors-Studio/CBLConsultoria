import styled from "styled-components";
import { tokens } from "@/utils/tokens";
export const Container = styled.div`
  width: 100%;
  max-width: 100vw;
`;

export const ContainerImg = styled.div`
  width: 100%;
  max-width: 100vw;
  position: relative;
  margin-top: 120px;
  height: 340px;
  margin-bottom: 30px;
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vw;
  width: 100%;
  margin: 70px 0px;
  padding: 0 50px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const JustifyBetween = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100vw;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  gap: 20px;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const CardsContainer = styled.div`
  display: grid;
  padding: 0 50px;
  grid-template-columns: repeat(1, 1fr);
  gap: 32px;
  max-width: ${tokens.breakpoints.desktopMd};
  margin: 0 auto;
`;

export const FormContainer = styled.div`
  max-width: ${tokens.breakpoints.desktopMd};
  display: flex;
  align-items: center;
  margin: 80px auto;
  justify-content: center;
  width: 100%;

  @media (max-width: 920px) {
    max-width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: none;
  }
`;

export const SwiperContainer = styled.div`
  max-width: 100vw;
  width: 100%;
  background-color: #ffffff;

  margin-bottom: 50px;
`;

export const VideoContainer = styled.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: ${tokens.breakpoints.desktopMd};
  margin: 0 auto;
  padding: 0 40px;

  margin-top: 150px;
  margin-bottom: 50px;
`;

export const AvatarName = styled.h3`
  font-size: ${tokens.font.sizes.sm};
  font-weight: ${tokens.font.weight.bold};
  max-width: 120px;
  text-align: center;
  color: ${tokens.colors.brand.pure};
  margin-top: 8px;
  font-family: ${tokens.font.family.secondary};
`;

export const AvatarCharge = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #000000;
  font-family: ${tokens.font.family.primary};
  margin-bottom: 20px;
`;

export const AvatarsContainer = styled.div`
  display: flex;
  max-width: ${tokens.breakpoints.desktopMd};
  margin: 0 auto;
  width: 100%;
  padding: 0 80px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 80px;

  margin-top: 80px;
  margin-bottom: 120px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

export const WhatPlace = styled.h1``;

export const AboutText = styled.p`
  font-size: ${tokens.font.sizes.sm};
  font-weight: ${tokens.font.weight.regular};
  color: ${tokens.colors.brand.dark};
  text-align: justify;
  font-family: ${tokens.font.family.secondary};
  margin: 50px auto;
  max-width: ${tokens.breakpoints.desktopMd};
`;
