import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 280px;
  height: 415px;
  background: #ffffff;
  box-shadow: -1px 3px 10px 0px #000;
  border-radius: 20px;

  position: relative;

  padding: 50px 20px;
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
  color: #7a4726;
  margin-bottom: 16px;
`;

export const Description = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #333;
  margin-bottom: 16px;

  font-family: "Montserrat", Sans-serif;
`;

export const CardIndex = styled.div`
  color: #7a4726;
  font-family: "Montserrat", sans-serif;
  font-size: 55px;
  font-weight: 600;
  line-height: 55px;
  text-align: right;

  position: absolute;
  bottom: 15px;
  right: 32px;
`;
