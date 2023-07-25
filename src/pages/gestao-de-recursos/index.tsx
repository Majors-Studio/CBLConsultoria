import HeadBanner from "@/components/HeadBanner"
import PurposeResources from "@/sections/PurposeResources"
import WhatIsResources from "@/sections/WhatIsResources"
import React from "react"

const Gestao: React.FC = () => {
  return (
    <>
      
      <HeadBanner title='Gestão de Recursos'/>
      <WhatIsResources />

      <PurposeResources />
    </>
  )
}

export default Gestao
