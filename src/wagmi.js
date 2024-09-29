import { http, createConfig } from '@wagmi/vue'
import { base } from '@wagmi/vue/chains'
import { injected, safe, walletConnect } from '@wagmi/vue/connectors'

export const config = createConfig({
  chains: [base],
  transports: {
    [base.id]: http(),
  },
  connectors: [
  ]
})