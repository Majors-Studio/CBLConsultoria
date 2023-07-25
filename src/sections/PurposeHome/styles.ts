import styled from "styled-components";

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  margin-top: 40px;

  @media (max-width: 1024px) {
    margin-top: 0;
  }
`;

export const PrecatoryInfoItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  cursor: context-menu;
`;