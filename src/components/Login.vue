<template>
	<card>
		<!-- <token-button @click="openLoginModal">Login to join presale</token-button> -->
		<div>
			<template v-if="!isConnected">
				<div class="login-text">{{ props.text }}</div>
				<div class="login-methods">
					<token-button v-for="connector in connectors" @click="connect({ connector, chainId })">
						{{ connector.name }}
					</token-button>
				</div>
			</template>
			<template v-else>
				<slot name="connected"></slot>
            </template>
		</div>
	</card>
</template>

<script setup>
import { ref } from "vue";
import Card from "@/components/atomaric/Card.vue";
import TokenButton from "@/components/atomaric/TokenButton.vue";

import { useConnect, useChainId, useAccount } from "@wagmi/vue";

const props = defineProps({
    text: String,
});

const inputEth = ref();
const chainId = useChainId();
const { connectors, connect } = useConnect();
const { isConnected } = useAccount();

const launched = false;


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
        gap: 24px
        margin-left: auto
        margin-right: auto
        @media (min-width: 768px)
            width: 400px
        .actions
            display: flex
            justify-content: space-between
            gap: 12px
            button.token-button
                flex: 1 1 auto
</style>
