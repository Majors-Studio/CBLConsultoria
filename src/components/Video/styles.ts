import { tokens } from "@/utils/tokens"
import styled from "styled-components"

export const VideoWrapper = styled.div`
  width: 100%;
  height: 400px;
  margin: 10px auto;
  border-radius: ${tokens.border.radius.md};
  overflow: hidden;

  @media (min-width: ${tokens.breakpoints.desktop}) {
    height: 300px;
  }

  @media (min-width: ${tokens.breakpoints.tablet}) {
    height: 200px;
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
