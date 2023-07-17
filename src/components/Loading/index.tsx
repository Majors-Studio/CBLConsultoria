import LoadingIcon from "@/assets/icons/LoadingIcon"
import { tokens } from "@/utils/tokens"
import React from "react"
import Logo from "../Logo"

interface Props {
  hasLogo?: boolean
  variant?: "light" | "dark"
}

const Loading: React.FC<Props> = ({ hasLogo = true, variant = 'dark' }) => {
  return (
    <>
      <style>
        {`
            @keyframes rotate {
            0% {
            transform: scale(1) rotate(0deg);
            opacity: 1;

        }
        50% {
            transform: scale(1.12) rotate(180deg);
            opacity: 0.8;
        }
        100% {
            transform: scale(1) rotate(360deg);
            opacity: 1;
        }
            }

            @keyframes fadeout {
            0% {
            opacity: 1;
            }
      80% {
            opacity: 1;
}
            100% {
            opacity: 0;
          }
}
          `}
      </style>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          gap: "20px",
          overflow: "hidden",
          backgroundColor: variant === 'dark' ? tokens.colors.brand.dark : tokens.colors.brand.light,
          animation: "fadeout 2s linear forwards",
        }}
      >
        <div
          style={{
            width: "45px",
            height: "45px",
            // top: "50%",
            left: "50%",
            transform: "rotate(0deg)",
            animation: "rotate 0.8s infinite",
            color: variant === 'dark' ? tokens.colors.brand.light : tokens.colors.brand.dark,
          }}
        >
          <LoadingIcon />
        </div>
        {hasLogo && <Logo />}
      </div>
    </>
  )
}

export default Loading
