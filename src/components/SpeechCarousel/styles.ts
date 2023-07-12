import { tokens } from "@/utils/tokens";
import styled from "styled-components";

export const WhatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

@media (max-width: ${tokens.breakpoints.desktopMd}) {
  margin: 0 20px;


}
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
  color: #121212;
  font-family: ${tokens.font.family.primary};
`;

export const WhatPlace = styled.h2`
  color: ${tokens.colors.brand.dark};
  font-family: ${tokens.font.family.secondary};
  font-size: ${tokens.font.sizes.xxs};
`