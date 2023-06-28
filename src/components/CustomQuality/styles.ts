import { tokens } from "@/utils/tokens"
import styled from "styled-components"

export const Container = styled.div``

export const Content = styled.div`
  max-width: ${tokens.breakpoints.desktopMd};
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: flex-start;
`

export const Item = styled.div`
  display: flex;
  max-width: 100vw;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-direction: column;
  width: 100%;
  padding: 30px;
`
