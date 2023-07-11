import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
scroll-behavior: smooth !important;
}


body {
  overflow-x: hidden;
  width: 100vw;
  height: 100vh;
  background-color: #324f87;
  position: relative;

  &::-webkit-scrollbar {
  width: 0.5rem;

  &-track {
    background: #f1f1f1;
  }

  &-thumb {
    background: #888;
    border-radius: 0.5rem;

    &:hover {
      background: #555;

    }
  }

  }
}

`
