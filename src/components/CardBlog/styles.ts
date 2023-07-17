import styled from "styled-components"
import { tokens } from "@/utils/tokens"
export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  border-bottom: 2px solid ${tokens.colors.brand.pure};
  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`

export const Text = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  color: #333;
  margin-bottom: 10px;
  font-family: ${tokens.font.family.secondary};
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-height: 250px;
  min-height: 250px;
  object-fit: cover;
  border-radius: 10px;
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
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 18px;
  color: ${tokens.colors.neutral.lowDark};
  font-weight: 400;
  line-height: 30px;
  font-family: ${tokens.font.family.secondary};
`
