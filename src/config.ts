import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'

declare global { namespace NodeJS { interface ProcessEnv { NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID: string } } }

export const config = createConfig({
    chains: [mainnet, sepolia],
    transports: {
        [mainnet.id]: http(),
        [sepolia.id]: http(),
    },
})