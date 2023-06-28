import { tokens } from "@/utils/tokens";
import styled from "styled-components";

export const WhatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const WhatTitle = styled.h1`
  color: #121212;
  font-family: "Montserrat", sans-serif;
  font-size: 40px;
  font-weight: 600;
  line-height: 40px;
  text-align: center;
`;

export const WhatTexts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WhatName = styled.h1`
  margin-top: 12px;
`;

export const WhatPlace = styled.h1`
  color: ${tokens.colors.brand.dark};
  font-family: ${tokens.font.family.primary};
  font-size: ${tokens.font.sizes.xxs};
`