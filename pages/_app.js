import React, { useEffect } from 'react'
import { HomeContextProvider } from '../context/Home';
import Script from 'next/script'
import { useRouter } from 'next/router'
import * as fbq from '../lib/segment-analytics'

import '../styles/globals.css'
import {event} from "../lib/segment-analytics";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const router = useRouter()

  useEffect(() => {
    // fbq.pageview() => already in script
    fbq.event('LandingPackBrevet');

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
        <Script
            id="axeptio"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `
            window.axeptioSettings = {
            clientId: '633c221bd9bc6d8ba5813f08',
            cookiesVersion: 'app stimuli education-fr-2',
        };

            (function (d, s) {
            var t = d.getElementsByTagName(s)[0],
            e = d.createElement(s);
            e.async = true;
            e.src = '//static.axept.io/sdk.js';
            t.parentNode.insertBefore(e, t);
        })(document, 'script');`,
        }}
      />
      <Script
            id="segment-track"
            strategy="afterInteractive"
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
            analytics.load('v4IBe2auYPLPpS9cq4RMlcwd2S1DXeCM'/*,
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
              }*/);
            // You'll have to complete with your various cookies, following the structure 'Google Analytics': choices.google_analytics,
            // generally : 'Name of vendor in segment': choices.nameOfCookieInAxeptio
        });
        });
            analytics.page();
        }
        }
        }()`,
        }}
      />

      <HomeContextProvider>
        <Component {...pageProps} />
      </HomeContextProvider>
    </>
  );
}

export default MyApp
