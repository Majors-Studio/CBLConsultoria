import { tokens } from "@/utils/tokens"
import styled from "styled-components"

export const BlogContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`


export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin: 1rem 0;
  color: #000;
  text-align: center;

  font-family: ${tokens.font.family.primary};


`

export const Button = styled.button`
  width: 100%;
max-width: 20rem;
  height: 3rem;
  background-color: ${tokens.colors.brand.cta};
  color: ${tokens.colors.neutral.highPure};

  font-size: 1.2rem;
  font-weight: 700;
  font-family: ${tokens.font.family.primary};

  border: none;
  border-radius: 0.5rem;

  padding: 0 1rem;
`

