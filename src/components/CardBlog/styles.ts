import styled from "styled-components";

export const CardContainer = styled.div`
  width: 300px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 10px;

  border-bottom: 2px solid #7a4726;
`;

export const AboutText = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  color: #333;
  margin-bottom: 10px;
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  object-fit: cover;
  background-position: center;
`;
