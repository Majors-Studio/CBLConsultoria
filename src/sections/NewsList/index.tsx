import CardBlog from "@/components/CardBlog";
import { useApp } from "@/context/appContext";
import Link from "next/link";
import React from "react";

import ContentBox from "@/components/ContentBox";
import { tokens } from "@/utils/tokens";
import { useDevice } from "@/hooks/useDevice";

const NewsList: React.FC = () => {
  const { isMobile, isTablet } = useDevice();
  const { newsList } = useApp();

  return (
    <ContentBox
      bgColor={tokens.colors.brand.lightCream}
      style={{
        padding: "4rem 1rem",
        width: "100%",
      }}
      contentStyle={{
        display: "grid",
        gridTemplateColumns: isMobile
          ? "1fr"
          : isTablet
          ? "1fr 1fr"
          : "1fr 1fr 1fr",
        gap: "20px",
      }}
    >
      {newsList?.map((post) => {
        return (
          <Link
            key={post.sys.id}
            href={{
              pathname: "noticias/post/",
              query: { id: post.sys.id },
            }}
          >
            <CardBlog
              text={post.fields.title as string}
              src={post.fields.featuredImage?.fields.file.url}
            />
          </Link>
        );
      })}
    </ContentBox>
  );
};

export default NewsList;
