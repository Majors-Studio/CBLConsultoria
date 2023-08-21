"use client";

import React, { useState, useEffect } from "react";
import * as S from "./styles";
import Cookies from "js-cookie";
import Title from "../Title";
import Description from "../Description";
import Subtitle from "../Subtitle";

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
          <Subtitle style={{ color: "#000", textAlign: "left", width: "100%" }}>
            Esse site usa cookies
          </Subtitle>
          <Description style={{ color: "#000", marginTop: "10px" }}>
            Nós armazenamos dados temporariamente para melhorar a sua
            experiência de navegação e recomendar conteúdo de seu interesse. Ao
            autorizar nossos serviços, você concorda com tal monitoramento.
          </Description>
          <S.InputArea>
            <S.AcceptButton onClick={() => acceptCookie()}>
              <Title style={{ fontSize: "16px" }} variant="secondary">
                Aceitar
              </Title>
            </S.AcceptButton>
            <S.DeclineButton onClick={() => setShowCookieBanner(false)}>
              <Title style={{ fontSize: "16px" }}>Negar</Title>
            </S.DeclineButton>
          </S.InputArea>
        </S.Container>
      )}
    </>
  );
};
