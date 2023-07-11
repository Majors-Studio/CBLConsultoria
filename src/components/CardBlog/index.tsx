import React from "react"
import * as C from "./styles"

interface CardBlogProps {
  text: string
  src: string
}

const CardBlog: React.FC<CardBlogProps> = ({ text, src }) => {
  return (
    <C.Container>
      {src ? (
        <C.Image src={src} alt="blog_image" />
      ) : (
        <C.NoImage>Imagem não encontrada</C.NoImage>
      )}
      <C.Text>{text}</C.Text>
    </C.Container>
  )
}

export default CardBlog
