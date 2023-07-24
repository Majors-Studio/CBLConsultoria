import React from "react";
import { CustomQuality } from "@/components";
import HeadBanner from "@/components/HeadBanner";
import AvatarList from "@/sections/AvatarList";
import VideoHistory from "@/sections/VideoHistory";
import PurposeForm from "@/components/PurposeForm";

const About: React.FC = () => {
  return (
    <>
      <HeadBanner title="Conheça a CBL Consultoria!" />

      <CustomQuality />

      <VideoHistory />

      <AvatarList />

      <PurposeForm />
    </>
  );
};

export default About;
