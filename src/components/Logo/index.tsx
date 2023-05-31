import Image from "next/image"
import React from "react"

import * as S from "./styles"

const Logo: React.FC = () => {
  return (
    <S.Container>
      <Image
        width={192}
        height={62}
        src="https://images.unsplash.com/photo-1685371863623-effd71822cf2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=1000&q=60"
        alt="logo"
        style={{
          objectFit: "cover",
        }}
      />
    </S.Container>
  )
}

export default Logo
