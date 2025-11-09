import Head from 'next/head'
import { useRouter } from 'next/router'
import { GoogleAnalytics } from '@next/third-parties/google'
import { useEffect } from 'react'

import Footer from 'components/Footer'
import Header from 'components/Header'

import { Cities, Locale, SLATINA_PAGES, AUDIO_GUIDE_PAGES, CURTEA_DE_ARGES_PAGES } from 'utils/types'

import 'styles/globals.scss'

export interface IAppProps {
  Component: React.ElementType
  pageProps: { slug?: string; locale?: Locale; city?: Cities }
}

export default function App(props: Readonly<IAppProps>) {
  const { Component, pageProps } = props
  const router = useRouter()
  const isLocalhost =
    typeof window !== 'undefined' &&
    !window.location.hostname.includes('voiceyourplace')

  const isHidingFooter = Object.keys(pageProps).length === 0
  // TODO: Improve the logic for the QR pages
  const isHeaderColored =
    [...CURTEA_DE_ARGES_PAGES, ...SLATINA_PAGES, ...AUDIO_GUIDE_PAGES].includes(
      pageProps.slug as any
    ) || pageProps.city !== undefined

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (!url.includes('#')) {
        window.scrollTo(0, 0);
      }

      // Send a GA4 page_view for SPA navigation
      const absolute = `${window.location.origin}${url}`;
      window.gtag?.('event', 'page_view', {
        page_location: absolute,
        page_title: document.title || undefined,
      });
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, [router.events]);

  return (
    <div>
      <Head>
        <title>Voice Your Place</title>
      </Head>
      <Header isColored={isHeaderColored} />
      <Component {...pageProps} />
      <Footer isHidden={isHidingFooter} />
      {!isLocalhost ? <GoogleAnalytics gaId='G-ZE2YNMXGGQ' /> : null}
    </div>
  )
}
