import { tokens } from "@/utils/tokens"
import styled from "styled-components"

export const BoxImage = styled.div`
  width: 500px;
  height: 100%;

  @media (max-width: ${tokens.breakpoints.tablet}) {
    width: 100%;
  }
`

export const BoxText = styled.div`
  display: flex;
  max-width: 500px;
  flex-direction: column;

  @media (max-width: ${tokens.breakpoints.tablet}) {
    max-width: 100%;
  }
`
