import { Title } from "@/components";
import Anchor from "@/components/Anchor";
import ContentBox from "@/components/ContentBox";
import CtaButton from "@/components/CtaButton";
import Video from "@/components/Video";
import { tokens } from "@/utils/tokens";
import React from "react";

const VideoShowcase: React.FC = () => {
  return (
    <>
      <Anchor id="videoshowcase" />
      <ContentBox
        bgColor={tokens.colors.neutral.highPure}
        contentStyle={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: tokens.space.sizeXxs,
        }}
      >
        {/* <Title variant="primary">
          Há mais de uma década no mercado, somos a maior empresa na antecipação
          de precatórios do Brasil
        </Title> */}

        <Video />

        {/* <CtaButton>Acesso nosso catálogo</CtaButton> */}
      </ContentBox>
    </>
  );
};

export default VideoShowcase;
