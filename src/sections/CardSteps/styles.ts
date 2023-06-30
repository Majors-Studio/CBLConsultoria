import { tokens } from "@/utils/tokens"
import styled from "styled-components"

export const Cards = styled.div`
  margin: 60px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 380px;
  background: #ffffff;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  border-radius: 20px;
  position: relative;
  padding: 50px 20px;
  /* transition: all 0.3s ease; */
  cursor: pointer;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  &:hover {
    animation: fadein 1s;
    background-color: ${tokens.colors.brand.pure};
    div {
      color: #fff;
    }
    svg {
      filter: brightness(100%) contrast(100%);
    }
    h1 {
      color: #fff;
    }
    p {
      color: #fff;
    }
  }
`

export const CardIcon = styled.div`
  width: 50px;
  height: 50px;
  svg {
    filter: invert(40%) sepia(10%) saturate(654%) hue-rotate(96deg)
      brightness(90%) contrast(94%);
  }
`

export const CardIndex = styled.div`
  color: ${tokens.colors.brand.pure};
  font-family: ${tokens.font.family.primary};
  font-size: 30px;
  font-weight: 600;
  line-height: 55px;
  text-align: right;

  position: absolute;
  bottom: 10px;
  right: 20px;
`
