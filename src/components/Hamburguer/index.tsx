import React, { useState } from "react";

import * as S from "./styles";

interface HamburgerProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  style?: React.CSSProperties;
}

const Hamburguer: React.FC<HamburgerProps> = ({ isOpen, setIsOpen,style }) => {
  const handleClick = (): void => {
    setIsOpen(!isOpen);
  };
  return (
    <S.Container onClick={()=>handleClick()} style={style}>
      <S.Line className={`line${isOpen ? " open" : ""} line-1`}></S.Line>
      <S.Line className={`line${isOpen ? " open" : ""} line-2`}></S.Line>
      <S.Line className={`line${isOpen ? " open" : ""} line-3`}></S.Line>
    </S.Container>
  );
};

export default Hamburguer;
