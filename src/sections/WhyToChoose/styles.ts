import { tokens } from "@/utils/tokens";
import styled from "styled-components";

export const WhyList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;

  margin-top: 70px;

  @media (max-width: 920px) {
    grid-gap: 10px;
    margin-top: 24px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const WhyItem = styled.li`
  display: flex;
  flex-direction: row;
  gap: 35px;
  flex-shrink: 0;
  background-color: #fff;
  padding: 26px 20px 40px;
  border-radius: 10px;
`;

export const WhyItemIcon = styled.div`
  width: 55px;
  height: 55px;

  flex-shrink: 0;
`;

export const WhyItemTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const WhyItemDescription = styled.p`
  font-family: ${tokens.font.family.secondary};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5em;
  color: #121212;
`;
