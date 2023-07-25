import { tokens } from "@/utils/tokens"
import styled from "styled-components"

export const List = styled.ul`
  margin-top: ${tokens.space.sizeXl};

  box-shadow: 0px 3px 10px 0px #00000029;
`

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 0 ${tokens.space.sizeXxs} ${tokens.space.sizeXxxs};

  height: 100%;

  transition: max-height 0.4s ease-in-out;

  background-color: ${tokens.colors.neutral.highPure};
  overflow: hidden;

  border-bottom: 3px solid ${tokens.colors.brand.pure};
`

export const Header = styled.div`
  height: ${tokens.space.sizeXxl};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
`

export const Icon = styled.div`
  width: ${tokens.space.sizeXxs};
  height: ${tokens.space.sizeXxs};
`
