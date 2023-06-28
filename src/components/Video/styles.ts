import { tokens } from "@/utils/tokens"
import styled from "styled-components"

export const VideoWrapper = styled.div`
  width: 100%;
  margin: 10px auto;
  border-radius: 5px;
  overflow: hidden;

  @media (min-width: 768px) {
    height: 200px;
  }

  @media (min-width: 1024px) {
    height: 300px;
  }

  @media (min-width: 1440px) {
    height: 400px;
  }
`

export const NoVideo = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${tokens.colors.neutral.highDark};
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
`
