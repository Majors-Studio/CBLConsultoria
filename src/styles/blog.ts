import styled from "styled-components";

export const BlogContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ImageContainer = styled.div`
  max-width: 100vw;
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
  gap: 45px;

  margin-bottom: 120px;

  @media (max-width: 768px) {
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
  background-position: center;
  background-size: cover;
`;

export const UserComment = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999;
`;
