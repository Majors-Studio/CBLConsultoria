import { tokens } from "@/utils/tokens";
import styled from "styled-components";

export const AvatarName = styled.h3`
  font-size: ${tokens.font.sizes.sm};
  font-weight: ${tokens.font.weight.bold};
  max-width: 120px;
  text-align: center;
  color: ${tokens.colors.brand.cta};
  margin-top: 8px;
  font-family: ${tokens.font.family.secondary};
`;

export const AvatarCharge = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #000000;
  font-family: ${tokens.font.family.primary};
  margin-bottom: 20px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

export const List = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin-top: 20px;
`;
