import styled from "styled-components";

export const ButtonWpp = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #25d366;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  z-index: 9999;

  &:hover {
    transform: scale(1.1);
  }
`;
