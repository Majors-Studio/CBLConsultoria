import styled from "styled-components";

export const BlogContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 600px;

  margin-bottom: 120px;
`;

export const PostsContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 80px;

  margin-bottom: 120px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
  background-position: center;
  background-size: cover;
`;
