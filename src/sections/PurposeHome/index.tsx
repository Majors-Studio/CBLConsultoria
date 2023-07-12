import { ConfirmIcon } from "@/assets/icons";
import { Subtitle, Title } from "@/components";
import ContentBox from "@/components/ContentBox";
import CtaButton from "@/components/CtaButton";
import PurposeForm from "@/components/PurposeForm";
import React from "react";

import * as S from "./styles";
import { tokens } from "@/utils/tokens";
import { infoList } from "@/utils/dataObjects";

const PurposeHome: React.FC = () => {
  return (
    <ContentBox
      style={{
        paddingTop: "80px",
        paddingBottom: "100px",
      }}
      bgColor={tokens.colors.brand.lightCream}
    >
      <S.Head>
        <S.Info>
          <Title variant="primary" style={{ textAlign: "left" }}>
            <b>Conte</b> com <b>nossos especialistas</b> para uma consultoria
            jurídica de <b>excelência</b>!
          </Title>
          <S.InfoList>
            {infoList.map((item) => (
              <S.PrecatoryInfoItem key={item.id}>
                <ConfirmIcon />
                <Subtitle>{item.title}</Subtitle>
              </S.PrecatoryInfoItem>
            ))}
          </S.InfoList>
          {/* <CtaButton /> */}
        </S.Info>
        <PurposeForm />
      </S.Head>
    </ContentBox>
  );
};

export default PurposeHome;
