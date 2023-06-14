import React from "react"
import * as C from "@/styles/precatory"
import Image from "next/image"

const Precatory: React.FC = () => {
  return (
    <>
      <C.ContainerImg>
        <C.BannerImage src="https://source.unsplash.com/featured" alt="bg" />
        <C.ContainerText>
          <h1>teste</h1>
        </C.ContainerText>
      </C.ContainerImg>

      <C.WhatIs>
        <C.WhatIsContent>
          <C.WhatIsQuestion>O que é um precatório?</C.WhatIsQuestion>
          <C.WhatIsAnswerContainer>
            <C.WhatIsAnswer style={{ marginBottom: 42 }}>
              Precatórios são requisições de pagamento expedidas pelo Judiciário
              para cobrar de municípios, estados ou da União, assim como de
              autarquias, fundações e universidades, o pagamento de valores
              devidos após condenação judicial definitiva.
            </C.WhatIsAnswer>

            <C.WhatIsAnswer style={{ marginBottom: 42 }}>
              Estas ações dividem-se em duas categorias:
            </C.WhatIsAnswer>

            <C.WhatIsCategories style={{ marginBottom: 42 }}>
              <C.WhatIsCategory>
                <C.WhatIsCategoryTitle>Comuns</C.WhatIsCategoryTitle>
                <C.WhatIsAnswer>
                  Desapropriação, tributações, entre outros (para pessoas
                  jurídicas é muito comum).
                </C.WhatIsAnswer>
              </C.WhatIsCategory>
              <C.WhatIsCategory>
                <C.WhatIsCategoryTitle>Alimentares</C.WhatIsCategoryTitle>
                <C.WhatIsAnswer>
                  Originam de questões salariais, pensões, aposentadorias,
                  verbas de sustento em geral, entre outros.
                </C.WhatIsAnswer>
              </C.WhatIsCategory>
            </C.WhatIsCategories>

            <C.WhatIsAnswer>
              O pagamento dos precatórios obedece uma ordem cronológica e uma
              ordem de prioridade. Porém o pagamento da dívida é extremamente
              moroso e incerto.
            </C.WhatIsAnswer>
          </C.WhatIsAnswerContainer>
        </C.WhatIsContent>
      </C.WhatIs>
    </>
  )
}

export default Precatory
