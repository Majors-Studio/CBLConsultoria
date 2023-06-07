import React from "react";
import * as C from "./styles";

interface CardProps {
  title: string;
  description: string;
}

export default function Card({ title, description }: CardProps) {
  return (
    <C.CardContainer>
      <C.Title>{title}</C.Title>
      <C.Description>{description}</C.Description>
    </C.CardContainer>
  );
}
