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
      <Script
        id="snap-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          (function(e,t,n){if(e.snaptr)return;var a=e.snaptr=function()
          {a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)};
          a.queue=[];var s='script';r=t.createElement(s);r.async=!0;
          r.src=n;var u=t.getElementsByTagName(s)[0];
          u.parentNode.insertBefore(r,u);})(window,document,
          'https://sc-static.net/scevent.min.js');

          snaptr('init', 'bf3ecfbb-34f3-485b-898a-184a15dade5e', {
          'user_email': '__INSERT_USER_EMAIL__'
          });

          snaptr('track', 'PAGE_VIEW');
          `,
        }}
      />
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