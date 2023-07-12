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

const Precatory: React.FC = () => {
  return (
    <>
      <HeadBanner title="Precatórios" />

      <WhatIsPrecatory />

      <div id="data" />
      <DebitCenary />

      <WhyBetter />

      <NationalRanking />

      <div id="benefits" />
      <WhyToSell />

      <WhyToInvest />

      <EvoluctionChart />

      <SellSteps />

      <Purpose />
    </>
  );
};

export default Precatory;
