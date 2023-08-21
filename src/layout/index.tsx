import React, { useEffect, useState } from "react";
import { Header, Footer } from "@/components";

import Whatsapp from "@/components/Whatsapp";
import { AppProvider, useApp } from "@/context/appContext";
interface LayoutProps {
  children: React.ReactNode;
}
import { Toast } from "@/components";
// import { SuccessIcon } from "@/assets/icons";
import Head from "next/head";
import Loading from "@/components/Loading";
import { navitems } from "@/utils/navitems";
import { CookiesContent } from "@/components/CookiesContent";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isTop } = useApp();
  const [timeoutId, setTimeoutId] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTimeoutId(false);
    }, 2000);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const head = (
    <Head>
      <meta
        name="description"
        content="CBL Consultoria - Ajudamos você a investir em precatórios federais e estaduais"
      />
      <meta
        name="keywords"
        content="Precatórios, Precatórios federais, Precatórios estaduais, Precatórios municipais, Precatórios judiciais, Precatórios judiciais federais, Precatórios judiciais estaduais, Precatórios judiciais municipais, Precatórios judiciais federais, Precatórios judiciais estaduais, Precatórios judiciais municipais, Precatórios judiciais federais, Precatórios judiciais estaduais, Precatórios judiciais municipais, Precatórios judiciais federais, Precatórios judiciais estaduais, Precatórios judiciais municipais, Precatórios judiciais federais, Precatórios judiciais estaduais, Precatórios judiciais municipais, Precatórios judiciais federais, Precatórios judiciais estaduais, Precatórios judiciais municipais, Precatórios judiciais federais, Precatórios judiciais estaduais, Precatórios judiciais municipais, Precatórios judiciais federais, Precatórios judiciais estaduais, Precatórios judiciais municipais"
      />
      <meta name="author" content="Majors Studios" />
      <meta name="robots" content="index, follow" />
      <link rel="icon" href="/favicon/favicon.ico" />

      <meta property="og:image" content="public\assets\images\og.png" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <title>
        {typeof window === "undefined" || window.location.pathname === "/"
          ? "CBL Consultoria"
          : navitems.find((item) => item.url == window.location.pathname)
              ?.title}
      </title>
    </Head>
  );

  return (
    <>
      {head}
      {timeoutId || typeof window === "undefined" ? (
        <Loading />
      ) : (
        <AppProvider>
          <Header />
          {children}
          <Footer />
          {isTop ? null : <Whatsapp />}
          <Toast />
          <CookiesContent />
        </AppProvider>
      )}
    </>
  );
};

export default Layout;
