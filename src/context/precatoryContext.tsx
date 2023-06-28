import { ListIcon, MoneyIcon } from "@/assets/icons"
import ContractIcon from "@/assets/icons/ContractIcon"
import MagnifyingGlass from "@/assets/icons/MagnifyingIcon"
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react"

interface PrecatoryContextProps {
  whyToSellList: {
    id: number
    text: React.ReactNode
  }[]
  
  stepsList: {
    id: number
    title: string
    text: React.ReactNode
    icon: React.ReactNode
  }[]
 
}

const PrecatoryContext = createContext<PrecatoryContextProps>({} as any)

export function PrecatoryProvider({ children }: any) {
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
      title: "Análise do seu precatório",
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
      title: "Proposta de Valor",
      text: (
        <>Oferecemos o melhor valor do mercado com propostas éticas e justas.</>
      ),
      icon: <ListIcon />,
    },
    {
      id: 2,
      title: "Assinatura do Contrato",
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
      title: "Pagamento no ato da assinatura",
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
  
  
  const value = { stepsList, whyToSellList }

  return <PrecatoryContext.Provider value={value}>{children}</PrecatoryContext.Provider>
}

export function usePrecatory() {
  return useContext(PrecatoryContext)
}
