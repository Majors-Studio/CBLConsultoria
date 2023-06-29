import React from "react";
import * as C from "@/styles/legalAdvice"
import Image from "next/image"
import PurposeForm from "@/components/PurposeForm";
import HeadBanner from "@/components/HeadBanner";
import img1 from "../../assets/png/legal-advice.png"
import img2 from "../../assets/png/chaves.png"
import { tokens } from "@/utils/tokens"



const LegalAdvice: React.FC = () => { 
  return (
  <>
    <HeadBanner title='Consultoria juridica'  color="#fff"/>
    <C.ContainerFluid bgColor={`${tokens.colors.brand.pure}`}>
      <C.Container>
        <C.BoxText>
          <C.Title textColor={`${tokens.colors.brand.light}`}>
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
        <C.BoxImage>
          <Image src={img2} alt="regularizacao"   priority/>
        </C.BoxImage>
      </C.Container>
    </C.ContainerFluid>
    <C.ContainerFluid bgColor={`${tokens.colors.brand.lightCream}`}>
      <C.Container>
        <C.BoxImage>
          <Image src={img2} alt="regularizacao"   priority/>
        </C.BoxImage>
        <C.BoxText>
          <C.Title textColor={`${tokens.colors.brand.cta}`}>
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