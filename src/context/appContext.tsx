import { newsTextMock } from "@/utils/newsTextMock"
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react"

interface AppContextProps {
  newsList: {
    id: number
    image: string
    title: string
    date: Date
    author: string
    text: string
    source: string
    link: string
  }[]
  userList: {
    id: number
    name: string
    city: string
    state: string
    country: string
    text: string
    avatar: string
  }[]
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
    setScreenSizeW(window.innerWidth)
    setScreenSizeH(window.innerHeight)
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

  const userList = [
    {
      id: 0,
      name: "João da Silva",
      city: "São Paulo",
      state: "SP",
      country: "Brasil",
      text: "“A Harmony me ajudou a realizar o sonho de comprar a minha casa própria. Foi tudo muito rápido e seguro, recomendo!”",
      avatar:
        "   /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1633332755192-727a05c4013d%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D60&w=128&q=75",
    },
  ]

  const newsList = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJsb2d8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      title:
        "Precatórios Sob a Perspectiva dos Grandres Mestres: Aprendendo com Graham, Fisher e Lynch",
      date: new Date(),
      author: "João da Silva",
      text: newsTextMock,
      source: "Google",
      link: "https://www.google.com",
    },
  ]

  for (let i = 0; i < 5; i++) {
    newsList.push(newsList[0])
    userList.push(userList[0])
  }

  const value = {
    newsList,
    userList,
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
