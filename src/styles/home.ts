import styled from "styled-components"
import { tokens } from "../utils/tokens"

export const Container = styled.div`
  height: fit-content;
  width: 100vw;
  background-color: #f8f8f8;
  margin-top: 120px;

  @media (max-width: 768px) {
    /* padding: 0 20px; */
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    padding: 0 20px;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`

export const Head = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  margin-top: 60px;
  margin-bottom: 120px;
  padding: 0 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  margin-top: 60px;

  @media (max-width: 1024px) {
    margin-top: 0;
  }
`

export const InfoTitle = styled.h1`
  font-size: ${tokens.font.sizes.xl};
  font-weight: ${tokens.font.weight.medium};
  line-height: 1.2;
  font-family: ${tokens.font.family.lastica};
  width: 100%;
  text-align: left;
  color: ${tokens.colors.brand.pure};
  font-size: ${tokens.font.sizes.xl};
  strong {
    text-decoration: underline;
  }
`

export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 768px) {
  }
`

export const PrecatoryInfoItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  font-size: ${tokens.font.sizes.sm};
  color: ${tokens.colors.brand.pure};
  cursor: context-menu;
  &:hover {
    color: ${tokens.colors.brand.pure};
  }
`

export const CtaButton = styled.button`
  font-weight: 700;
  border-radius: 0.5rem;
  border: 2px solid ${tokens.colors.brand.pure};
  box-shadow: inset 0 0 0 0px ${tokens.colors.brand.pure};
  transition: border-radius 0.5s, box-shadow 0.5s, color 0.5s;
  transition-timing-function: cubic-bezier(0.7, 0, 0.2, 1);
  padding-inline: 1.5rem;
  height: 4.5rem;
  width: fit-content;
  font-size: 1.5rem;
  color: ${tokens.colors.brand.pure};
  &:hover {
    color: #e7e7e7;
    border-radius: 50%;
    box-shadow: inset 0 0 0 40px ${tokens.colors.brand.pure};
    transition-delay: 0s, 0s, 0.2s;
    border: 2px solid transparent;
  }
`

export const CardContainer = styled.div`
  max-width: 100vw;
  width: 100%;
  padding: 0 20px;
`

export const WhatName = styled.h1`
  margin-top: 12px;
  font-size: ${tokens.font.sizes.sm};
`

export const CardTitle = styled.h1`
  font-size: 40px;
  font-weight: 600;
  line-height: 38px;
  max-width: 1280px;
  width: 100%;
  color: #333;
  text-align: center;

  span {
    color: ${tokens.colors.brand.pure};
  }
`

export const Cards = styled.div`
  margin: 60px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 415px;
  background: #ffffff;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  border-radius: 20px;
  position: relative;
  padding: 50px 20px;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${tokens.colors.brand.pure};
    cursor: default;
    div {
      color: #fff;
    }
    svg {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg)
        brightness(100%) contrast(100%);
    }
    h1 {
      color: #fff;
    }
    p {
      color: #fff;
    }
  }
`

export const CardIcon = styled.div`
  width: 50px;
  height: 50px;
  svg {
    /* filter: invert(40%) sepia(10%) saturate(654%) hue-rotate(96deg)
      brightness(90%) contrast(94%); */
  }
`

export const CardInfo = styled.div``

export const CardInfoTitle = styled.h1`
  color: ${tokens.colors.brand.pure};
  font-family: "Montserrat", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
  margin: 30px 0 36px;
`

export const CardInfoDescription = styled.p`
  color: #333;
  font-family: "Montserrat", sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.2;
  text-align: center;
`

export const CardIndex = styled.div`
  color: ${tokens.colors.brand.pure};
  font-family: "Montserrat", sans-serif;
  font-size: 55px;
  font-weight: 600;
  line-height: 55px;
  text-align: right;

  position: absolute;
  bottom: 15px;
  right: 32px;
`

export const VideoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 120px 0;
`

export const VideoWrapper = styled.div`
  width: 100%;
`

export const VideoTitle = styled.h1`
  color: ${tokens.colors.brand.dark};
  font-family: ${tokens.font.family.lastica};
  font-size: 35px;
  font-weight: ${tokens.font.weight.bold};
  line-height: 50px;
  text-align: center;

  margin-bottom: 20px;
`

export const VideoCta = styled.button`
  font-weight: 700;
  font-size: 1.5rem;
  border-radius: 0.5rem;
  border: 2px solid ${tokens.colors.brand.pure};
  padding-inline: 1.5rem;
  height: 4.5rem;
  color: ${tokens.colors.brand.pure};
`

export const ChooseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 120px;
  padding: 0 20px;
`

export const ChooseTitle = styled.h1`
  color: ${tokens.colors.brand.dark};
  font-family: ${tokens.font.family.lastica};
  font-size: ${tokens.font.sizes.xl};
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

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`

export const ChooseItem = styled.li`
  background-color: #fff;

  border-radius: 20px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
`

export const ChooseItemTitle = styled.h1`
  background-color: ${tokens.colors.brand.pure};
  color: ${tokens.colors.brand.light};
  font-family: ${tokens.font.family.lastica};
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;
  text-align: center;
  padding: 20px 12px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-inline: 2rem;
