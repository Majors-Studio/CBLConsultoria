import Head from "next/head"

export default function Home() {
  return (
    <div>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="robots" content="index, follow" />
        <meta property="og:image" content="/images/og/harmony.png" />
        <link rel="manifest" href="site.webmanifest" />
      </Head>
      <h1>Home</h1>
    </div>
  )
}
