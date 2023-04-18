import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Header from '../components/Header';
import Tips from '../components/Tips';
import Discover from '../components/Discover';
import Benefits from '../components/Benefits';
import Packs from '../components/Packs';
import Footer from '../components/Footer';
import Popup from '../components/Popup';
import Script from 'next/script';
import { useEffect, useState } from 'react';


export default function Home() {
  const [popupReady, setPopupReady] = useState(false);
  const [previousScroll, setPreviousScroll] = useState(0);
  const [displayPopup, setDisplayPopup] = useState(false);
  const [lockPopup, setLockPopup] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (lockPopup === false) {
        if (popupReady && previousScroll > window.scrollY && lockPopup === false) {
          setDisplayPopup(true);
        }
        if ((window.innerWidth <= 767 && window.scrollY >= 300) || (window.innerWidth > 767 && window.scrollY >= 655)) {
          if (popupReady === false) {
            setPopupReady(true)
          }
          setPreviousScroll(window.scrollY)
        }
      }
    })
  }, [popupReady, previousScroll, lockPopup])
  return (
    <>
      <Header />
      <Tips />
      <Discover />
      <Benefits />
      <Packs />
      <Footer />
      {
        displayPopup && lockPopup === false && <Popup setDisplayPopup={setDisplayPopup} setLockPopup={setLockPopup} />
      }
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
