"use client";

import { montserrat, poppins } from "@/pages/_app";

export const tokens = {
  breakpoints: {
    mobile: "480px",
    tablet: "768px",
    desktop: "1024px",
    desktopMd: "1280px",
    desktopLg: "1440px",
  },
  colors: {
    brand: {
      pure: "#8c9cb9",
      medium: "#808cbc",
      low: "#D6DAE3",
      cta: "#253861",
      lightCream: "#F8F8F8",
      dark: "#292929",
    },
    highlight: {
      dark: "#121212",
      medium: "#666666",
      pure: "#F5F5F5",
    },
    neutral: {
      lowPure: "#000000",
      lowLight: "#A3A3A3",
      lowMedium: "#666666",
      lowDark: "#292929",
      highPure: "#FFFFFF",
      highLight: "#F5F5F5",
      highMedium: "#E0E0E0",
      highDark: "#CCCCCC",
    },
    feedback: {
      errorPure: "#EA1F1F",
      errorLight: "#FDC4C4",
      errorMedium: "#F05656",
      errorDark: "#710A0A",
      successPure: "#3AA141",
      successLight: "#D2EFD4",
      successMedium: "#78CE7E",
      successDark: "#205A24",
    },
    chart: {
      0: "#D6DAE3",
      1: "#8C9CB9",
      2: "#808CBC",
      3: "#6C7FA0",
      4: "#5C6A8A",
      5: "#4C5574",
      6: "#3C405E",
      7: "#2C2A48",
      8: "#1C1A32",
      9: "#0C081C",
    }
  },
  font: {
    family: {
      primary: montserrat.style.fontFamily,
      secondary: poppins.style.fontFamily,
    },
    weight: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
    sizes: {
      xxs: "14px",
      xs: "16px",
      sm: "20px",
      md: "24px",
      lg: "32px",
      xl: "48px",
      xxl: "55px",
    },
  },
  space: {
    sizeQuarck: "4px",
    sizeNano: "8px",
    sizeXxxs: "16px",
    sizeXxs: "24px",
    sizeXs: "32px",
    sizeSm: "40px",
    sizeMd: "48px",
    sizeLg: "56px",
    sizeXl: "64px",
    sizeXxl: "80px",
    sizeXxxl: "120px",
    sizeHuge: "160px",
    sizeGiant: "200px",
  },
  spaceNumber: {
    sizeQuarck: 4,
    sizeNano: 8,
    sizeXxxs: 16,
    sizeXxs: 24,
    sizeXs: 32,
    sizeSm: 40,
    sizeMd: 48,
    sizeLg: 56,
    sizeXl: 64,
    sizeXxl: 80,
    sizeXxxl: 120,
    sizeHuge: 160,
    sizeGiant: 200,
  },
  extraSpace: {
    typeString: {
      borderBottomTab: "2px",
    },
    typeNumber: {
      borderBottomTab: 2,
    },
  },
  border: {
    radius: {
      none: 0,
      sm: 2,
      md: 8,
      lg: 16,
      pill: 500,
      circular: 50,
    },
    width: {
      none: 0,
      hairline: 1,
      thin: 2,
      thick: 4,
      heavy: 8,
    },
    opacityLevel: {
      semiopaque: 0.72,
      intense: 0.64,
      medium: 0.32,
      light: 0.16,
      semitransparent: 0.08,
    },
  },
  opacityLevel: {
    semiopaque: 0.72,
    semiopaqueHex: "B8",
    intense: 0.64,
    intenseHex: "A3",
    medium: 0.32,
    mediumHex: "52",
    light: 0.16,
    lightHex: "29",
    semitransparent: 0.08,
    semitransparentHex: "14",
  },
};
