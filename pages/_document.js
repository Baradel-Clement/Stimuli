import { Html, Head, Main, NextScript } from 'next/document'
import { FB_PIXEL_ID } from '../lib/fpixel'

export default function Document() {
  return (
    <Html>
      <Head>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
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