import ContentBox from "@/components/ContentBox"
import React from "react"
import Image, { StaticImageData } from "next/image"

import * as C from "./styles"
import Anchor from "@/components/Anchor"
import { Subtitle, Title } from "@/components"
import { useDevice } from "@/hooks/useDevice"
import { tokens } from "@/utils/tokens"

interface ImageAndTextProps {
  children?: React.ReactNode
  title: React.ReactNode | string
  subtitle: React.ReactNode | string
  image?: string | StaticImageData
  chart?: React.ReactNode
  reverse?: boolean
  anchor?: string
}

const ImageAndText: React.FC<ImageAndTextProps> = ({
  children,
  image,
  subtitle,
  title,
  anchor,
  reverse,
  chart,
}) => {
  const { isMobile } = useDevice()
  return (
    <>
      <ContentBox
        py={isMobile ? "30px" : "60px"}
        bgColor={
          reverse ? tokens.colors.brand.lightCream : tokens.colors.brand.cta
        }
        contentStyle={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: isMobile
            ? "column-reverse"
            : reverse
            ? "row-reverse"
            : "row",
          gap: isMobile ? "24px" : undefined,
        }}
      >
        <C.BoxImage>
          {image ? (
            <Image src={image} alt="Image" priority />
          ) : chart ? (
            chart
          ) : null}
        </C.BoxImage>
        <C.BoxText>
          {anchor && <Anchor id={anchor} />}
          <Title
            style={{
              fontWeight: "bold",
              textAlign: reverse || isMobile ? "left" : "right",
              marginBottom: isMobile ? "24px" : "32px",
              textTransform: "uppercase",
            }}
            variant={reverse ? "primary" : "secondary"}
          >
            {title}
          </Title>
          <Subtitle
            style={{
              textAlign: reverse || isMobile ? "left" : "right",
              color: reverse
                ? tokens.colors.brand.cta
                : tokens.colors.neutral.highPure,
            }}
          >
            {subtitle}
          </Subtitle>
        </C.BoxText>
      </ContentBox>
      {children}
    </>
  )
}

export default ImageAndText
