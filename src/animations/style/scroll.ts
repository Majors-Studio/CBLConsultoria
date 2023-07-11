import { css } from "styled-components";

export const lenisScroll = css`
  /* Lenis Scrool */
  html.lenis {
    height: auto;
  }

  .lenis.lenis-smooth {
    scroll-behavior: smooth;
  }

  .lenis.lenis-smooth [data-lenis-prevent] {
    overscroll-behavior: contain;
  }

  .lenis.lenis-stopped {
    overflow: hidden;
  }

  .lenis.lenis-scrolling iframe {
    pointer-events: none;

  }
`;
