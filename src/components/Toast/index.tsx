import { SuccessIcon } from "@/assets/icons"
import ClockIcon from "@/assets/icons/ClockIcon"
import { useApp } from "@/context/appContext"
import { tokens } from "@/utils/tokens"
import React from "react"

export default function Toast() {
  const { toast } = useApp()
  return (
    <div
      className="flex items-center justify-between w-full max-w-xs p-4 mb-4 rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
      style={{
        width: "100vw",
        backgroundColor:
          toast?.type === "success"
            ? tokens.colors.feedback.successPure
            : toast?.type === "sending"
            ? tokens.colors.brand.cta
            : tokens.colors.feedback.errorPure,
        color: tokens.colors.neutral.highPure,
        position: "fixed",
        bottom: "0px",
        left: "20px",
        zIndex: "10000000",

        visibility: toast ? "visible" : "hidden",
      }}
    >
      <p style={{ textAlign: "right", color: tokens.colors.neutral.highPure }}>
        {toast?.message}
      </p>
      {toast?.type === "success" ? (
        <SuccessIcon />
      ) : toast?.type === "sending" ? (
        <ClockIcon />
      ) : null}
    </div>
  )
}
