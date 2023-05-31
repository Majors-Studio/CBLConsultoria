import Head from "next/head"

import * as S from "@/styles/home"
import PurposeForm from "@/components/PurposeForm"
import ConfirmIcon from "@/assets/icons/ConfirmIcon"

export default function Home() {
  const InfoList = [
    {
      id: 0,
      title: "Recebimento à vista;",
    },
    {
      id: 1,
      title: "+1 bilhão em precatórios negociados;",
    },
    {
      id: 2,
      title: "+7.000 cessões realizadas em todo Brasil;",
    },
    {
      id: 3,
      title: "+13 anos no mercado de precatórios.",
    },
  ]

  return (
    <div>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        {/* <meta name="robots" content="index, follow" /> */}
        {/* <meta property="og:image" content="/images/og/harmony.png" /> */}
        {/* <link rel="manifest" href="site.webmanifest" /> */}
      </Head>
      <S.Container>
        <S.Content>
          <S.Head>
            <S.Info>
              <S.InfoTitle>
                Receba seu precatório com agilidade e segurança!
              </S.InfoTitle>
              <S.InfoList>
                {InfoList.map((item) => (
                  <S.PrecatoryInfoItem key={item.id}>
                    <ConfirmIcon />
                    <span>{item.title}</span>
                  </S.PrecatoryInfoItem>
                ))}
              </S.InfoList>
              <S.CtaButton>Quero antecipar </S.CtaButton>
            </S.Info>
            <S.PurposeContainer>
              <PurposeForm />
            </S.PurposeContainer>
          </S.Head>
        </S.Content>
      </S.Container>
    </div>
  )
}
