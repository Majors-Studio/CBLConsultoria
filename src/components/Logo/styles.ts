import styled from "styled-components"
import { LogoProps } from "."

export const Container = styled.div<LogoProps>`
  display: flex;
  overflow: hidden;
  ${({ size }) =>
    size === "small" &&
    `
        height: 32px;
        width: 96px;
    `}
  ${({ size }) =>
    size === "medium" &&
    `
    height: 62px;
    width: 192px;
    `}
    ${({ size }) =>
    size === "large" &&
    `
    height: 92px;
    width: 288px;
    `}
`
