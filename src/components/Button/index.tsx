"use client";

import React from "react";
import * as C from "./styles";
export interface iButton {
  bgColor?: string;
  color?: string;
  fontWeight?: string;
  bgHover?: string;
  text?: string;
  padding?: string;
}

const Button: React.FC<iButton> = ({
  text,
  bgColor,
  color,
  fontWeight,
  bgHover,
}) => {
  return (
    <C.Button
      style={{
        backgroundColor: bgColor,
        color: color,
        fontWeight: fontWeight,
      }}
      bgHover="#000"
    >
      {text}
    </C.Button>
  );
};

export default Button;
