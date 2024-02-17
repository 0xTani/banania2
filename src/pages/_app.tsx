import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { WagmiProvider } from 'wagmi'
import { config } from '../config'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Web3Provider } from "@/Web3Providers";

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return <WagmiProvider config={config}>
    {/* <Web3Provider> */}
    <Component {...pageProps} />
    {/* </Web3Provider> */}
  </WagmiProvider>

}
