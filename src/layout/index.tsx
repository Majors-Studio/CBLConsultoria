import { Header, Footer } from "@/components";
import React from "react";

import * as C from "./styles";
import Whatsapp from "@/components/Whatsapp";
import { useApp } from "@/context/appContext";
interface LayoutProps {
  children: React.ReactNode;
}
import { Toast } from "@/components";
import { SuccessIcon } from "@/assets/icons";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isTop, toastMessage, showToast, type } = useApp();

  return (
    <>
      <Header />
      {children}
      <Footer />
      {isTop ? null : <Whatsapp />}
      {showToast && (
        <Toast
          type={type}
          icon={type == "success" ? <SuccessIcon /> : null}
          message={toastMessage as string}
        />
      )}
    </>
  );
};

export default Layout;
