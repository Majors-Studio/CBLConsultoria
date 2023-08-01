import { ConfirmIcon } from "@/assets/icons";
import { Subtitle, Title } from "@/components";
import ContentBox from "@/components/ContentBox";
import PurposeForm from "@/components/PurposeForm";
import React from "react";

import * as S from "./styles";
import { tokens } from "@/utils/tokens";
import { infoList } from "@/utils/dataObjects";
import { useDevice } from "@/hooks/useDevice";

const PurposeHome: React.FC = () => {
  const { isDesktop } = useDevice();
  return (
    <ContentBox
      style={{}}
      bgColor={tokens.colors.brand.lightCream}
      contentStyle={{
        display: "grid",
        gridTemplateColumns: isDesktop ? "1.8fr 1fr" : "1fr",
        width: "100%",
        gap: tokens.space.sizeXxs,
      }}
    >
      <S.Info id="videoshowcase">
        <Title variant="primary" style={{ textAlign: "left" }}>
          <b>Junte-se a nós</b> e esteja sempre à frente, tomando{" "}
          <b>decisões informadas e estratégicas</b> com o suporte da nossa{" "}
          <b>consultoria jurídica especializada</b>. <br />
          <br />
          Sua jornada para um <b>conhecimento mais profundo</b> e uma{" "}
          <b>orientação confiável</b> começa aqui!
        </Title>
      </S.Info>
      <PurposeForm />
    </ContentBox>
  );
};

export default PurposeHome;
