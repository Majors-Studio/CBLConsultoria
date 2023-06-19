import styled from "styled-components";

export const Container = styled.footer`
  background-color: #4f665a;
  max-width: 100vw;
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 46px 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
    padding: 24px 16px;
  }
`;

export const Midia = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
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

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Title = styled.h3`
  color: #fff;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
`;

export const Subtitle = styled.h4`
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const InfoText = styled.p`
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
`;

export const MiddleInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;
