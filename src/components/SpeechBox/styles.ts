import styled from "styled-components";
import { tokens } from "@/utils/tokens";
export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
`;

export const SpeechBox = styled.div`
  background-color: #121212;
  border-radius: 10px;
  padding: 20px;
`;

export const SpeechBoxText = styled.p`
  color: ${tokens.colors.neutral.highPure};
  font-family: ${tokens.font.family.secondary};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5em;
  margin-bottom: 0;
  margin-top: 0;
  text-align: center;
  text-justify: inter-word;
  word-break: break-word;
  hyphens: auto;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const SpeechBoxArrow = styled.div`
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 25px;
  height: 25px;
`;
