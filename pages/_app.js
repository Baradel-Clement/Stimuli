import React, { useEffect } from 'react'
import { HomeContextProvider } from '../context/Home';
import Script from 'next/script'
import { useRouter } from 'next/router'
import * as fbq from '../lib/fpixel'

import '../styles/globals.css'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const router = useRouter()

  useEffect(() => {
    // This pageview only triggers the first time (it's important for Pixel to have real information)
    fbq.pageview()

    const handleRouteChange = () => {
      fbq.pageview()
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      {/* Global Site Code Pixel - Facebook Pixel */}
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 141824108837272);
            fbq('track', 'PageView');
          `,
        }}
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

      <Script
        strategy='afterInteractive'
        src="https://www.googletagmanager.com/gtag/js?id=UA-178879339-2"
      />

      <Script id="gtag" strategy='afterInteractive' dangerouslySetInnerHTML={{
        __html: `
        <!-- Google tag (gtag.js) -->
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-178879339-2');
          `}}>
      </Script>

      <HomeContextProvider>
        <Component {...pageProps} />
      </HomeContextProvider>
    </>
  );
}

export default MyApp
