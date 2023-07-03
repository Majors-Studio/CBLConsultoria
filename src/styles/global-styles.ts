import {createGlobalStyle, css} from 'styled-components'
import { lenisScroll } from '@/animations/style/scroll'
// Style Lib

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}
body {
  overflow-x: hidden;
  width: 100vw;
  height: 100vh;
  background-color: #324f87;
  position: relative;
}

    ${lenisScroll}
`