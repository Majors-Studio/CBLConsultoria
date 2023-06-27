import styled from "styled-components";

export const Container = styled.footer`
  background-color: #00246a;
  opacity: 0.8;
  max-width: 100vw;
  width: 100%;
  height: fit-content;
  padding: 46px 60px;

  @media (max-width: 920px) {
    padding: 46px 40px;
    text-align: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
    padding: 24px 16px;
  }
`;

export const Content = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 920px) {
    flex-direction: column;
    gap: 24px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
  }
`;

export const MainText = styled.div`
  display: flex;
  max-width: 320px;
  flex-direction: column;
  gap: 10px;
`;

export const BiggerText = styled.h1`
  color: #fff;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 28px;
  }
`;

export const Text = styled.h2`
  color: #fff;
  font-size: 13px;
`;

export const Desc = styled.p`
  color: #ddd;
`;

export const AddressInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const AddressTitle = styled.h3`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
`;

export const AddressText = styled.p`
  color: #666;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
`;

export const Midia = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 920px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
`;

export const MidiaItems = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const MidiaItem = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContainerInfo = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 12px;
    margin-top: 24px;
  }
`;

export const Rights = styled.div`
  display: flex;
  max-width: 100vw;
  width: 100%;
  padding: 16px 60px;
  align-items: center;
  justify-content: space-between;
  background-color: #00246a;
  opacity: 0.8;
  gap: 12px;
  font-size: 14px;
  color: #666;
`;

export const Title = styled.h3`
  color: #fff;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 25px;
  }
`;

export const Line = styled.div`
  width: 100%;
  max-width: 100vw;
  height: 2px;
  background-color: #fff;
`;

export const Subtitle = styled.p`
  color: #ccc;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

export const InfoText = styled.p`
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
`;
