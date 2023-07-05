import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";

interface AppContextProps {
  isTop: boolean;
  screenSizeW: number;
  screenSizeH: number;
  isScrollingTop: boolean;
  menuOpened: boolean;
  setMenuOpened: (value: boolean) => void;
  submenuOpened: number | null;
  setSubmenuOpened: (index: number | null) => void;
  toastMessage: null | string;
  setToastMessage: (value: null | string) => void;
  showToast: boolean;
  setShowToast: (value: boolean) => void;
  type: string;
  setType: (value: string) => void;
}

const AppContext = createContext<AppContextProps>({} as any);

export function AppProvider({ children }: any) {
  const [isTop, setIsTop] = useState<boolean>(true);
  const [isScrollingTop, setIsScrollingTop] = useState<boolean>(true);
  const [screenSizeW, setScreenSizeW] = useState(window.innerWidth);
  const [screenSizeH, setScreenSizeH] = useState(window.innerHeight);
  const [menuOpened, setMenuOpened] = useState(false);
  const [submenuOpened, setSubmenuOpened] = useState<number | null>(null);
  const [toastMessage, setToastMessage] = useState<null | string>(null);
  const [showToast, setShowToast] = useState<boolean>(false);
  const [type, setType] = useState<string>("");

  useEffect(() => {
    const handleResize = () => {
      setScreenSizeW(window.innerWidth);
      setScreenSizeH(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      setMenuOpened(false);
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        setIsScrollingTop(st < 250);
      } else {
        setIsScrollingTop(true);
      }
      lastScrollTop = st <= 0 ? 0 : st;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const top = window.scrollY < 100;
      if (top !== isTop) {
        setIsTop(top);
      }
    });
  }, [isTop]);

  const value = {
    isTop,
    screenSizeH,
    screenSizeW,
    isScrollingTop,
    menuOpened,
    submenuOpened,
    setSubmenuOpened,
    setMenuOpened,
    toastMessage,
    setToastMessage,
    showToast,
    setShowToast,
    type,
    setType,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  return useContext(AppContext);
}
