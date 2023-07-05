import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
`;


export const ArrowDown = styled.a`
  position: absolute;
  bottom: 50px;
  display: flex;
  justify-content: center;
  z-index: 999;



  cursor: pointer;
  transition: 0.3s;
  animation: ${bounce} 1s infinite;

  height: 60px;
  width: 60px;
  
  @media (max-width: 768px) {
    height: 50px;
    width: 50px;
  }
`
