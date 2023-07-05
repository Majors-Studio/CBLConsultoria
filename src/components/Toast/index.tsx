import React from "react";

interface ToastProps {
  message: string;
  icon: React.ReactNode;
  type: string;
}

export default function Toast({ message, icon, type }: ToastProps) {
  return (
    <div
      className="flex items-center justify-between w-full max-w-xs p-4 mb-4 rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
      style={{
        width: "100vw",
        backgroundColor: type === "success" ? "#4BB543" : "#FF0000",
        color: "#FFF",
        position: "fixed",
        bottom: "0px",
        left: "20px",
        zIndex: "10000000",
      }}
    >
      <p style={{ textAlign: "right", color: "#FFF" }}>{message}</p>
      {icon}
    </div>
  );
}
