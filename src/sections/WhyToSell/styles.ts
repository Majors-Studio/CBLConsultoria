import { tokens } from "@/utils/tokens"
import styled from "styled-components"

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
  color: ${tokens.colors.brand.lightCream};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  @media (max-width: ${tokens.breakpoints.desktop}) {
    width: 35px;
    height: 35px;
  }
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
