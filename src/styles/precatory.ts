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