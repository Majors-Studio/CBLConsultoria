import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
`

export const ContainerImg = styled.div`
  width: 100vw;
  position: relative;
  margin-top: 120px;
  height: 340px;

  display: flex;
  /* justify-content: center; */
  align-items: center;
`

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  z-index: -1;

  /* opacity: 0.5; */
`

export const ContainerText = styled.h1`
  color: #e2a141;
  font-size: 55px;
  font-weight: 700;
  text-transform: capitalize;

  max-width: 1280px;
  margin: 0 auto;
  text-align: left;
  width: 100%;
`

export const WhatIs = styled.div`
  background-color: #0a0e11;
`

export const WhatIsContent = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 72px 0;

  display: flex;
  flex-direction: row;
`

export const WhatIsQuestion = styled.h1`
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 39px;
  font-weight: 700;

  border-right: 1px solid #e2a141;

  padding-right: 32px;
`

export const WhatIsAnswerContainer = styled.div`
  margin-left: 72px;
`

export const WhatIsAnswer = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  color: #cad0d4;
`

export const WhatIsCategories = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
`

export const WhatIsCategory = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
`

export const WhatIsCategoryTitle = styled.h1`
  color: #cad0d4;
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  border-bottom: 1px solid #e2a141;
  width: fit-content;
`

export const CenaryContainer = styled.div`
  background-color: #1f2428;
  padding: 72px 0;
`

export const CenaryContent = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`

export const CenaryTitle = styled.h1`
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 39px;
  font-weight: 700;
  text-align: center;
  max-width: 550px;
  margin: 0 auto 24px;

  padding-bottom: 32px;
  border-bottom: 1px solid #e2a141;
`

export const CenaryInfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`

export const CenaryTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 72px;
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
`

export const RankingContainer = styled.div`
  background-color: #282f35;
  padding: 72px 0 120px;
`

export const RankingContent = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const RankingInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`

export const RankingChart = styled.div`
  width: 390px;
  height: 390px;
`

export const RankingTitle = styled.h1`
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 39px;
  font-weight: 700;

  padding-bottom: 12px;
  border-bottom: 1px solid #e2a141;
  width: fit-content;
`

export const RankingText = styled.p`
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-weight: 400;

  max-width: 350px;

  span {
    color: #e2a141;
  }
`

export const NewsContainer = styled.div`
  background-color: #eeeeee;
  padding: 72px 0;
`

export const NewsContent = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 32px;
`

export const NewsInfos = styled.div``

export const NewsTitle = styled.h1`
  color: #090d10;
  font-family: "Montserrat", sans-serif;
  font-size: 39px;
  font-weight: 700;

  border-bottom: 3px solid #e2a141;
  width: fit-content;

  margin-bottom: 32px;
`

export const NewsText = styled.p`
  color: #090d10;
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-weight: 400;

  margin-bottom: 24px;

  span {
    color: #e2a141;
    font-weight: 700;
  }
`

export const NewsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
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
  max-width: 1280px;
  margin: 0 auto;
`

export const WhyToSellTitle = styled.h1`
  color: #e2a141;
  font-family: "Montserrat", sans-serif;
  font-size: 39px;
  font-weight: 700;
  text-align: center;
`

export const WhyToSellList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 72px;
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

export const StepsContainer = styled.div`
  background-color: #282f35;
  padding: 72px 20px;
`

export const StepsContent = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`

export const StepsTitle = styled.h1`
  color: #e2a141;
  font-family: "Montserrat", sans-serif;
  font-size: 39px;
  font-weight: 700;

  max-width: 650px;

  margin-bottom: 32px;
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

  padding-bottom: 32px;
  border-bottom: 1px solid #fff;
`

export const StepsItem = styled.li``

export const StepsItemIcon = styled.div`
  width: 45px;
  height: 45px;
`

export const StepsItemTitle = styled.h1`
  color: #e2a141;
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-weight: 700;

  height: 45px;
  max-width: 150px;

  margin-top: 12px;
  margin-bottom: 32px;
`

export const StepsItemText = styled.p`
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 17px;
  font-weight: 400;

  span {
    font-weight: 700;
  }
`

export const StepsInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  margin-top: 24px;
`

export const StepsInfoText = styled.p`
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 400;
`

export const LeadContainer = styled.div`
  background-color: #323a40;
  padding: 72px 20px;
`

export const LeadContent = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const LeadInfo = styled.div`

  margin-bottom: 64px;
`

export const LeadTitle = styled.h1`
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 39px;
  font-weight: 700;

  max-width: 350px;

  margin-bottom: 24px;
`

export const LeadText = styled.p`
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-weight: 400;

  max-width: 350px;

  span {
    color: #e2a141;
    font-weight: 700;
  }
`