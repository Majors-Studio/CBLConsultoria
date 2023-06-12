import styled from "styled-components"

export const Container = styled.div`
  height: fit-content;
  width: 100vw;
  background-color: #f2f2f2;

  margin-top: 120px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`

export const Head = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  margin-top: 100px;
  margin-bottom: 180px;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 120px;

  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`

export const InfoTitle = styled.h1`
  font-size: 35px;
  font-weight: 600;
  line-height: 38px;
  max-width: 520px;
  width: 100%;
  text-align: left;
`

export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const PrecatoryInfoItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`

export const CtaButton = styled.button`
  width: 192px;
  height: 39px;
  background-color: #7a4726;
  border-radius: 50px;
  border: none;
  color: #fff;
`

export const PurposeContainer = styled.div``

export const CardContainer = styled.div``

export const CardTitle = styled.h1`
  font-size: 35px;
  font-weight: 600;
  line-height: 38px;
  max-width: 1200px;
  width: 100%;
  color: #111111;
  text-align: center;

  span {
    color: #7a4726;
  }
`

export const Cards = styled.div`
  margin: 60px 0;

  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: space-between;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 280px;
  height: 415px;
  background: #ffffff;
  box-shadow: -1px 3px 10px 0px #000;
  border-radius: 20px;

  position: relative;

  padding: 50px 20px;
`

export const CardIcon = styled.div`
  width: 50px;
  height: 50px;
`

export const CardInfo = styled.div``

export const CardInfoTitle = styled.h1`
  color: #7a4726;
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;

  margin: 30px 0 36px;
`

export const CardInfoDescription = styled.p`
  color: #000000;
  font-family: "Montserrat", Sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5em;
  text-align: center;
`

export const CardIndex = styled.div`
  color: #7a4726;
  font-family: "Montserrat", sans-serif;
  font-size: 55px;
  font-weight: 600;
  line-height: 55px;
  text-align: right;

  position: absolute;
  bottom: 15px;
  right: 32px;
`

export const VideoContainer = styled.div``

export const VideoWrapper = styled.div``

export const VideoTitle = styled.h1`
  color: #121212;
  font-family: "Montserrat", sans-serif;
  font-size: 35px;
  font-weight: 600;
  line-height: 50px;
  text-align: center;
`

export const VideoCta = styled.button``

export const ChooseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 120px;
`

export const ChooseTitle = styled.h1`
  color: #121212;
  font-family: "Montserrat", sans-serif;
  font-size: 35px;
  font-weight: 600;
  line-height: 50px;
  text-align: center;
`

export const ChooseSubtitle = styled.h1`
  color: #121212;
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;

  margin-top: 20px;
`

export const ChooseList = styled.ul`
  margin-top: 30px;

  display: flex;
  flex-direction: row;
  gap: 20px;
`

export const ChooseItem = styled.li`
  background-color: #fff;
`

export const ChooseItemTitle = styled.h1`
  background-color: #7a4726;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;
  text-align: center;
  padding: 20px 0;
`

export const ChooseItemList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
  padding: 80px 50px;
`

export const ChooseItemListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`

export const ChooseItemListItemStatus = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
`

export const ChooseItemListItemText = styled.p``

export const WhyContainer = styled.div`
  background-color: #121212;
  width: 100%;

  padding: 70px 0;
`

export const WhyTitle = styled.h1`
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 40px;
  font-weight: 600;
  line-height: 40px;
  text-align: center;
`

export const WhyList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;

  margin-top: 70px;
`

export const WhyItem = styled.li`
  display: flex;
  flex-direction: row;
  gap: 35px;
  flex-shrink: 0;
  background-color: #fff;
  padding: 26px 20px 40px;
  border-radius: 10px;
`

export const WhyItemIcon = styled.div`
  background-color: #f2eae6;
  width: 72px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`

export const WhyItemTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const WhyItemTitle = styled.h1`
  color: #121212;
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  font-weight: 700;
`

export const WhyItemDescription = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5em;
  color: #121212;
`

export const WhatContainer = styled.div`
  background-color: #e3dcd7;

  padding: 90px 0 60px;
  width: 100%;
`

export const WhatTitle = styled.h1`
  color: #121212;
  font-family: "Montserrat", sans-serif;
  font-size: 40px;
  font-weight: 600;
  line-height: 40px;
  text-align: center;
`

export const WhatList = styled.ul`
  width: 100%;
  max-width: 800px;
  margin: 80px auto 0;
`

export const WhatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

export const WhatTexts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const WhatName = styled.h1`
  margin-top: 12px;
`

export const WhatPlace = styled.h1``

export const FaqContainer = styled.div`
  padding: 90px 20px 80px;
  width: 100%;
`

export const FaqTitle = styled.h1`
  color: #121212;
  font-family: "Montserrat", sans-serif;
  font-size: 36px;
  font-weight: 600;
  text-align: center;
`

export const FaqDescription = styled.p`
  color: #121212;
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`
