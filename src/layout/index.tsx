import { Header, Footer } from "@/components";
import React from "react";

import * as C from "./styles";
import Whatsapp from "@/components/Whatsapp";
import { useApp } from "@/context/appContext";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isTop } = useApp();
  return (
    <>
      <Header />
      {children}
      <Footer />
      {isTop ? null : <Whatsapp />}
    </>
  );
};

export default Layout;
