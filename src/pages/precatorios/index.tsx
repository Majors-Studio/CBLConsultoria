import React from "react";

import HeadBanner from "@/components/HeadBanner";
import DebitCenary from "@/sections/DebitCenary";
import NationalRanking from "@/sections/NationalRanking";
import WhyToSell from "@/sections/WhyToSell";
import WhatIsPrecatory from "@/sections/WhatIsPrecatory";
import SellSteps from "@/sections/SellSteps";
import { Faq, WhyBetter } from "@/sections";
import PurposeForm from "@/components/PurposeForm";

const Precatory: React.FC = () => {
  return (
    <>
      <HeadBanner title="Precatórios" />

      <WhatIsPrecatory />

      <DebitCenary />

      <WhyBetter />

      <NationalRanking />
      
      <WhyToSell />
      
      <SellSteps />

      <Faq />

      <PurposeForm />
    </>
  );
};

export default Precatory;
