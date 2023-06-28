import React from "react";
import * as C from "@/styles/legalAdvice"
import Image from "next/image"
import PurposeForm from "@/components/PurposeForm";
import HeadBanner from "@/components/HeadBanner";


const LegalAdvice: React.FC = () => { 
  return (
  <>
    <HeadBanner title='Consultoria juridica' source="https://source.unsplash.com/featured" color="#fff"/>
    <C.ContainerFluid>
      <C.Container>
        <C.BoxText>
          <C.Title>
          REGULARIZAÇÃO DE IMÓVEIS
          </C.Title>
          <C.Text>
          Regularizamos qualquer problema com seu imóvel. Você sabia que a regularização do seu imóvel, urbano ou rural, é capaz de valorizá-lo em até 50%? Além disso, traz uma série de benefícios na alienação e sucessão desses bens.
          <br />
          <br />
          Os donos de imóveis rurais são impedidos de participar de privilégios na obtenção de créditos.
          Resguarde o seu patrimônio e regularize agora o seu imóvel
          </C.Text>
        </C.BoxText>
      </C.Container>
    </C.ContainerFluid>
  </>
  )
}
export default LegalAdvice