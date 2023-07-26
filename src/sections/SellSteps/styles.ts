import { tokens } from "@/utils/tokens";
import styled from "styled-components";

export const StepsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin: 32px 0;

  @media (max-width: ${tokens.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${tokens.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const StepsItemIcon = styled.div`
  width: 45px;
  height: 45px;
`;

export const StepItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 1px solid ${tokens.colors.brand.cta};
  padding: 24px;
  border-radius: 8px;
`;
