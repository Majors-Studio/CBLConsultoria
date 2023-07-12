"use client";

/*
 * 
  Exemplos:
  
    Uso em uma props de css:
    
    Possibilidade 1:
      const Div = styled.div`
        background-color: ${tokens.colors.brand.pure}
      `
      
    Possibilidade 2 (desestruturando):
      const {
        brand: { pure },
      } = tokens.colors
      
      const Div = styled.div`
        background-color: ${pure}
      `
      
    Possibilidade 3 (desestruturando e renomeando):
      const {
        brand: { pure: brandPure },
      } = tokens.colors
      
      const Div = styled.div`
        background-color: ${brandPure}
      `
 */

import { bebasNeue, lastica, montserrat, poppins } from "@/pages/_app";

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
      // pure: "#253861",
      // medium: "#1D3A6E",
      // cta: "#11294f",
      pure: "#8c9cb9",
      medium: "#808cbc",
      cta: "#253861",
      light: "#fff",
      lightCream: "#F8F8F8",
      dark: "#000",
    },
    highlight: {
      dark: "#121212",
      medium: "#666666",
      light: "#FFFFFF",
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
  },
  shadow: {
    shadowLevel1: {
      shadowColor: "#707070",
      shadowOffset: {
        width: -2,
        height: 8,
      },
      shadowOpacity: 0.1,
      shadowRadius: 6,
      elevation: 1,
    },
    shadowLevel2: {
      shadowColor: "#707070",
      shadowOffset: {
        width: 4,
        height: 12,
      },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 1,
    },
    shadowLevel3: {
      shadowColor: "#707070",
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.25,
      shadowRadius: 14,
      elevation: 1,
    },
  },
  font: {
    family: {
      // primary: lastica?.style.fontFamily,
      // secondary: bebasNeue?.style.fontFamily,
      secondary: poppins.style.fontFamily,
      primary: montserrat.style.fontFamily,
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
