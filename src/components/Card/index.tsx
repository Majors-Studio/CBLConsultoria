import React from "react";
import * as C from "./styles";

interface CardProps {
  title: string;
  description: string;
  index: number;
}

export default function Card({ index, title, description }: CardProps) {
  return (
    <C.CardContainer>
      <C.Title>{title}</C.Title>
      <C.Description>{description}</C.Description>
      <C.CardIndex>{index + 1}</C.CardIndex>
    </C.CardContainer>
  );
}
