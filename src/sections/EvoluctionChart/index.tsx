import { Title } from "@/components"
import ContentBox from "@/components/ContentBox"
import React from "react"
import Chart from "@/components/Chart"
import { tokens } from "@/utils/tokens"

const EvoluctionChart: React.FC = () => {
  return (
    <ContentBox py={"60px"} bgColor={tokens.colors.neutral.highLight}>
      <Title variant="primary">
        Evolução de investimentos em precatórios{" "}
        <span style={{ fontSize: "18px" }}>(2018 - 2022)</span>
      </Title>

      <Chart />
    </ContentBox>
  )
}

export default EvoluctionChart
