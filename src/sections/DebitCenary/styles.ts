import { tokens } from "@/utils/tokens";
import styled from "styled-components";

export const CenaryInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const CenaryTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap: 24px;

  max-width: ${tokens.breakpoints.desktopMd};
  margin: 0 auto;

  @media (max-width: ${tokens.breakpoints.tablet}) { 
    gap: 32px;
    padding: 0;
    flex-direction: column;
  }

`;

export const CenaryText = styled.p`
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-weight: 400;
  max-width: 330px;

  strong {
    font-weight: 700;
  }

  span {
    color: #D6DAE3;
    font-weight: 700;
  }
`;

export const SourceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const SourceText = styled.p`
  text-align: left;
  width: 100%;

  color: #fff;
`;
