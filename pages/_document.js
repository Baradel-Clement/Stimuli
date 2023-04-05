import { Html, Head, Main, NextScript } from 'next/document'
import { FB_PIXEL_ID } from '../lib/fpixel'
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
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-NYCEK1BE4C"></Script>
        <Script id="gtag" strategy="lazyOnload">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-NYCEK1BE4C');`}
        </Script>
        <meta name="facebook-domain-verification" content="3ay8z2rd2fnio46n8ltvwko1hv0f8w" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}