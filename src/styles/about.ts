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

export const ContainerChart = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const FormContainer = styled.div`
  max-width: 1200px;
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
  padding: 0 40px;

  margin-bottom: 50px;
`;

export const AvatarName = styled.h3`
  font-size: 24px;
  font-weight: 700;
  max-width: 120px;
  text-align: center;
  color: #7a4726;
  margin-top: 20px;
`;

export const AvatarCharge = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #000000;
  margin-top: 5px;
`;

export const AvatarsContainer = styled.div`
  display: flex;
  max-width: 1200px;
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

export const WhatContainer = styled.div`
  /* background-color: #e3dcd7; */

  padding: 90px 0 60px;
  width: 100%;
`;

export const WhatTitle = styled.h1`
  color: #121212;
  font-family: "Montserrat", sans-serif;
  font-size: 40px;
  font-weight: 600;
  line-height: 40px;
  text-align: center;
`;
export const WhatList = styled.ul`
  width: 100%;
  max-width: 800px;
  margin: 80px auto 0;
`;

export const WhatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
export const WhatTexts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const WhatName = styled.h1`
  margin-top: 12px;
`;

export const WhatPlace = styled.h1``;
