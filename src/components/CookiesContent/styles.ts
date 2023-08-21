import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  padding: 20px;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 10px;

  width: 450px;
  height: 200px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);

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
  border-radius: 5px;
  font-size: 19px;
  letter-spacing: 2px;
  cursor: pointer;
`;

export const DeclineButton = styled.button`
  color: #000;
  padding: 5px 15px;
  font-size: 19px;
  border-radius: 5px;
  letter-spacing: 2px;
  cursor: pointer;
`;
