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
          <strong>
            Os pagamentos não são realizados no prazo pelo poder público.
          </strong>{" "}
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
          <strong>Dinheiro na conta sem burocracia.</strong>
        </>
      ),
    },
    {
      id: 2,
      text: (
        <>
          <strong>Não faça dívidas com juros abusivos</strong>, a venda do
          precatório é a melhor opção para retomar sua saúde financeira.
        </>
      ),
    },
    {
      id: 3,
      text: (
        <>
          Acabe com a incerteza de recebimento,{" "}
          <strong>venda com segurança jurídica e financeira.</strong>
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
          seu precatório para garantir <strong>segurança e transparência</strong> em
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
          Após o aceite da proposta, <strong>assinamos o contrato</strong> de venda{" "}
          <strong>no cartório</strong>, seguindo todas as obrigações legais, de
          forma <strong>rápida e segura</strong>.
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
          <strong>O dinheiro é creditado em conta no momento da assinatura</strong>{" "}
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
