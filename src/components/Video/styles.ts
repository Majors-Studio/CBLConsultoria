import { tokens } from "@/utils/tokens"
import styled from "styled-components"

export const VideoWrapper = styled.div`
  width: 100%;
  height: 400px;
  margin: 0 auto;
  border-radius: ${tokens.border.radius.lg}px;

  @media (max-width: ${tokens.breakpoints.tablet}) {
    height: 300px;
  }
`

export const NoVideo = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${tokens.colors.neutral.highDark};
  display: flex;
  justify-content: center;
  align-items: center;
`
