import { tokens } from "@/utils/tokens"
import styled from "styled-components"

export const BoxImage = styled.div`
  width: 450px;
  height: 300px;
  /* overflow: hidden; */

  @media (max-width: ${tokens.breakpoints.desktop}) {
    width: 100%;
  }
`

export const BoxText = styled.div`
  display: flex;
  max-width: 500px;
  flex-direction: column;

  @media (max-width: ${tokens.breakpoints.desktop}) {
    max-width: 100%;
  }
`
