import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Cursor from '../src/components/cursor';
import ScrollToTop from '../src/components/scrollToTop';
import LoadingScreen from '../src/components/Loading-Screen';
import '../src/styles/main.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          J Group Corporation
        </title>
        <link rel="icon" href="/img/ui-favicon.png" />
      </Head>
      <Cursor />
      <LoadingScreen />
      <Component {...pageProps} />
      <ScrollToTop />
      <Script id="wow" src="/js/wow.min.js" />
      <Script
        strategy="beforeInteractive"
        id="splitting"
        src="/js/splitting.min.js"
      />
      <Script id="simpleParallax" src="/js/simpleParallax.min.js" />
      <Script
        id="isotope"
        strategy="beforeInteractive"
        src="/js/isotope.pkgd.min.js"
      />
      <Script id="wowInit" strategy="lazyOnload">
        new WOW().init();
      </Script>
    </>
  );
}

export default MyApp;
