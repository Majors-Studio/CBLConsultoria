import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 100vw;
`;
export const ContainerImg = styled.div`
  width: 100%;
  max-width: 100vw;
  position: relative;
  margin-top: 120px;
  margin-bottom: 71px;
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

export const ContainerText = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const FormContainer = styled.div`
  max-width: 100vw;
  width: 100%;
  display: flex;
  margin: 80px 0;
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

export const CardContainer = styled.div`
  display: flex;
  max-width: 100vw;
  width: 100%;
  padding: 0 30px;
  margin: 80px 0;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SwiperContainer = styled.div`
  max-width: 100vw;
  width: 100%;
  margin: 80px 0;
  padding: 0 20px;
`;
