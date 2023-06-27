import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 24px;
  height: 20px;
  cursor: pointer;
  z-index: 999;

  .line.open.line-1 {
    transform: rotate(45deg) translate(6px, 5px);
  }

  .line.open.line-2 {
    opacity: 0;
  }

  .line.open.line-3 {
    transform: rotate(-45deg) translate(7px, -7px);
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: #fff;
  transition: all 0.3s ease-in-out;
`;
