import styled from "styled-components";

export const NewsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
    gap: 0;
    grid-gap: 60px;
    /* padding: 0 24px; */
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const NewsItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  padding: 24px;
  background-color: #fff;
  height: 100%;
  max-height: 250px;
  box-shadow: 0 1px 9px 0 rgba(0, 0, 0, 0.17);
`;

