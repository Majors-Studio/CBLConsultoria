import { tokens } from "@/utils/tokens"
import styled from "styled-components"

export interface IContainerProps {
  bgColor?: string
  py?: string
}

export const Container = styled.div<IContainerProps>`
position: relative;
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : "transparent"};
  padding-top: ${(props) => (props.py ? props.py : 0)};
  padding-bottom: ${(props) => (props.py ? props.py : 0)};
  padding-left: 20px;
  padding-right: 20px;
`

export const Content = styled.div`
  max-width: ${tokens.breakpoints.desktopMd};
  margin: 0 auto;
`
