import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from '~app/styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NextJS + TypeScript Template</title>
        <link rel="shortcut icon" href="/assets/img/icon-2" />
        <link rel="apple-touch-icon" href="/assets/img/icon-2" />
        <meta
          name="description"
          content="A TypeScript + Next.js template that includes all you need to build fantastic projects."
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
