import styled from "styled-components";


export const NewsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
    gap: 0;
    grid-gap: 60px;
    /* padding: 0 20px; */
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const NewsItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  background-color: #fff;
  height: 100%;
  box-shadow: 0 1px 9px 0 rgba(0, 0, 0, 0.17);
`

export const NewsItemTop = styled.div`
  display: flex;
  flex-direction: column;
`

export const NewsItemInfo = styled.p`
  margin-bottom: 32px;
  color: #8e989f;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-decoration: underline;
`

export const NewsItemTitle = styled.h1`
  color: #2c3b50;
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-weight: 500;
`

export const NewsItemLink = styled.a`
  color: #e2a141;
`