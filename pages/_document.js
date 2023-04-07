import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=141824108837272&ev=PageView&noscript=1`}
          />
        </noscript>
        <meta name="facebook-domain-verification" content="3ay8z2rd2fnio46n8ltvwko1hv0f8w" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}