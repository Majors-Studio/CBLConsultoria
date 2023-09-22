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
        <Title variant="primary">
          Conheça a CBL Consultoria!
        </Title>

        <Video src='https://doc-0k-1k-docs.googleusercontent.com/docs/securesc/4cfdi8tgpvu09uf724vellc6npgcb3le/bs5t79eh6qlr85mr1c392s7otrmtmq0u/1695411825000/17445386894071458295/11697229048635996574/155D_L9z5Iix00c6ofuoh9Hm3u8d3QAUJ?ax=AA75yW7biDe3chHPDM-I1f8hE3sLJzUL3w7aZHEeAQRVnwdfAfc_2ZMRKRASTQVwHAYm3h1w6KYUvl7ohYTHZkp_G62i2L858RMxOx3y3xv7-TRFJctcNqQyO_p8IdGRhEq8-EYM2Csi3UTnR83Fn3BH0PtjrOBAIHegZFqMw7a35RP2hAs5oogLlABFQklI9VB1BAAlqKqyzt02ofJQ_4FNE51AMEm1oJmkTnMW8FSfdDV-qyFDruhLTtsfgz17X5EWgRy3OWQvaEVfi1cl0BmHjGvOijIp28kBZt32kCSqe5_033Pn5FDSfCt1LOy5xVOca-9QN-NlC-aejZqlQHA6Uo7GR1av6481A4sB8pIpwR5XKAvRKULiZOI3JSX0i7xg1fOjLLl9SZZVNVR_0kKk4EixhcBfM75phMeih71XlV5dFWPB_sHLq0Vbq3BMg71c5gTMs759oiiHcExnq7XED3BZX8WYsdeIKZIzo4sJhwf_9uKfSzUMkWOaGtBWpRnF8jzDskiXx7fU1xDC3y0A-RAcsDZuyuetfr3MgSaIQvLpd7F3Ceu3FTBp6dmjEvd1JI-nZRSnHRNN8bvV0P-vpQtL3_IASvRTQl85tIZXYL-p-EWP7huIgbKnIAb7MC3phadF8MwJByKcVlbf0fD0sWlUKWaVX8Llsu-VZyI06V0enOwE7yW2YxNL-nfR9ZlTk5rLeyhK1gLToLArHivFzwTfM79ciBE8y9X-FpnRxM9pODTHIOTQsYEVvQU5uZbYjMcoCGc1WnLDFCFFAQbHrtNO7YNv1DfKvqjNiNbScTj5GV88ObHiZCCOS5eYbXmCHQ6wjVLZ5roTvMtWynzoFitztiXkXwPEKZSgdaHFgbhx0-de6hgKK3MeGzHk2CWg6A&uuid=b41d9c14-777b-40a2-84f4-2c0667b6a57f&authuser=0&nonce=5jf63t2s5bnnq&user=11697229048635996574&hash=sbj16kssmrt31pgaf3tgqpdkjolfh9g8'/>

        {/* <CtaButton>Acesso nosso catálogo</CtaButton> */}
      </ContentBox>
    </>
  );
};

export default VideoShowcase;
