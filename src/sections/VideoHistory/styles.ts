import { tokens } from "@/utils/tokens";
import styled from "styled-components";

export const ShowMoreButton = styled.button`
  color: ${tokens.colors.brand.pure};
  font-size: ${tokens.font.sizes.xs};
  font-weight: ${tokens.font.weight.bold};
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin: 0 auto;
  margin-top: 50px;
  font-family: ${tokens.font.family.secondary};

  display: flex;
  align-items: center;
  justify-content: center;
`