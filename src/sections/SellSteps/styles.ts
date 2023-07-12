import styled from "styled-components";

export const StepsSubtitle = styled.h2`
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
`;

export const StepsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  margin-top: 42px;
  margin-bottom: 32px;
  padding: 24px;

  padding-bottom: 32px;
  border-bottom: 2px solid #fff;

  @media (max-width: 920px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0;
    grid-gap: 60px;
    padding-bottom: 0;
    border-bottom: none;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const StepsItemIcon = styled.div`
  width: 45px;
  height: 45px;
  color: #ccc;
`;

export const StepsInfoText = styled.p`
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 400;
`;
