import { tokens } from "@/utils/tokens";
import styled from "styled-components";


export const CenaryInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

export const CenaryTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 72px;
  width: 100%;

  padding: 0 24px;
  max-width: ${tokens.breakpoints.desktopMd};
  margin: 0 auto;
`

export const CenaryText = styled.p`
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-weight: 400;
  max-width: 330px;

  strong {
    font-weight: 700;
  }

  span {
    color: #e2a141;
    font-weight: 700;
  }
`

export const TotalDebt = styled.h1`
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 27px;
  font-weight: 700;
  text-align: center;
  width: 100%;
`

export const SourceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;
  width: fit-content;
  text-align: left;
  margin: 0 auto;
`

export const SourceText = styled.p`
  text-align: left;
  width: 100%;

  color: #fff;
`