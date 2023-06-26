import React from "react"

import { useRouter } from "next/router"
import { useApp } from "@/context/contextApi"
import Image from "next/image"

import * as S from "@/styles/news_slug"
import Link from "next/link"

const Page: React.FC = () => {
  const { newsList } = useApp()
  const router = useRouter()
  const {
    query: { slug, id },
  } = router

  if (!id) return <p>Loading...</p>

  const post = newsList[+id]

  return (
    <S.Container>
      <S.Content>
        <S.Tab>
          <Link href="/">Home</Link>
          {">"}
          <Link href="/news">News</Link>
          {">"}
          <Link href={"/news/" + post.title}>{post.title}</Link>
        </S.Tab>
      </S.Content>
      <S.Content
        style={{
          flexDirection: "row",
        }}
      >
        <S.Grid>
          <S.Left></S.Left>
          <S.Right>
            <S.Image src={post.image} alt={post.title} />
            <S.Category>Notícia</S.Category>
            <S.Title>{post.title}</S.Title>
            <S.Description></S.Description>
            <S.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              commodi omnis officia repellat veniam, voluptatibus expedita harum
              at ipsam alias quia laborum facere explicabo similique tenetur
              eius iusto, ratione quos. Pariatur aspernatur soluta dolores
              aperiam vel deserunt porro, quam eum! Veniam pariatur porro
              mollitia tenetur! Excepturi vel, saepe quaerat quod reiciendis eos
              possimus numquam ipsum culpa facilis hic rerum dolorum!
              Repellendus cupiditate ullam delectus molestiae repellat ratione
              necessitatibus corrupti eveniet facilis, error corporis quasi?
              Corporis dignissimos itaque facere odit minima fuga illo modi,
              amet inventore cupiditate commodi quisquam aut optio! Esse quaerat
              nobis minima aspernatur assumenda dolore animi. Assumenda sapiente
              facere iste nulla laudantium, autem dolor commodi praesentium
              minima at sed inventore! Libero, dolores voluptatum repudiandae
              asperiores quos laudantium vitae. Vel consequuntur autem illo
              exercitationem minima quas, aperiam quaerat cumque dolor
              voluptatibus natus similique fugiat nulla error nam amet
              praesentium nesciunt veniam, culpa ut? Vel, dolor? Veritatis vero
              quaerat quos. Sint hic quae odio deserunt delectus sequi earum vel
              cumque. Repellat ad magnam incidunt laboriosam doloribus iste
              rerum, quod odio quam quis esse nihil, consequatur impedit ducimus
              delectus maiores excepturi! Expedita corrupti nam earum delectus!
              Minima temporibus fugiat autem beatae ex, omnis mollitia, nihil
              eaque adipisci, eius quaerat? Facilis sit, odit id non eos eaque
              animi recusandae earum quis iste. Ratione libero necessitatibus
              provident ex, eveniet illum quia dolorum minima aspernatur impedit
              voluptatibus totam aliquid! Vero distinctio repudiandae minus
              dolor quod aspernatur neque delectus facere! Velit molestiae magni
              rem dolorum. Nam natus, quidem voluptates praesentium sit aut
              porro laudantium itaque eius reiciendis cumque excepturi suscipit
              quas tenetur animi delectus necessitatibus facere, expedita
              ratione perspiciatis aliquam optio, ipsa molestias blanditiis.
              Harum. Rerum quis quam itaque esse, error asperiores eum ad
              voluptates necessitatibus, veritatis quaerat quia quas temporibus
              expedita aut? Ullam a impedit animi ducimus repudiandae adipisci
              fugiat necessitatibus sit molestias vel?
            </S.Text>
          </S.Right>
        </S.Grid>
      </S.Content>
    </S.Container>
  )
}

export default Page
