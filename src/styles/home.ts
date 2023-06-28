import styled from "styled-components"
import { tokens } from "../utils/tokens"

export const Container = styled.div`
  height: fit-content;
  width: 100vw;
  background-color: #f8f8f8;
  margin-top: 120px;
  margin-bottom: 60px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: ${tokens.breakpoints.desktopMd};
  margin: 0 auto;

  @media (max-width: ${tokens.breakpoints.desktop}) {
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
    /* text-decoration: underline; */
    font-family: ${tokens.font.family.lastica};
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
  cursor: context-menu;

  span {
    font-size: ${tokens.font.sizes.sm};
    color: ${tokens.colors.brand.pure};

    font-family: ${tokens.font.family.bebas};
  }
`

export const CardContainer = styled.div`
  max-width: 100vw;
  width: 100%;
`

export const CardTitle = styled.h1`
  font-size: 40px;
  font-weight: 600;
  line-height: 38px;
  max-width: ${tokens.breakpoints.desktopMd};
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
  /* transition: all 0.3s ease; */
  cursor: pointer;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  &:hover {
    animation: fadein 1s;
    background-color: ${tokens.colors.brand.pure};
    div {
      color: #fff;
    }
    svg {
      filter: brightness(100%) contrast(100%);
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
    filter: invert(40%) sepia(10%) saturate(654%) hue-rotate(96deg)
      brightness(90%) contrast(94%);
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

export const VideoTitle = styled.h1`
  color: ${tokens.colors.brand.dark};
  font-family: ${tokens.font.family.lastica};
  font-size: 35px;
  font-weight: ${tokens.font.weight.bold};
  line-height: 50px;
  text-align: center;

  margin-bottom: 20px;
`

export const ChooseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 120px;
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

  max-width: ${tokens.breakpoints.desktopMd};
  width: 100%;
  margin: 70px auto 0;

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

  display: flex;
  flex-direction: column;
  gap: 40px;

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

export const FaqContainer = styled.div`
  padding: 90px 0 80px;
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
  max-width: ${tokens.breakpoints.desktopMd};
  margin: 0 auto;

  padding-top: 40px;
  padding-bottom: 60px;

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
