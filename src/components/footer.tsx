import Link from "next/link";

export default function Footer(){
  return (
    <footer >
      <div className="container mx-auto">
        <div className="flex flex-row">
          <div className="w-1/2">
            <h3 className="text-xl font-bold">Contato</h3>
            <ul>
              <li>Telefone: (11) 99999-9999</li>
              <li>
                E-mail:
                <a href="mailto:teste@contato.com" className="text-blue-500">
                  email_teste@teste.com
                </a>
              </li>
            </ul>
          </div>
          <div className="w-1/2">
            <Link href="/about" className="text-blue-500">
              Sobre
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}