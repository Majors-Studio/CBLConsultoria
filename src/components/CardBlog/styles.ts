import styled from "styled-components"
import { tokens } from "@/utils/tokens"
export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: ${tokens.space.sizeXxxs};

  border-bottom: 2px solid ${tokens.colors.brand.pure};
  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`

export const Text = styled.p`
  font-size: 1.2rem;
  font-weight: ${tokens.font.weight.regular};
  color: ${tokens.colors.highlight.medium};
  margin-bottom: ${tokens.space.sizeNano};
  font-family: ${tokens.font.family.secondary};
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-height: 250px;
  min-height: 250px;
  object-fit: cover;
  border-radius: ${tokens.border.radius.md}px;
  object-fit: cover;
  background-position: center;
  background-size: cover;
`

export const NoImage = styled.div`
  width: 100%;
  height: 100%;
  max-height: 250px;
  min-height: 250px;
  display: flex;
  justify-content: center;

  background-color: ${tokens.colors.neutral.lowLight};
  border-radius: ${tokens.border.radius.md}px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${tokens.font.sizes.xs};
  color: ${tokens.colors.neutral.lowDark};
  font-weight: ${tokens.font.weight.regular};
  line-height: 30px;
  font-family: ${tokens.font.family.secondary};
`
