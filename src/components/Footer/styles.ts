import { tokens } from "@/utils/tokens"
import styled from "styled-components"

export const BiggerText = styled.h1`
  color: ${tokens.colors.brand.light};
  font-size: ${tokens.font.sizes.md};
  font-weight: ${tokens.font.weight.bold};

  @media (max-width: ${tokens.breakpoints.tablet}) {
    font-size: ${tokens.font.sizes.sm};
  }
`

export const Text = styled.h2`
  color: ${tokens.colors.brand.light};
  font-size: ${tokens.font.sizes.xxs};
`

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

  @media (max-width: ${tokens.breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
  }
`

export const MidiaItems = styled.div`
  display: flex;
  align-items: center;
  gap: ${tokens.space.sizeXxxs};
`

export const MidiaItem = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

export const Subtitle = styled.p`
  color: ${tokens.colors.brand.light};
  font-size: ${tokens.font.sizes.xs};
  font-weight: ${tokens.font.weight.regular};
  line-height: ${tokens.font.sizes.md};
`

export const InfoText = styled.p`
  color: ${tokens.colors.brand.light};
  font-size: ${tokens.font.sizes.xxs};
  font-weight: ${tokens.font.weight.regular};
  line-height: ${tokens.font.sizes.md};
`
