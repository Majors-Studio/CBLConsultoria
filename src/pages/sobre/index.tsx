import React from "react";
import { CustomQuality } from "@/components";
import HeadBanner from "@/components/HeadBanner";
import Purpose from "@/sections/Purpose";
import AvatarList from "@/sections/AvatarList";
import SlabList from "@/sections/SlabList";
import VideoHistory from "@/sections/VideoHistory";

const About: React.FC = () => {
  return (
    <>
      <HeadBanner title="Quem somos" />

      <CustomQuality />

      {/* <SlabList /> */}

      <VideoHistory />

      <AvatarList />

      <Purpose /> {/* Alterar o conteudo dos textos */}
    </>
  );
};

export default About;
