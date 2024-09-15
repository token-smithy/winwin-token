<template>
	<card>
		<!-- <token-button @click="openLoginModal">Login to join presale</token-button> -->
		<div>
			<template v-if="!isConnected">
                <div class="login-text">Connect to your wallet to join the presale</div>
				<div class="login-methods">
					<token-button v-for="connector in connectors" @click="connect({ connector, chainId })">
						{{ connector.name }}
					</token-button>
				</div>
			</template>
			<template v-else>
				<div class="wallet-connected">
					<div class="disconnect">
						<token-button @click="disconnect()">Disconnect</token-button>
					</div>
					<div class="early-bird-contracts">
						<div class="deposit">
							<label>
								<input id="input" type="text" />
							</label>
							<token-button @click="todo" :disabled="launched">Deposit</token-button>
						</div>
						<div class="widthClaim">
							<token-button @click="todo" :disabled="!launched">Withdraw</token-button>
							<token-button @click="todo" :disabled="!launched">Claim</token-button>
						</div>
					</div>
				</div>
			</template>
			<!-- <Connect v-else /> -->
		</div>
	</card>
</template>

<script setup>
import Card from "@/components/atomaric/Card.vue";
import TokenButton from "@/components/atomaric/TokenButton.vue";

import { useConnect, useChainId, useAccount, useDisconnect } from "@wagmi/vue";

const chainId = useChainId();
const { connectors, connect } = useConnect();
const { isConnected } = useAccount();
const { disconnect } = useDisconnect();

const launched = false;

function todo(){
    alert("todo")
}
</script>

<style lang="sass">
.login-text
    font-size: 24px
    text-align: center
.login-methods
    display: flex
    gap: 24px
    justify-content: center

.wallet-connected
    display: flex
    flex-direction: column
    justify-content: center
    .disconnect
        margin-left: auto
    .early-bird-contracts
        display: flex
        flex-direction: column
        width: 400px
        gap: 24px
        margin-left: auto
        margin-right: auto
        .deposit
            display: flex
            gap: 12px
            align-items: center
            >* 
                flex: 1 1 auto
                input
                    width: 100%
                    border: 0
                    border-radius: 12px
                    padding: 8px 12px
                    width: 100%
                    outline: none
                    color: black
        .widthClaim
            display: flex
            gap: 24px
            >*
                flex: 1 1 auto
</style>
