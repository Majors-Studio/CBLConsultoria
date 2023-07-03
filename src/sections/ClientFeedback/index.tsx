import React from "react";

import * as S from "./styles";
import { Title } from "@/components";
import SpeechCarousel from "@/components/SpeechCarousel";
import { useApp } from "@/context/appContext";
import { useDevice } from "@/hooks/useDevice";

const ClientFeedback: React.FC = () => {
  const { userList } = useApp();
  const { isDesktop } = useDevice();

  return (
    <S.WhatContainer>
      <Title variant={isDesktop ? "tertiary" : "secondary"}>
        O que os clientes dizem sobre a Harmony
      </Title>
      <SpeechCarousel data={userList} />
    </S.WhatContainer>
  );
};

export default ClientFeedback;
