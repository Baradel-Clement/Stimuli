import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Header from '../components/Header';
import Tips from '../components/Tips';
import Discover from '../components/Discover';
import Benefits from '../components/Benefits';
import Packs from '../components/Packs';
import Footer from '../components/Footer';
import Script from 'next/script';


export default function Home() {
  return (
    <>
      <Header />
      <Tips />
      <Discover />
      <Benefits />
      <Packs />
      <Footer />
      <Script
          id='axeptio'
          dangerouslySetInnerHTML={{
            __html: `window.axeptioSettings = {
            clientId: "642d95c073a92ef0f78ed99d",
            cookiesVersion: "stimuli-education-landingpage-brevet-fr-2",
          };
          
          (function(d,s) {
          var t = d.getElementsByTagName(s)[0],e = d.createElement(s);
          e.async = true; e.src = "https://static.axept.io/sdk.js";
          t.parentNode.insertBefore(e, t);
          })(document, "script");`,
          }}
        />
    </>
  )
}
