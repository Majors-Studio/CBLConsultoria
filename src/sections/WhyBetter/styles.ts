import { tokens } from "@/utils/tokens";
import styled from "styled-components";

export const ChooseList = styled.ul`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

export const ChooseItem = styled.li`
  background-color: #fff;

  border-radius: 20px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
`;

export const ChooseItemTitle = styled.h1`
  background-color: ${tokens.colors.brand.cta};
  color: ${tokens.colors.brand.light};
  font-family: ${tokens.font.family.primary};
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;
  text-align: center;
  padding: 20px 12px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-inline: 2rem;
`;

export const ChooseItemList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
  padding: 40px 35px;
`;

export const ChooseItemListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const ChooseItemListItemStatus = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
`;
