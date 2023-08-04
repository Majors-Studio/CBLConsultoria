import { tokens } from "@/utils/tokens"
import styled from "styled-components"

export const CenaryInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

export const CenaryTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap: 24px;

  margin: 0 auto;

  @media (max-width: ${tokens.breakpoints.desktop}) {
    gap: 32px;
    padding: 0;
    flex-direction: column;
  }
`

export const SourceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  margin-top: 64px;

  @media (max-width: ${tokens.breakpoints.desktop}) {
  margin-top: 24px;

  }
`
