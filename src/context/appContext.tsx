import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react"

interface AppContextProps {
  isTop: boolean
  screenSizeW: number
  screenSizeH: number
  isScrollingTop: boolean
  menuOpened: boolean
  setMenuOpened: (value: boolean) => void
  submenuOpened: number | null
  setSubmenuOpened: (index: number | null) => void
}

const AppContext = createContext<AppContextProps>({} as any)

export function AppProvider({ children }: any) {
  const [isTop, setIsTop] = React.useState<boolean>(true)
  const [isScrollingTop, setIsScrollingTop] = React.useState<boolean>(true)
  const [screenSizeW, setScreenSizeW] = useState(0)
  const [screenSizeH, setScreenSizeH] = useState(0)
  const [menuOpened, setMenuOpened] = useState(false)
  const [submenuOpened, setSubmenuOpened] = useState<number | null>(null)

  useEffect(() => {
    const handleResize = () => {
      setScreenSizeW(window.innerWidth)
      setScreenSizeH(window.innerHeight)
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    let lastScrollTop = 0
    const handleScroll = () => {
      setMenuOpened(false)
      const st = window.pageYOffset || document.documentElement.scrollTop
      if (st > lastScrollTop) {
        setIsScrollingTop(st < 250)
      } else {
        setIsScrollingTop(true)
      }
      lastScrollTop = st <= 0 ? 0 : st
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const top = window.scrollY < 100
      if (top !== isTop) {
        setIsTop(top)
      }
    })
  }, [isTop])

  const value = {
    isTop,
    screenSizeH,
    screenSizeW,
    isScrollingTop,
    menuOpened,
    submenuOpened,
    setSubmenuOpened,
    setMenuOpened,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  return useContext(AppContext)
}
