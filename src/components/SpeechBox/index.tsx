import React from "react";

import * as S from "./styles";
import TriangleDownIcon from "@/assets/icons/TriangleDownIcon";

interface SpeechBoxProps {
  text: string;
}

const SpeechBox: React.FC<SpeechBoxProps> = ({ text }) => {
  return (
    <S.Container>
      <S.SpeechBox>
        <S.SpeechBoxText>{text}</S.SpeechBoxText>
      </S.SpeechBox>
      <S.SpeechBoxArrow>
        <TriangleDownIcon />
      </S.SpeechBoxArrow>
    </S.Container>
  );
};

export default SpeechBox;
