import React from "react"
import * as C from "@/styles/precatory"
import BrazilGraph from "@/assets/svg/BrazilGraph"
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js"
import { Doughnut } from "react-chartjs-2"
import { ListIcon, MoneyIcon, SuccessIcon } from "@/assets/icons"
import MagnifyingGlass from "@/assets/icons/MagnifyingIcon"
import ContractIcon from "@/assets/icons/ContractIcon"
import PurposeForm from "@/components/PurposeForm"
// import Swiper from "swiper";
import { SwiperSlide, Swiper } from "swiper/react"
import { Autoplay, A11y } from "swiper"

import SpeechBox from "@/components/SpeechBox"
import Avatar from "@/components/Avatar"
import Chart from "@/components/Chart"
import CtaButton from "@/components/CtaButton"
import SpeechCarousel from "@/components/SpeechCarousel"

ChartJS.register(ArcElement, Tooltip, Legend)

const Precatory: React.FC = () => {
  const chartData = {
    labels: ["RJ", "PR", "SP", "RS", "União"],
    datasets: [
      {
        label: "Valor em %",
        data: [5, 4, 33, 9, 25],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  } as ChartData<"doughnut", number[], string>

  const points = [
    {
      id: 0,
      name: "João da Silva",
      text:
        "Potencial de retorno financeiro significativo, uma vez que os precatórios podem ser adquiridos com descontos substanciais.",
      avatar: "https://i.pravatar.cc/300?img=1",
    },
    {
      id: 1,
      name: "Carlos Almeida",
      text:
        "Estabilidade e segurança jurídica, pois os precatórios são obrigações judiciais emitidas pelo governo, geralmente garantindo o pagamento futuro.",
      avatar: "https://i.pravatar.cc/300?img=2",
    },
    {
      id: 2,
      name: "Joana Castro",
      text:
        "Diversificação de portfólio, permitindo aos investidores mitigar riscos e aproveitar oportunidades alternativas de investimento.",
      avatar: "https://i.pravatar.cc/300?img=3",
    },
    {
      id: 3,
      name: "Maria dos Santos",
      text:
        "Possibilidade de utilização de precatórios para compensação de débitos fiscais, proporcionando benefícios fiscais adicionais.",
      avatar: "https://i.pravatar.cc/300?img=4",
    },
    {
      id: 4,
      name: "Hildo Augusto",
      text:
        "O cenário econômico atual e a expectativa de recuperação pós-pandemia tornam os precatórios uma opção atraente para investidores em busca de oportunidades lucrativas e seguras.",
      avatar: "https://i.pravatar.cc/300?img=5",
    },
  ]

  const newsList = [
    {
      id: 0,
      title:
        "Aliados de Lula analisam proposta para alongar precatórios de prefeituras até 2040.",
      source: "Folha de São Paulo",
      link: "https://www1.folha.uol.com.br/colunas/painel/2021/09/aliados-de-lula-analisam-proposta-para-alongar-precatorios-de-prefeituras-ate-2040.shtml",
      date: "14/09/2021",
    },
    {
      id: 1,
      title: "Precatórios: o que são e como investir nesses títulos?",
      source: "Valor Investe",
      link: "https://valorinveste.globo.com/objetivo/educacao-financeira/noticia/2021/09/14/precatorios-o-que-sao-e-como-investir-nesses-titulos.ghtml",
      date: "14/09/2021",
    },
    {
      id: 2,
      title: "Precatórios: o que são e como investir nesses títulos?",
      source: "Valor Investe",
      link: "https://valorinveste.globo.com/objetivo/educacao-financeira/noticia/2021/09/14/precatorios-o-que-sao-e-como-investir-nesses-titulos.ghtml",
      date: "14/09/2021",
    },
    {
      id: 3,
      title: "Precatórios: o que são e como investir nesses títulos?",
      source: "Valor Investe",
      link: "https://valorinveste.globo.com/objetivo/educacao-financeira/noticia/2021/09/14/precatorios-o-que-sao-e-como-investir-nesses-titulos.ghtml",
      date: "14/09/2021",
    },
  ]

  const whyToSellList = [
    {
      id: 0,
      text: (
        <>
          <span>
            Os pagamentos não são realizados no prazo pelo poder público.
          </span>{" "}
          A data de pagamento muda o tempo todo, portanto a fila de credores só
          aumenta.
        </>
      ),
    },
    {
      id: 1,
      text: (
        <>
          Liquidez: Receber rapidamente e à vista.{" "}
          <span>Dinheiro na conta sem burocracia.</span>
        </>
      ),
    },
    {
      id: 2,
      text: (
        <>
          <span>Não faça dívidas com juros abusivos</span>, a venda do
          precatório é a melhor opção para retomar sua saúde financeira.
        </>
      ),
    },
    {
      id: 3,
      text: (
        <>
          Acabe com a incerteza de recebimento,{" "}
          <span>venda com segurança jurídica e financeira.</span>
        </>
      ),
    },
  ]

  const stepsList = [
    {
      id: 0,
      title: "1. Análise do seu precatório",
      text: (
        <>
          Nosso time jurídico faz uma análise criteriosa do processo judicial do
          seu precatório para garantir <span>segurança e transparência</span> em
          todo o processo de compra.
        </>
      ),
      icon: <MagnifyingGlass />,
    },
    {
      id: 1,
      title: "2. Proposta de Valor",
      text: (
        <>Oferecemos o melhor valor do mercado com propostas éticas e justas.</>
      ),
      icon: <ListIcon />,
    },
    {
      id: 2,
      title: "3. Assinatura do Contrato",
      text: (
        <>
          Após o aceite da proposta, <span>assinamos o contrato</span> de venda{" "}
          <span>no cartório</span>, seguindo todas as obrigações legais, de
          forma <span>rápida e segura</span>.
        </>
      ),
      icon: <ContractIcon />,
    },
    {
      id: 3,
      title: "4. Pagamento no ato da assinatura",
      text: (
        <>
          À vista e sem burocracia direto na sua conta.{" "}
          <span>O dinheiro é creditado em conta no momento da assinatura</span>{" "}
          e o comprovante de transferência entregue ao credor.
        </>
      ),
      icon: <MoneyIcon />,
    },
  ]

  return (
    <>
      <C.ContainerImg>
        <C.BannerImage src="https://source.unsplash.com/featured" alt="bg" />
        <C.ContainerText>teste</C.ContainerText>
      </C.ContainerImg>

      <C.WhatIs>
        <C.WhatIsContent>
          <C.WhatIsQuestion>O que é um precatório?</C.WhatIsQuestion>
          <C.WhatIsAnswerContainer>
            <C.WhatIsAnswer style={{ marginBottom: 42 }}>
              Precatórios são requisições de pagamento expedidas pelo Judiciário
              para cobrar de municípios, estados ou da União, assim como de
              autarquias, fundações e universidades, o pagamento de valores
              devidos após condenação judicial definitiva.
            </C.WhatIsAnswer>

            <C.WhatIsAnswer style={{ marginBottom: 42 }}>
              Estas ações dividem-se em duas categorias:
            </C.WhatIsAnswer>

            <C.WhatIsCategories style={{ marginBottom: 42 }}>
              <C.WhatIsCategory>
                <C.WhatIsCategoryTitle>Comuns</C.WhatIsCategoryTitle>
                <C.WhatIsAnswer>
                  Desapropriação, tributações, entre outros (para pessoas
                  jurídicas é muito comum).
                </C.WhatIsAnswer>
              </C.WhatIsCategory>

              <C.WhatIsCategory>
                <C.WhatIsCategoryTitle>Alimentares</C.WhatIsCategoryTitle>
                <C.WhatIsAnswer>
                  Originam de questões salariais, pensões, aposentadorias,
                  verbas de sustento em geral, entre outros.
                </C.WhatIsAnswer>
              </C.WhatIsCategory>
            </C.WhatIsCategories>

            <C.WhatIsAnswer>
              O pagamento dos precatórios obedece uma ordem cronológica e uma
              ordem de prioridade. Porém o pagamento da dívida é extremamente
              moroso e incerto.
            </C.WhatIsAnswer>
          </C.WhatIsAnswerContainer>
        </C.WhatIsContent>
      </C.WhatIs>

      <C.CenaryContainer>
        <C.CenaryContent>
          <C.CenaryTitle>
            Cenário da Dívida Nacional em Precatórios
          </C.CenaryTitle>

          <C.CenaryInfoContainer>
            <BrazilGraph />

            <C.CenaryTextContainer>
              <C.CenaryText>
                A <strong>dívida total Brasileira</strong> é de{" "}
                <span style={{ fontSize: 27 }}>R$</span>{" "}
                <span style={{ fontSize: 53 }}>273,1</span>
                <br />
                Bilhões em precatórios
              </C.CenaryText>

              <C.CenaryText>
                Atualmente a <strong>espera</strong> é de até{" "}
                <span style={{ fontSize: 53 }}>20</span>{" "}
                <span style={{ fontSize: 27 }}>anos</span>
              </C.CenaryText>

              <C.CenaryText>
                O estado de <strong>São Paulo</strong> está{" "}
                <strong>pagando em 2022</strong> os precatórios de{" "}
                <span style={{ fontSize: 53 }}>2009</span>
              </C.CenaryText>
            </C.CenaryTextContainer>
          </C.CenaryInfoContainer>
          <C.CenaryInfoContainer
            style={{
              marginTop: 42,
              alignItems: "center",
            }}
          >
            <C.TotalDebt>União R$ 85,4 Bi</C.TotalDebt>

            <C.SourceContainer>
              <C.SourceText>
                Fonte:{" "}
                <a href="https://www.cnj.jus.br/pagamento-de-precatorios/">
                  CNJ
                </a>
              </C.SourceText>

              <C.SourceText>
                Mapa Anual dos Precatórios | Base 31/12/2022
              </C.SourceText>

              <C.SourceText>
                Precatórios Municipais, Estaduais e Federais
              </C.SourceText>
            </C.SourceContainer>
          </C.CenaryInfoContainer>
        </C.CenaryContent>
      </C.CenaryContainer>

      <C.RankingContainer>
        <C.RankingContent>
          <C.RankingInfos>
            <C.RankingTitle>Ranking Nacional</C.RankingTitle>

            <C.RankingText>
              No ranking dos <span>5 maiores devedores</span> do país,{" "}
              <span>São Paulo ocupa o 1º lugar</span>, acumulando 33% da dívida
              nacional.
            </C.RankingText>

            <C.RankingText>
              Atualmente o Estado efetua o <span>pagamento</span> dos
              precatórios <span>com 14 anos de atraso.</span>
            </C.RankingText>
          </C.RankingInfos>

          <C.RankingChart>
            <Doughnut
              data={chartData}
              width={320}
              height={320}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: true,
                    fullSize: true,
                    position: "right",
                    title: {
                      display: true,
                      text: "Ranking Nacional",
                      color: "#fff",
                      font: {
                        size: 14,
                      },
                    },
                    labels: {
                      color: "#fff",
                      font: {
                        size: 16,
                      },
                    },
                  },
                },
              }}
            />
          </C.RankingChart>
        </C.RankingContent>
      </C.RankingContainer>

      <C.NewsContainer>
        <C.NewsContent>
          <C.NewsInfos>
            <C.NewsTitle>Notícias</C.NewsTitle>

            <C.NewsText>
              Veja a seguir as notícias nos principais veículos da mídia (Folha
              de São Paulo, Estadão, Valor Investe, Gazeta, entre outros) e
              matérias dos maiores escritórios de advocacia.
            </C.NewsText>

            <C.NewsText>
              Os <span>pagamentos</span> que inicialmente deveriam ser
              realizados <span>em SP até 2020</span>, foram postergados para{" "}
              <span>2024</span> e novamente prorrogados para
              <span>2029</span>.
            </C.NewsText>

            <C.NewsText>
              As notícias abordam justamente os atrasos, a mudança constante na
              data limite de pagamento e a <span>incerteza</span> no{" "}
              <span>recebimento</span> dos precatórios, que vem{" "}
              <span>prejudicando milhares de credores</span>.
            </C.NewsText>
          </C.NewsInfos>

          <C.NewsList>
            {newsList.map((news) => (
              <C.NewsItem key={news.id}>
                <C.NewsItemTop>
                  <C.NewsItemInfo>
                    {news.source} | {news.date}
                  </C.NewsItemInfo>
                  <C.NewsItemTitle>{news.title}</C.NewsItemTitle>
                </C.NewsItemTop>
                <C.NewsItemLink href={news.link} target="_blank">
                  Leia mais
                </C.NewsItemLink>
              </C.NewsItem>
            ))}
          </C.NewsList>
        </C.NewsContent>
      </C.NewsContainer>

      <C.WhyToSellContainer>
        <C.WhyToSellContent>
          <C.WhyToSellTitle>Por que vender seus precatórios?</C.WhyToSellTitle>

          <C.WhyToSellList>
            {whyToSellList.map((why) => (
              <C.WhyToSellItem key={why.id}>
                <C.WhyToSellItemIcon>
                  <SuccessIcon />
                </C.WhyToSellItemIcon>

                <C.WhyToSellItemText>{why.text}</C.WhyToSellItemText>
              </C.WhyToSellItem>
            ))}
            <CtaButton>Quero vender meu precatório</CtaButton>
          </C.WhyToSellList>

          <C.WhatContainer>
            <C.WhatTitle>Porquê investir em precatórios?</C.WhatTitle>

            <C.WhatList>
              <SpeechCarousel data={points} />
            </C.WhatList>
          </C.WhatContainer>
          
          <C.ContainerChart>
            <C.WhatTitle>
              Evolução de investimentos em precatórios{" "}
              <span style={{ fontSize: "18px" }}>(2018 - 2022)</span>
            </C.WhatTitle>

            <Chart />
          </C.ContainerChart>
        </C.WhyToSellContent>
      </C.WhyToSellContainer>

      <C.StepsContainer>
        <C.StepsContent>
          <C.StepsTitle>
            Receba a antecipação do seu precatório em apenas 4 passos
          </C.StepsTitle>
          <C.StepsSubtitle>
            É simples, rápido e o principal, seguro
          </C.StepsSubtitle>

          <C.StepsList>
            {stepsList.map((step) => (
              <C.StepsItem key={step.id}>
                <C.StepsItemIcon>{step.icon}</C.StepsItemIcon>
                <C.StepsItemTitle>{step.title}</C.StepsItemTitle>
                <C.StepsItemText>{step.text}</C.StepsItemText>
              </C.StepsItem>
            ))}
          </C.StepsList>

          <C.StepsInfo>
            <C.StepsInfoText>
              A venda do precatório é realizada com muita segurança e agilidade,
              todo o procedimento é reconhecido em cartório e o ente público, o
              devedor, não se opõe a cessões de crédito, trata-se de um ato
              TOTALMENTE LEGAL.
            </C.StepsInfoText>

            <C.StepsInfoText>
              A CESSÃO É SEGURA, mas sempre deve ser realizada por uma empresa
              capacitada para analisar todos os processos e documentos
              necessários.
            </C.StepsInfoText>
          </C.StepsInfo>
        </C.StepsContent>
      </C.StepsContainer>

      <C.LeadContainer>
        <C.LeadContent>
          <C.LeadInfo>
            <C.LeadTitle>Somos especialistas em precatórios</C.LeadTitle>
            <C.LeadText>
              Preencha nosso formulário para <span>vender seu precatório</span>{" "}
              ou <span>tirar dúvidas</span>.<br />
              <strong>Nosso time entrará em contato.</strong>
            </C.LeadText>
          </C.LeadInfo>
          <PurposeForm />
        </C.LeadContent>
      </C.LeadContainer>
    </>
  )
}

export default Precatory
