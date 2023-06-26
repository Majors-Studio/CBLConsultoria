import styled from "styled-components"

export const BlogContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto 60px;
  display: flex;
  flex-direction: column;
  gap: 4rem;

`

export const PostsContainer = styled.div`
  width: 100%;
  height: fit-content;
  gap: 45px;


  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

@media (max-width: 1200px) {
  padding: 0 20px;
}
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-height: 250px;

  object-fit: cover;
  background-position: center;
  background-size: cover;
`
