import React from "react"

import HeadBanner from "@/components/HeadBanner"
import DebitCenary from "@/sections/DebitCenary"
import NationalRanking from "@/sections/NationalRanking"
import WhyToSell from "@/sections/WhyToSell"
import WhatIsPrecatory from "@/sections/WhatIsPrecatory"
import SellSteps from "@/sections/SellSteps"
import { Faq, WhyBetter } from "@/sections"
import PurposePrecatory from "@/sections/PurposePrecatory"

const Precatory: React.FC = () => {
  return (
    <>
      <HeadBanner title={"Precatórios"} />

      <WhatIsPrecatory />

      <SellSteps />
      
      <WhyToSell />
      
      <WhyBetter />

      <DebitCenary />
      
      <NationalRanking />

      <Faq />
      
      <PurposePrecatory />
    </>
  )
}

export default Precatory