`

export const ChooseItemList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
  padding: 40px 35px;
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

export const ChooseItemListItemText = styled.p`
  color: ${tokens.colors.brand.dark};
  font-family: ${tokens.font.family.lastica};
  font-size: 1.3rem;
  font-weight: 400;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 0;
    height: 1px;
    background-color: ${tokens.colors.brand.pure};
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    :before {
      width: 100%;
    }
  }
`

export const WhyContainer = styled.div`
  background-color: #121212;
  max-width: 100vw;
  width: 100%;

  padding: 70px 0;

  @media (max-width: 920px) {
  }
`

export const WhyTitle = styled.h1`
  color: ${tokens.colors.brand.light};
  font-family: ${tokens.font.family.lastica};
  font-size: ${tokens.font.sizes.xl};
  font-weight: 600;
  line-height: 40px;
  text-align: center;
`

export const WhyList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;

  max-width: 1280px;
  width: 100%;
  margin: 70px auto 0;
  padding: 0 20px;

  @media (max-width: 920px) {
    grid-gap: 10px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
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

  @media (max-width: 768px) {
    padding: 60px 0 40px;
    background-color: transparent;
    width: 80%;
    margin: 0 auto;
  }
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

export const WhatPlace = styled.h1`
  color: ${tokens.colors.brand.dark};
  font-family: ${tokens.font.family.lastica};
  font-size: ${tokens.font.sizes.xxs};
`

export const FaqContainer = styled.div`
  padding: 90px 20px 80px;
  width: 100%;
`

export const FaqTitle = styled.h1`
  color: ${tokens.colors.brand.dark};
  font-family: ${tokens.font.family.lastica};
  font-size: 36px;
  font-weight: ${tokens.font.weight.bold};
  text-align: center;
`

export const FaqDescription = styled.p`
  color: ${tokens.colors.brand.dark};
  font-family: ${tokens.font.family.lastica};
  font-size: ${tokens.font.sizes.sm};
  font-weight: 400;
  text-align: center;
`

export const FaqList = styled.ul`
  margin-top: 60px;

  box-shadow: 0px 3px 10px 0px #00000029;
`

export const FaqItem = styled.li`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  height: 100%;

  transition: max-height 0.4s ease-in-out;

  background-color: #fff;
  overflow: hidden;

  border-bottom: 3px solid ${tokens.colors.brand.pure};
`

export const FaqItemHeader = styled.div`
  height: 84px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;

  padding: 0 20px;
`

export const FaqItemTitle = styled.h1`
  color: ${tokens.colors.brand.dark};
  font-family: ${tokens.font.family.lastica};
  font-size: ${tokens.font.sizes.sm};
  font-weight: 700;
  line-height: 20px;
`

export const FaqItemIcon = styled.div`
  width: 20px;
  height: 20px;
`

export const FaqItemDescription = styled.p`
  padding: 0 20px 20px;
  height: fit-content;
  width: 100%;

  color: #686868;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5em;
`

export const FollowTitle = styled.h1`
  height: 220px;
  width: 100%;
  color: #000;
  font-family: "Montserrat", sans-serif;
  font-size: 36px;
  font-weight: 600;
  line-height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 24px;
  }
`

export const BlogContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;

  padding-top: 40px;
  padding-bottom: 60px;
  padding-left: 20px;
  padding-right: 20px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    padding-top: 20px;
    padding-bottom: 40px;
  }
`

export const BlogItem = styled.div`
  height: 440px;
  width: 100%;
  box-shadow: 0px 3px 10px 0px #00000029;
  background-color: #fff;
  border-radius: 28px;
  overflow: hidden;
  cursor: pointer;

  /* &:hover {
    transform: rotateY(180deg);
    transition: transform 0.6s;
  } */

  @media (max-width: 768px) {
    height: 420px;
    width: 75%;
    margin: 0 auto;
  }
`

export const BlogImageContainer = styled.div`
  width: 100%;
  height: 236px;
`

export const BlogImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const BlogTitle = styled.h1`
  padding: 40px 30px;
  color: ${tokens.colors.brand.pure};
  font-family: "Montserrat", sans-serif;
  font-size: 21px;
  font-weight: 600;
  line-height: 25px;
`

export const BlogLink = styled.a`
  padding: 0 30px;
  align-self: flex-end;

  color: ${tokens.colors.brand.pure};
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  text-transform: uppercase;

  @media (max-width: 920px) {
    align-self: center;
    display: block;
  }
`

export const BlogCta = styled.button`
  margin-bottom: 60px;
  width: 100%;
  max-width: 300px;
  height: 60px;
  border-radius: 10px;
  border: 2px solid ${tokens.colors.brand.pure};

  color: ${tokens.colors.brand.pure};
  font-family: ${tokens.font.family.interSemiBold};
  font-size: ${tokens.font.sizes.xs};
  font-weight: 700;
  line-height: 22px;
  text-transform: uppercase;

  transition: all 0.3s ease;

  &:hover {
    background-color: ${tokens.colors.brand.pure};
    color: #fff;
  }
`
