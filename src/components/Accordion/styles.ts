import { tokens } from "@/utils/tokens";
import styled from "styled-components";

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