import { newsInterface } from "@/interfaces/news.interface"
import { Entry, EntrySkeletonType, createClient } from "contentful"
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
  toastMessage: null | string
  setToastMessage: (value: null | string) => void
  showToast: boolean
  setShowToast: (value: boolean) => void
  type: string
  setType: (value: string) => void
  setNewsList: (value: any[]) => void
  newsList: Entry<EntrySkeletonType, undefined, string>[]
  getNewsList: () => void
}

const AppContext = createContext<AppContextProps>({} as any)

export function AppProvider({ children }: any) {
  const [isTop, setIsTop] = useState<boolean>(true)
  const [isScrollingTop, setIsScrollingTop] = useState<boolean>(true)
  const [screenSizeW, setScreenSizeW] = useState(window.innerWidth)
  const [screenSizeH, setScreenSizeH] = useState(window.innerHeight)
  const [menuOpened, setMenuOpened] = useState(false)
  const [submenuOpened, setSubmenuOpened] = useState<number | null>(null)
  const [toastMessage, setToastMessage] = useState<null | string>(null)
  const [showToast, setShowToast] = useState<boolean>(false)
  const [type, setType] = useState<string>("")

  const [newsList, setNewsList] = useState<Entry<EntrySkeletonType, undefined, string>[]>([])

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

  const getNewsList = async () => {
    if (!newsList.length) {
      const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID || "",
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
      })

      const res = await client.getEntries({ content_type: "newsArticle" })
      
      const newsList = res.items
      
      
      setNewsList(newsList)
    }
  }

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
    newsList,
    setNewsList,
    getNewsList,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  return useContext(AppContext)
}
