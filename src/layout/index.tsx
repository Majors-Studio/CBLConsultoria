

import { Header, Footer } from "@/components";
import React from "react";

import * as C from "./styles";
import Whatsapp from "@/components/Whatsapp";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <Whatsapp />
    </>
  );
};

export default Layout;
