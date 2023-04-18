import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head>

      <Script
        strategy='afterInteractive'
        src="https://sc-static.net/scevent.min.js"
      />
      </Head>
      <body>
        <Main />
        <NextScript />

      </body>
    </Html>
  )
}
