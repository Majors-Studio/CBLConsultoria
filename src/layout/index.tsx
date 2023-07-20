import { Header, Footer } from "@/components";
import React, { useEffect, useState } from "react";

import Whatsapp from "@/components/Whatsapp";
import { AppProvider, useApp } from "@/context/appContext";
interface LayoutProps {
  children: React.ReactNode;
}
import { Toast } from "@/components";
import { SuccessIcon } from "@/assets/icons";
import Head from "next/head";
import Loading from "@/components/Loading";
import { navitems } from "@/utils/navitems";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isTop, toastMessage, showToast, type } = useApp();
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
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      {/* <meta name="robots" content="index, follow" /> */}
      <link rel="shortcut icon" color="#fff" href="/favicon/favicon.ico" />

      {/* <meta property="og:image" content="/images/og/harmony.png" /> */}
      {/* <link rel="manifest" href="site.webmanifest" /> */}
      <link rel="shortcut icon" href="../../public/favicon/favicon.ico" />
      <title>
        {typeof window === "undefined"
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
          {showToast && (
            <Toast
              type={type}
              icon={type == "success" ? <SuccessIcon /> : null}
              message={toastMessage as string}
            />
          )}
        </AppProvider>
      )}
    </>
  );
};

export default Layout;
