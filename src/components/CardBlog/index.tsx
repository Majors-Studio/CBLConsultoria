import React from "react";
import * as C from "./styles";

interface CardBlogProps {
  text: string;
  src: string;
}

const CardBlog: React.FC<CardBlogProps> = ({ text, src }) => {
  return (
    <C.CardContainer>
      <C.Image src={src} alt="blog_image" />
      <C.AboutText>{text}</C.AboutText>
    </C.CardContainer>
  );
};

export default CardBlog;
