import styled from "styled-components";

export const WhatContainer = styled.div`
  background-color: #e3dcd7;

  padding: 60px 0;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 768px) {
    padding: 60px 0 40px;
    background-color: transparent;
    width: 80%;
    margin: 0 auto;
  }
`