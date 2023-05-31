import React from "react";
import * as C from "./styles";
import { iProps } from "./styles";

interface SubtitleProps extends iProps {
  text?: string;
  fontWeight?: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ text, fontSize, fontWeight }) => {
  return (
    <C.Subtitle
      style={{
        fontSize: fontSize,
        fontWeight: fontWeight,
      }}
    >
      {text}
    </C.Subtitle>
  );
};

export default Subtitle;
