import React from "react";
import * as C from "./styles";
import { iTitle } from "./styles";
interface TitleProps extends iTitle {
  text?: string;
  fontWeight?: string;
  color?: string;
  position?: string | any;
  top?: string;
  left?: string;
  transform?: string;
}

const Title: React.FC<TitleProps> = ({
  text,
  fontSize,
  fontWeight,
  color,
  position,
  top,
  left,
  transform,
}) => {
  return (
    <C.Title
      style={{
        fontSize: fontSize,
        fontWeight: fontWeight,
        color: color,
        position: position,
        top: top,
        left: left,
        transform: transform,
      }}
    >
      {text}
    </C.Title>
  );
};

export default Title;
