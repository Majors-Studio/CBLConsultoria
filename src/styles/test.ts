import styled from "styled-components"

interface ContainerProps {
  active?: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  width: 100px;
  height: 100px;
  margin-top: 200px;

  ${({ active }) =>
    active &&
    `
    background-color: blue;
  `}
`

export const Title = styled.h1
