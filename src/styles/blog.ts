import { tokens } from "@/utils/tokens"
import styled from "styled-components"

export const BlogContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-bottom: 60px;
`

export const PostsContainer = styled.div`
  width: 100%;
  max-width: ${tokens.breakpoints.desktopMd};
  margin: 0 auto;
  height: fit-content;
  gap: 45px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  @media (max-width: ${tokens.breakpoints.desktop}) {
    padding: 0 20px;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-height: 340px;
  margin-top: 120px;

  object-fit: cover;
  background-position: center;
  background-size: cover;
`
