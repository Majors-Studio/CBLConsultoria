import React from "react";

import HeadBanner from "@/components/HeadBanner";
import DebitCenary from "@/sections/DebitCenary";
import NationalRanking from "@/sections/NationalRanking";
import WhyToSell from "@/sections/WhyToSell";
import WhatIsPrecatory from "@/sections/WhatIsPrecatory";
import WhyToInvest from "@/sections/WhyToInvest";
import SellSteps from "@/sections/SellSteps";
import Purpose from "@/sections/Purpose";
import EvoluctionChart from "@/sections/EvoluctionChart";
import { WhyBetter } from "@/sections";
import Anchor from "@/components/Anchor";

const Precatory: React.FC = () => {
  return (
    <>
      <HeadBanner title="Precatórios" />

      <WhatIsPrecatory />

      <DebitCenary />

      <WhyBetter />

      <NationalRanking />

      
      <WhyToSell />

      <WhyToInvest />

      <EvoluctionChart />

      <SellSteps />

      <Purpose />
    </>
  );
};

export default Precatory;
