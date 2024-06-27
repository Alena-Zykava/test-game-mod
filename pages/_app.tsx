import type {AppProps} from 'next/app'

import {Roboto} from 'next/font/google'
import Layout from '@/modules/Layout'

import '@/styles/globals.css'

const inter = Roboto({subsets: ['latin'], weight: '900'})

export default function App({Component, pageProps}: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-base: ${inter.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
