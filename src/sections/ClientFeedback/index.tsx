import React from 'react';

import * as S from './styles';
import { Title } from '@/components';
import SpeechCarousel from '@/components/SpeechCarousel';
import { useApp } from '@/context/appContext';

const ClientFeedback: React.FC = () => {
  const { userList } = useApp()
    
  return         <S.WhatContainer>
          <Title variant="tertiary">
            O que os clientes dizem sobre a Harmony
          </Title>
          <SpeechCarousel data={userList} />
        </S.WhatContainer>;
}

export default ClientFeedback;