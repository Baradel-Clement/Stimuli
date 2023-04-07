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
      <HomeContextProvider>
        <Component {...pageProps} />
      </HomeContextProvider>
    </>
  );
}

export default MyApp
