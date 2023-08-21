import React from "react";
import * as C from "./styles";

export interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  variant?: "primary" | "secondary" | "tertiary";
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({
  children,
  style,
  variant = "primary",
}) => {
  return (
    <C.Title variant={variant} style={style}>
      {children}
    </C.Title>
  );
};

export default Title;
