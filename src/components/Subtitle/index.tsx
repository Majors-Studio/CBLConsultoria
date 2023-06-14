import React from "react";
import * as C from "./styles";
import { iProps } from "./styles";

interface SubtitleProps extends iProps {
  text?: string;
  fontWeight?: string;
  color?: string;
  marginBottom?: string;
}

const Subtitle: React.FC<SubtitleProps> = ({
  text,
  fontSize,
  fontWeight,
  color,
  marginBottom,
}) => {
  return (
    <C.Subtitle
      style={{
        fontSize: fontSize,
        fontWeight: fontWeight,
        color: color,
        marginBottom: marginBottom,
      }}
    >
      {text}
    </C.Subtitle>
  );
};

export default Subtitle;
