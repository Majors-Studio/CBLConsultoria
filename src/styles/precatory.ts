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
