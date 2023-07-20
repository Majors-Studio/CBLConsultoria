import Document, { Html,Head, Main, NextScript } from "next/document"
import Script from "next/script"

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
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
          <meta property="og:image" content="/assets/images/og.png" />
        </Head>
        
        <body>
          <Main />
          <NextScript />
          <Script src="https://cdn.jsdelivr.net/npm/cleave.js@1.6.0/dist/cleave.min.js" />
        </body>
      </Html>
    )
  }
}
