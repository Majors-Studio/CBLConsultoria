import { tokens } from "@/utils/tokens"
import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
`

export const ContainerImg = styled.div`
  width: 100vw;
  position: relative;
  margin-top: 120px;
  height: 340px;

  display: flex;
  align-items: center;
`

export const WhatContainer = styled.div`
  padding: 90px 0 60px;
  width: 100%;
`

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  z-index: -1;

  /* opacity: 0.5; */
`

export const WhatIs = styled.div`
  background-color: #0a0e11;
  max-width: 100vw;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`

export const WhatIsCategory = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
`

export const CenaryInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

export const CenaryTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 72px;
  width: 100%;

  padding: 0 20px;
  max-width: ${tokens.breakpoints.desktopMd};
  margin: 0 auto;
`

export const CenaryText = styled.p`
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-weight: 400;
  max-width: 330px;

  strong {
    font-weight: 700;
  }

  span {
    color: #e2a141;
    font-weight: 700;
  }
`

export const TotalDebt = styled.h1`
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 27px;
  font-weight: 700;
  text-align: center;
  width: 100%;
`

export const SourceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;
  width: fit-content;
  text-align: left;
  margin: 0 auto;
`

export const SourceText = styled.p`
  text-align: left;
  width: 100%;

  color: #fff;
`

export const RankingContent = styled.div`
  width: 100%;
  max-width: ${tokens.breakpoints.desktopMd};
  margin: 0 auto;

  /* display: flex;
  flex-direction: row;
  justify-content: space-between; */

  /* display: grid; */
  grid-template-columns: 1fr 1fr;
  gap: 32px;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
    gap: 0;
    grid-gap: 60px;
    padding: 0 20px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 60px;
  }
`

export const RankingInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  flex-shrink: 0;

  @media (max-width: 920px) {
    width: 100%;
    max-width: 100vw;
    padding: 0 20px;
  }
`

export const RankingChart = styled.div`
  width: 100%;
  flex-shrink: 0;
  display: flex;
`

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

export const WhyToSellContainer = styled.div`
  background-color: #dbdbdb;
  padding: 72px 20px;
`

export const WhyToSellContent = styled.div`
  width: 100%;
  margin: 0 auto;
`

export const WhyToSellList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 28px;
  max-width: ${tokens.breakpoints.desktopMd};
  margin: 72px auto 0;
`

export const WhyToSellItem = styled.li`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
`

export const WhyToSellItemIcon = styled.div`
  width: 45px;
  height: 45px;
`

export const WhyToSellItemText = styled.p`
  color: #202428;
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-weight: 400;

  span {
    font-weight: 700;
  }
`

export const WhyToSellCta = styled.button`
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
  background-color: #e2a141;
  transition: 0.3s;
  width: fit-content;
  padding: 12px 24px;
  margin: 0 auto;

  :hover {
    background-color: #555f63;
  }
`

export const StepsSubtitle = styled.h2`
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
`

export const StepsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  margin-top: 42px;
  margin-bottom: 32px;

  padding-bottom: 32px;
  border-bottom: 1px solid #fff;

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
`

export const StepsItemIcon = styled.div`
  width: 45px;
  height: 45px;
  color: #ccc;
`

export const StepsInfoText = styled.p`
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 400;
`
