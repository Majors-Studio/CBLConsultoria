import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react"

interface AppContextProps {
  cardsList: {
    id: number
    title: string
    description: string
  }[]
  avatarData: {
    img: string
    name: string
    charge: string
  }[]
  whatList: {
    id: number
    name: string
    city: string
    state: string
    country: string
    text: string
    avatar: string
  }[]
  newsList: {
    id: number
    image: string
    title: string
    date: Date
    author: string
    text: string
  }[]
}

const AppContext = createContext<AppContextProps>({} as any)

export function AppProvider({ children }: any) {
  const cardsList = [
    {
      id: 0,
      title: "Início da nossa trajetória de sucesso",
      description:
        "Em 2009, demos nossos primeiros passos, dando início de um compromisso de excelência.",
    },
    {
      id: 1,
      title: "Profissionais especializados",
      description:
        "Nossa equipe é formada por profissionais especializados em precatórios, com mais de 10 anos de experiência no mercado.",
    },
    {
      id: 2,
      title: "Mais de R$ 1 bilhão negociados",
      description:
        "Já negociamos mais de R$ 1 bilhão em precatórios e contamos com a satisfação de mais de 7 mil clientes.",
    },
  ]

  const avatarData = [
    {
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      name: "Natália de Andrade",
      charge: "CEO",
    },
    {
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      name: "Vanda Dias",
      charge: "Sócia Diretora",
    },
    {
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      name: "Luis Ferraz",
      charge: "Jurídico",
    },
    {
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      name: "Cezar Malafaia",
      charge: "Jurídico",
    },
    {
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      name: "Carlos José",
      charge: "Sócio Diretor",
    },
    {
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      name: "Carlos José",
      charge: "Sócio Diretor",
    },
    {
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      name: "Carlos José",
      charge: "Sócio Diretor",
    },
    {
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      name: "Carlos José",
      charge: "Sócio Diretor",
    },
    {
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      name: "Carlos José",
      charge: "Sócio Diretor",
    },
    {
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      name: "Carlos José",
      charge: "Sócio Diretor",
    },
  ]

  const whatList = [
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
    {
      id: 1,
      name: "João da Silva 2",
      city: "Rio de Janeiro",
      state: "RJ",
      country: "Brasil",
      text: "“A Harmony me ajudou a realizar o sonho de comprar a minha casa própria. Foi tudo muito rápido e seguro, recomendo!”",
      avatar:
        "/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1633332755192-727a05c4013d%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D60&w=128&q=75",
    },
    {
      id: 2,
      name: "João da Silva 3",
      city: "Belo horizonte",
      state: "MG",
      country: "Brasil",
      text: "“A Harmony me ajudou a realizar o sonho de comprar a minha casa própria. Foi tudo muito rápido e seguro, recomendo!”",
      avatar:
        "/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1633332755192-727a05c4013d%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D60&w=128&q=75",
    },
  ]

  const newsText =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt exercitationem necessitatibus eaque placeat nam alias, at dolorum error aspernatur quasi recusandae consequatur, sit odit, ut nisi amet ratione? Earum, harum?      Similique assumenda sit qui minima ducimus deserunt, ipsa maxime? Dolorum atque quas quibusdam alias distinctio inventore culpa doloremque consequatur repudiandae sunt temporibus quia dolorem, totam voluptatum recusandae beatae reiciendis minima.      Natus nostrum corporis quisquam quo provident! Consectetur quo accusantium qui dignissimos quae asperiores ducimus, commodi ut harum voluptate quaerat modi. Praesentium blanditiis rem explicabo architecto consectetur minus amet soluta a?      Esse vero voluptatibus inventore, sapiente asperiores officia? Earum neque ipsam ad non aliquid atque harum, tempore optio, accusamus cum minus, delectus dolorum voluptate aperiam sapiente magnam deserunt id. Perferendis, non!      Illum quis, quae mollitia dolor laboriosam minima esse et provident! Accusamus voluptatum sint eveniet ea cumque corrupti, repudiandae, distinctio tempora rerum et perferendis adipisci, saepe quia vel officia quas. Repellendus.      Assumenda harum cupiditate soluta corporis eius cumque ab omnis ut exercitationem. Reiciendis maxime vel magni ipsam quidem aspernatur! Quisquam itaque cum iure! Reiciendis sequi et natus sed sint quasi blanditiis.      Voluptas neque aliquam eos perspiciatis harum exercitationem obcaecati saepe culpa provident sequi tempora repudiandae necessitatibus sint, qui voluptates minima numquam sit facere consequuntur veniam optio deserunt nobis. Ipsa, quisquam animi!      Sed perferendis tempore debitis, repudiandae, repellat harum enim quo itaque ratione mollitia exercitationem commodi totam alias delectus nesciunt! Accusamus error impedit ea, debitis sed totam minima aliquid explicabo. Officiis, expedita!      Debitis, autem earum harum totam quia quis optio similique. Nostrum, perspiciatis! Dolore, recusandae excepturi. Officiis, corporis vel odit accusantium ad officia, voluptatum sit excepturi sint, quae sed ipsam quibusdam odio.      Officiis mollitia at labore fuga reprehenderit perferendis quas, tempore nesciunt consequatur voluptatem qui asperiores, quam officia. Quae consequatur deleniti suscipit, accusamus consectetur pariatur voluptatibus minima quidem dicta aliquam! At, illum?      Debitis, tempora corrupti, id iusto explicabo aspernatur saepe minima blanditiis porro accusamus eligendi qui quaerat fuga laboriosam aut! Illum totam facere ex, ducimus eligendi libero nulla? Accusamus tenetur fugiat nostrum.      Nesciunt, molestias illum. Dolore neque repellendus minus nulla eligendi dolor autem ab adipisci ullam magni, quidem non facere aliquam architecto illum perferendis tempora voluptate voluptates reprehenderit doloremque exercitationem laboriosam assumenda.      Impedit ratione voluptas aperiam adipisci odit est placeat dicta, accusantium eum similique sunt et officiis tenetur at debitis nam magnam laboriosam! Molestias quo commodi, laborum voluptas debitis eos maxime accusamus.      Necessitatibus explicabo quasi totam corporis unde minus incidunt sequi fuga voluptatem doloremque, consequuntur quo dolorem reiciendis ab quidem, cumque aut temporibus exercitationem molestias delectus! Sapiente nesciunt hic veniam ipsum consequatur.      Animi id dicta cupiditate ipsam eligendi sed quae fugit sit. Veniam fugit voluptates nulla. Magni molestiae totam tempora ex debitis quibusdam cum porro? Doloremque voluptatem, numquam harum sit animi aliquam.      Voluptatum aspernatur enim ad alias sapiente error deleniti numquam iusto repellat voluptas vero doloribus laudantium soluta autem maxime animi quos ipsum nisi facilis, asperiores eum sit suscipit. Id, repellendus accusantium!      Dolor quod, assumenda eius aut, officiis, distinctio quidem a commodi odit ad maiores saepe tempora facere maxime unde. Maiores eveniet, sunt aperiam iure itaque voluptas autem eos eaque molestias dolor.      Aut ea voluptatum rem sed! Ut aspernatur consequatur numquam rerum, optio natus ducimus eligendi ullam iure tenetur aut error odio reiciendis reprehenderit. Voluptate dolores nesciunt nostrum sapiente amet praesentium reprehenderit?      Error alias nisi tempore, dolorem blanditiis quod aspernatur quis consequatur suscipit modi culpa. Laborum voluptatum earum repellendus commodi voluptates, facilis odio pariatur modi sit. Possimus laboriosam iste minima obcaecati repellat.      Assumenda dignissimos doloribus explicabo ducimus amet nesciunt quibusdam, pariatur vel nam a perferendis quo laudantium ex culpa! Labore, voluptatum blanditiis? Eius distinctio voluptatem officiis optio aperiam quo beatae quibusdam rem!      Velit non quo sint soluta beatae vel eligendi quod illum nostrum. Itaque maiores iusto asperiores quaerat odit vero! Quasi illo mollitia dicta voluptate ipsum. Itaque dolore ipsam culpa eum qui.      Iure excepturi iste nam consequuntur rem obcaecati. Dolorum explicabo perferendis, voluptas porro iste harum quaerat sunt, corrupti cumque a ut nihil nam odio dolorem iure in cum assumenda magni quae.      Voluptatibus alias vero pariatur inventore aliquid excepturi nihil delectus, porro aut, velit quo vitae veniam enim qui nostrum odio. Aut, nulla? Unde quisquam accusantium odio inventore necessitatibus. Ab, deleniti voluptatibus!      Doloribus consequatur beatae id perspiciatis officiis labore facere culpa, porro asperiores repudiandae aperiam, fugit eligendi hic ab quos dolore placeat debitis, atque ut? Dolorum est autem nemo ipsum libero incidunt.      Sed quaerat perspiciatis, tenetur deserunt qui ducimus animi totam minima laudantium architecto similique hic nam non. Incidunt, sit. Aliquam laudantium, id quaerat deserunt fuga error. Repudiandae eaque distinctio ea minima?      Enim error aspernatur sed illum officia a labore perferendis soluta rem nisi omnis, rerum quae quasi pariatur delectus tenetur vero ab impedit ut, iusto similique recusandae aperiam! Repellendus, sunt suscipit!      Libero quidem omnis ea, tenetur nobis similique cumque aliquid labore obcaecati, est, praesentium exercitationem officiis! Dignissimos quo cumque, quaerat consequuntur praesentium laudantium totam excepturi provident quisquam explicabo cupiditate iste tempora.      Quos magni suscipit eaque quia saepe dolore a consectetur quae provident quis quasi temporibus magnam eveniet corrupti facilis, commodi unde dolorem doloremque nemo pariatur alias architecto voluptas sint. Rem, sed?      Eum quos vitae modi deleniti dolores repudiandae velit quidem, suscipit, molestiae dicta esse eveniet assumenda fugit minus aspernatur veritatis voluptatibus perspiciatis obcaecati cumque reprehenderit aliquid iure debitis ut. Aliquam, officia!      Magnam dolorem assumenda doloribus eligendi beatae, eius esse dolorum recusandae expedita voluptate in deleniti non. Quisquam nam vitae impedit eveniet id, amet sit, laboriosam expedita itaque, voluptas dolorum. Laborum, nisi!      Repudiandae fugit ex est autem fugiat totam, maxime non beatae dolorum dignissimos doloribus debitis eligendi a dolorem distinctio voluptatibus veniam minima commodi alias qui. Veniam eveniet quod optio amet vel!      Adipisci maiores cumque culpa praesentium pariatur ipsam temporibus cupiditate, ipsa maxime dolorem, eveniet accusantium. Reiciendis nulla placeat optio voluptatem dolor! Dignissimos dolor distinctio pariatur maiores sapiente dolorum aperiam excepturi at.      Dolor aperiam provident corrupti ipsum sunt, ipsa reprehenderit officia obcaecati ab quae quam beatae qui aut debitis tempora voluptatibus itaque culpa hic quibusdam. Doloremque ipsam maxime id doloribus nihil vero.      Dolorum repudiandae nam numquam, a voluptate libero veritatis fugit? Ipsam quaerat quod ullam itaque! Quos, odit aperiam debitis, quibusdam saepe reiciendis eligendi sapiente labore ipsam, vero sunt sit nihil iste.      Quis unde ad tenetur explicabo provident incidunt ducimus asperiores numquam qui porro? Dolores, voluptatibus illum totam quaerat sit labore, quia magnam iste quasi et voluptas vitae aspernatur fugit ea ipsum!      Adipisci modi impedit numquam pariatur doloremque ipsum fugiat repellat et dicta vero exercitationem reiciendis esse, dolores assumenda expedita porro delectus incidunt autem velit quos. Voluptatibus minus tempore aspernatur explicabo delectus?      Esse, ipsum? Impedit temporibus nam et nihil accusantium vitae porro laudantium possimus fuga repudiandae recusandae repellat ducimus illum, corrupti odit ut aspernatur pariatur vero voluptatibus quibusdam soluta tenetur? Alias, harum?      Eius sit id odio laudantium, repellendus modi dolores, ullam corporis nesciunt officia impedit ea alias vero iusto tenetur nisi accusantium harum quasi doloribus quis mollitia aperiam a ab! Pariatur, ipsa.      Ipsa, fugit perferendis maiores, quibusdam et ex aperiam quaerat, perspiciatis quis dolor cum nulla est voluptatum odio labore vero qui reprehenderit quidem libero corrupti magnam. Sequi saepe quasi exercitationem sed?      Obcaecati neque voluptatem, blanditiis est ipsum porro tempore dignissimos consequatur eos ducimus repudiandae repellendus dolor hic perspiciatis impedit. Similique ea, magnam eaque commodi culpa quaerat corporis minima. Facilis, debitis sunt!      Incidunt autem perspiciatis voluptatem tempora earum deleniti dolor blanditiis commodi magnam magni omnis minima nulla, quas est laboriosam! Fugiat blanditiis nobis suscipit officia corporis expedita sed assumenda eius voluptatum hic?      Obcaecati hic, incidunt fugiat ratione distinctio modi unde mollitia sit, necessitatibus quo facere magni perferendis consectetur? Quisquam nisi laboriosam officiis quos rerum voluptatibus dolore itaque voluptatem maxime beatae, harum minima!      Adipisci at assumenda harum iusto accusamus repellendus obcaecati eaque ex reprehenderit quaerat exercitationem minus nulla esse soluta facilis officia dolorem quis omnis modi nihil repellat dolore, eum pariatur. Laborum, recusandae!      Cumque voluptate quibusdam aspernatur maiores in iste unde labore commodi autem sunt. Ducimus blanditiis ex, alias quae voluptatibus nihil veniam harum fugiat possimus nostrum commodi iusto necessitatibus vero dignissimos ullam!      Unde consectetur praesentium, atque, tempore ratione nulla odit numquam nihil distinctio reiciendis recusandae. Incidunt expedita laboriosam ducimus hic exercitationem ea quos, ad sint inventore aliquam suscipit culpa iusto laborum. Sit!      Deleniti quae ab accusantium quos minima aliquam, qui sunt nam pariatur totam provident doloremque magni non laudantium? Rem aspernatur voluptates exercitationem autem beatae, eum, temporibus fugit assumenda blanditiis modi nisi?      Assumenda a officiis, minus laudantium accusantium quidem voluptatem quae nisi aperiam quia, eos asperiores incidunt et rem id hic, corrupti iusto iure illo quas tempore animi vel cupiditate vitae! Eaque!      Mollitia, expedita, quos eaque laboriosam ullam ut pariatur maxime, et quaerat quia voluptatem? Sapiente rem cumque, culpa totam ipsum dolor adipisci reprehenderit officiis in quod, pariatur ullam nesciunt sequi quas.      Dolorem eligendi natus, vero aut expedita quae alias eius possimus exercitationem at laborum autem omnis harum? Harum odit obcaecati eius numquam? Reprehenderit laudantium placeat unde odit molestias, reiciendis ea officia.      Minus placeat modi at reiciendis molestiae, iure nostrum nesciunt, optio ab maiores distinctio architecto nobis ipsa ipsam! Iste libero, delectus tenetur enim voluptatem facilis maxime, rerum cupiditate consectetur numquam quam!"

  const newsList = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJsb2d8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      title:
        "Precatórios Sob a Perspectiva dos Grandres Mestres: Aprendendo com Graham, Fisher e Lynch",
      date: new Date(),
      author: "João da Silva",
      text: newsText,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJsb2d8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      title:
        "Precatórios Sob a Perspectiva dos Grandres Mestres: Aprendendo com Graham, Fisher e Lynch",
      date: new Date(),
      author: "João da Silva",
      text: newsText,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJsb2d8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      title:
        "Precatórios Sob a Perspectiva dos Grandres Mestres: Aprendendo com Graham, Fisher e Lynch",
      date: new Date(),
      author: "João da Silva",
      text: newsText,
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJsb2d8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      title:
        "Precatórios Sob a Perspectiva dos Grandres Mestres: Aprendendo com Graham, Fisher e Lynch",
      date: new Date(),
      author: "João da Silva",
      text: newsText,
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJsb2d8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      title:
        "Precatórios Sob a Perspectiva dos Grandres Mestres: Aprendendo com Graham, Fisher e Lynch",
      date: new Date(),
      author: "João da Silva",
      text: newsText,
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJsb2d8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      title:
        "Precatórios Sob a Perspectiva dos Grandres Mestres: Aprendendo com Graham, Fisher e Lynch",
      date: new Date(),
      author: "João da Silva",
      text: newsText,
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJsb2d8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      title:
        "Precatórios Sob a Perspectiva dos Grandres Mestres: Aprendendo com Graham, Fisher e Lynch",
      date: new Date(),
      author: "João da Silva",
      text: newsText,
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJsb2d8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      title:
        "Precatórios Sob a Perspectiva dos Grandres Mestres: Aprendendo com Graham, Fisher e Lynch",
      date: new Date(),
      author: "João da Silva",
      text: newsText,
    },
    {
      id: 9,
      image:
        "https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJsb2d8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      title:
        "Precatórios Sob a Perspectiva dos Grandres Mestres: Aprendendo com Graham, Fisher e Lynch",
      date: new Date(),
      author: "João da Silva",
      text: newsText,
    },
  ]

  const value = { cardsList, avatarData, whatList, newsList }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  return useContext(AppContext)
}
