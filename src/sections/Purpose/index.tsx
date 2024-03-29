import { Subtitle, Title } from "@/components";
import ContentBox from "@/components/ContentBox";
import PurposeForm from "@/components/PurposeForm";
import { useDevice } from "@/hooks/useDevice";
import { tokens } from "@/utils/tokens";
import React from "react";

const Purpose: React.FC = () => {
  const { isDesktop } = useDevice();
  return (
    <ContentBox
      bgColor={tokens.colors.brand.lightCream}
      contentStyle={{
        display: "grid",
        gridTemplateColumns: !isDesktop ? "1fr" : "1fr 1fr",
        gap: "32px",
      }}
    >
      <div>
        <Title
          style={{
            textAlign: "left",
            marginBottom: 32,
          }}
        >
          Somos <b>especialistas</b> em <b>precatórios</b>
        </Title>
        <Subtitle
          style={{
            color: tokens.colors.neutral.lowLight,
            textAlign: "left",
          }}
        >
          Preencha nosso formulário para <strong>vender seu precatório</strong>{" "}
          ou <strong>tirar dúvidas</strong>.<br />
          <br />
          <strong>Nosso time entrará em contato.</strong>
        </Subtitle>
      </div>
      <PurposeForm />
    </ContentBox>
  );
};

export default Purpose;
