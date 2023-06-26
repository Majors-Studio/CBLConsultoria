"use client";

import { useState, useEffect } from "react";

export function setWindowWidth(
  width: number,
  minWidth: number,
  maxWidth: number
) {
  switch (true) {
    case !minWidth:
      return width <= maxWidth;
    case !maxWidth:
      return width >= minWidth;
    default:
      return width >= minWidth && width <= maxWidth;
  }
}

export function useDevice() {
  const [width, setWidth] = useState(0);

  const resizeHandler = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    resizeHandler();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  const device = {
    isMobile: setWindowWidth(width, 0, 768),
    isTablet: setWindowWidth(width, 769, 1200),
    isDesktop: setWindowWidth(width, 1201, 0),
  };

  return { isMobile: device.isMobile, isTablet: device.isTablet, isDesktop: device.isDesktop };
}
