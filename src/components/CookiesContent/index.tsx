"use client";

import React, { useState, useEffect } from "react";
import * as S from "./styles";
import Cookies from "js-cookie";

export const CookiesContent = () => {
  const [showCookieBanner, setShowCookieBanner] = useState<boolean>(false);

  useEffect(() => {
    const visitedBefore = Cookies.get("visitedBefore");

    if (!visitedBefore) {
      setShowCookieBanner(true);
      Cookies.set("visitedBefore", "true", { expires: 365 });
    }
  }, []);

  function acceptCookie() {
    setShowCookieBanner(false);
    Cookies.set("acceptedCookie", "true", { expires: 365 });
  }

  return (
    <>
      {showCookieBanner && (
        <S.Container>
          <S.Title>Esse site usa cookies</S.Title>
          <S.Description>
            Nós armazenamos dados temporariamente para melhorar a sua
            experiência de navegação e recomendar conteúdo de seu interesse. Ao
            atualizar nossos serviços, você concorda com tal monitoramento.
          </S.Description>
          <S.InputArea>
            <S.AcceptButton onClick={() => acceptCookie()}>
              Aceitar
            </S.AcceptButton>
            <S.DeclineButton onClick={() => setShowCookieBanner(false)}>
              Negar
            </S.DeclineButton>
          </S.InputArea>
        </S.Container>
      )}
    </>
  );
};
