import styled from "styled-components";

export const RankingInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  flex-shrink: 0;

  @media (max-width: 920px) {
    width: 100%;
    max-width: 100vw;
  }
`

export const RankingChart = styled.div`
  width: 100%;
  max-width: 650px;
  flex-shrink: 0;
  display: flex;
`