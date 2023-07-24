import { tokens } from "@/utils/tokens"
import styled from "styled-components"

export const Midia = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${tokens.space.sizeXs};
  max-width: 350px;

  @media (max-width: ${tokens.breakpoints.desktop}) {
    flex-direction: column;
    align-items: center;
    gap: ${tokens.space.sizeXxs};
  }
`

export const MidiaItem = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: ${tokens.colors.brand.light};
`

export const ContainerInfo = styled.div`
  display: flex;
  gap: ${tokens.space.sizeMd};
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${tokens.space.sizeXxs};

  @media (max-width: ${tokens.breakpoints.tablet}) {
    gap: 12px;
    margin-top: ${tokens.space.sizeXxs};
  }
`
