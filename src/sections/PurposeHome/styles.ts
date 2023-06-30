import styled from "styled-components";

export const Head = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  margin-top: 40px;

  @media (max-width: 1024px) {
    margin-top: 0;
  }
`;

export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 768px) {
  }
`;

export const PrecatoryInfoItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  cursor: context-menu;
`;