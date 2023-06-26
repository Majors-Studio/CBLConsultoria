import styled from "styled-components";

export const ButtonWpp = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  z-index: 9999;
  animation: fade-bottom 0.5s ease-in-out;

  @keyframes fade-bottom {
    from {
      transform: translateY(100px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const IconWpp = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
