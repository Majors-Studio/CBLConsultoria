import styled from "styled-components"
import { tokens } from "../../utils/tokens"

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: fit-content;
  background: #ffffff;
  box-shadow: -1px 3px 10px 0px #000;
  border-radius: ${tokens.border.radius.lg}px;

  position: relative;

  margin: 20px 0;
  padding: 50px 20px;

  transition: all 0.3s ease-in-out;
  animation: fade-in 4s;

  cursor: pointer;

  &:hover {
    background-color: ${tokens.colors.brand.pure};
    h1,
    div,
    p {
      color: ${tokens.colors.brand.light};
    }
    svg {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg)
        brightness(100%) contrast(100%);
    }
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`

export const Title = styled.h1`
  font-size: ${tokens.font.sizes.md};
  font-weight: ${tokens.font.weight.bold};
  color: ${tokens.colors.brand.pure};
  margin-bottom: ${tokens.space.sizeXxxs};
  font-family: ${tokens.font.family.primary};
`

export const Description = styled.p`
  font-size: ${tokens.font.sizes.sm};
  font-weight: ${tokens.font.weight.regular};
  color: ${tokens.colors.highlight.medium};
  margin-bottom: ${tokens.space.sizeXxxs};
  font-family: ${tokens.font.family.secondary};
`

export const CardIndex = styled.div`
  color: ${tokens.colors.brand.pure};
  font-size: ${tokens.font.sizes.xxl};
  font-weight: ${tokens.font.weight.bold};
  line-height: 55px;
  text-align: right;
  font-family: ${tokens.font.family.primary};

  position: absolute;
  bottom: ${tokens.space.sizeXxxs};
  right: ${tokens.space.sizeXs};
`
