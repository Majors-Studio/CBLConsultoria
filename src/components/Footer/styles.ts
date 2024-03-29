import { tokens } from "@/utils/tokens";
import styled from "styled-components";

export const Midia = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${tokens.space.sizeXs};
  max-width: 350px;

  @media (max-width: ${tokens.breakpoints.desktop}) {
    flex-direction: column;
    align-items: center;
    gap: ${tokens.space.sizeXxs};
    max-width: 100%;
  }
`;

export const MidiaItem = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: ${tokens.colors.neutral.highPure};
`;

export const ContainerInfo = styled.div`
  display: flex;
  gap: ${tokens.space.sizeMd};
  flex-wrap: wrap;
  width: fit-content;
  margin-top: 30px;


  @media (max-width: ${tokens.breakpoints.desktop}) {
    max-width: 100%;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: ${tokens.space.sizeXxs};

  @media (max-width: ${tokens.breakpoints.desktop}) {
    gap: 12px;
    margin-top: ${tokens.space.sizeXxs};
  align-items: center;

  }
`;
