import React from "react";
import * as C from "./styles";
import Link from "next/link";

export default function Whatsapp() {
  const phone = process.env.PHONE_NUMBER;

  return (
    <Link target="_blank" href={`https://wa.me/${phone}`}>
      <C.ButtonWpp>
        <C.IconWpp
          src="https://i0.wp.com/www.multarte.com.br/wp-content/uploads/2018/11/whatsapp-logo-icone.png?resize=696%2C712&ssl=1"
          alt="Whatsapp"
        />
      </C.ButtonWpp>
    </Link>
  );
}
