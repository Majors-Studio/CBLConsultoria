import { tokens } from "@/utils/tokens"
import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth !important;

  &::-webkit-scrollbar {
  width: 0.5rem;

  &-track {
    background: #f1f1f1;
    border-radius: 0.5rem;

  }

  &-thumb {
    background: #888;
    border-radius: 0.5rem;

    &:hover {
      background: #555;

    }
  }

  }

  &::placeholder {
    color: ${tokens.colors.neutral.lowLight} !important;
    font-family: ${tokens.font.family.primary}, sans-serif !important;
  }
}

body {
  overflow-x: hidden;
  width: 100vw;
  height: 100vh;
  background-color: #324f87;
  position: relative;
}

`
