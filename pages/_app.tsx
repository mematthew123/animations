import AgeVerifyModal from '@/components/AgeVerifyModal'
import '@/styles/globals.css'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <><AgeVerifyModal /><Component {...pageProps} /></>
}
