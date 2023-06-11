import styled from "styled-components";

export const CardContainer = styled.div`
  width: 250px;
  margin: 0 auto;
  margin-bottom: 32px;
  background-color: #eee;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  animation: fade-in 4s;

  @keyframes fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #000;
  margin-bottom: 16px;
`;

export const Description = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #333;
  margin-bottom: 16px;
`;
