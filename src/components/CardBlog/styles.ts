import styled from "styled-components";

export const CardContainer = styled.div`
  width: 370px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 10px;

  border-bottom: 2px solid #7a4726;
  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;

export const AboutText = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  color: #333;
  margin-bottom: 10px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-height: 250px;
  object-fit: cover;
  border-radius: 10px;
  object-fit: cover;
  background-position: center;
  background-size: cover;
`;