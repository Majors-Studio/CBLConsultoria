import { tokens } from "@/utils/tokens"
import styled from "styled-components"

export const List = styled.ul`
  margin-top: 60px;

  box-shadow: 0px 3px 10px 0px #00000029;
`

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 0 20px 20px;

  height: 100%;

  transition: max-height 0.4s ease-in-out;

  background-color: #fff;
  overflow: hidden;

  border-bottom: 3px solid ${tokens.colors.brand.pure};
`

export const Header = styled.div`
  height: 84px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
`

export const Icon = styled.div`
  width: 20px;
  height: 20px;
`
