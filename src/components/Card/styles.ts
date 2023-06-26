import styled from "styled-components";
import { tokens } from "../../utils/tokens";

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

  &:hover {
    background-color: ${tokens.colors.brand.pure};
    div {
      color: #fff;
    }
    svg {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg)
        brightness(100%) contrast(100%);
    }
    h1 {
      color: #fff;
    }
    p {
      color: #fff;
    }
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${tokens.colors.brand.pure};
  margin-bottom: 16px;
`;

export const Description = styled.p`
  font-size: 19.2px;
  font-weight: 400;
  color: #333;
  margin-bottom: 16px;

  font-family: "Montserrat", Sans-serif;
`;

export const CardIndex = styled.div`
  color: ${tokens.colors.brand.pure};
  font-family: "Montserrat", sans-serif;
  font-size: 55px;
  font-weight: 600;
  line-height: 55px;
  text-align: right;

  position: absolute;
  bottom: 15px;
  right: 32px;
`;
