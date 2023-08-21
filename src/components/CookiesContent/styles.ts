import styled from "styled-components";

export const Container = styled.div`
  background-color: rgb(0, 0, 0);
  color: #fff;
  padding: 20px;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 10px;

  width: 450px;
  height: 200px;
  border: 1px solid #222;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  z-index: 99999;
`;

export const Title = styled.p`
  font-size: 20px;
  font-weight: 700;
  text-align: left;
  width: 100%;
`;

export const Description = styled.p`
  font-size: 15px;
  font-weight: 400;
  margin-top: 15px;
`;

export const InputArea = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
  justify-content: flex-end;
  width: 100%;
`;

export const AcceptButton = styled.button`
  color: #fff;
  background-color: rgb(37, 56, 97);
  padding: 5px 10px;
  border: 1px solid #333;
  border-radius: 5px;
  cursor: pointer;
`;

export const DeclineButton = styled.button`
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
`;
