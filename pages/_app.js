import React from 'react'
 import { HomeContextProvider } from '../context/Home';

import '../styles/globals.css'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <HomeContextProvider>
      <Component {...pageProps} />
    </HomeContextProvider>
  );
}

export default MyApp
