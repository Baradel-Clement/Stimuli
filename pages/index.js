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
          __html: `
          !function () {
    var analytics = window.analytics = window.analytics || [];
    if (!analytics.initialize) {
      if (analytics.invoked) {
        window.console && console.error && console.error('Segment snippet included twice.');
      } else {
        analytics.invoked = !0;
        analytics.methods = ['trackSubmit', 'trackClick', 'trackLink', 'trackForm', 'pageview', 'identify', 'reset', 'group', 'track', 'ready', 'alias', 'debug', 'page', 'once', 'off', 'on', 'addSourceMiddleware', 'addIntegrationMiddleware', 'setAnonymousId', 'addDestinationMiddleware'];
        analytics.factory = function (e) {
          return function () {
            var t = Array.prototype.slice.call(arguments);
            t.unshift(e);
            analytics.push(t);
            return analytics;
          };
        };
        for (var e = 0; e < analytics.methods.length; e++) {
          var key = analytics.methods[e];
          analytics[key] = analytics.factory(key);
        }
        analytics.load = function (key, e) {
          var t = document.createElement('script');
          t.type = 'text/javascript';
          t.async = !0;
          t.src = 'https://cdn.segment.com/analytics.js/v1/' + key + '/analytics.min.js';
          var n = document.getElementsByTagName('script')[0];
          n.parentNode.insertBefore(t, n);
          analytics._loadOptions = e;
        };
        analytics._writeKey = 'v4IBe2auYPLPpS9cq4RMlcwd2S1DXeCM';
        analytics.SNIPPET_VERSION = '4.15.3';
        window._axcb = window._axcb || [];
        window._axcb.push(function (sdk) {
          sdk.on('cookies:complete', function (choices) {
            analytics.load('v4IBe2auYPLPpS9cq4RMlcwd2S1DXeCM',
              {
                integrations: {
                  All: false,
                  'Google Analytics': choices.google_analytics,
                  'Segment.io': choices.segment,
                  'Facebook Pixel': choices.facebook_pixel,
                  'Google Ads': choices.Google_Ads,
                  'Fullstory': choices.Fullstory,
                  'Mixpanel': choices.Mixpanel,
                  'TikTok': choices.TikTok,
                  'SendinBlue': choices.SendinBlue,
                  'Snap Pixel': choices.Snap_Pixel
                }
              });
            // You'll have to complete with your various cookies, following the structure 'Google Analytics': choices.google_analytics,
            // generally : 'Name of vendor in segment': choices.nameOfCookieInAxeptio
          });
        });
        analytics.page();
      }
    }
  }();
          `,
        }}
      />
    </>
  )
}
