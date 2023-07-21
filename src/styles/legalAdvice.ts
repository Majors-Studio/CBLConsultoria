import styled from "styled-components"
import { tokens } from "@/utils/tokens"

interface IProps {
  bgColor?: string
  textColor?: string
}

export const BoxText = styled.div`
  display: flex;
  max-width: 500px;
  flex-direction: column;
  gap: 65px;

  @media (max-width: ${tokens.breakpoints.tablet}) {
    max-width: 100%;
    gap: 20px;
  }
`

export const CivelListInfoItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  cursor: context-menu;
`

export const BoxImage = styled.div`
  width: 500px;
  height: 100%;

  @media (max-width: ${tokens.breakpoints.tablet}) {
    width: 100%;
  }
`
