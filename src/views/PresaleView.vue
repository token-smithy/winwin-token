<template>
	<div class="presale-header-block">
		<div>
			<div class="presale-text">{{ activeState.name }}</div>
			<div class="presale-second-text">{{ activeState.text }}</div>
		</div>
	</div>
	<div class="container">
        <card>
            <presale-stepper v-model="activeState" :steps="steps"></presale-stepper>
        </card>
		<section id="presale" ref="presale">
			<block1 >
				<template #left>
					<h3>What is WIN-WIN Public Presale?</h3>
					<p>
						One time opportunity to become an early bird and get WIN-WIN tokens for the best price possible!
						Presale has no limit on deposited ETH, team can end it and launch token trading any time!
					</p>
					<h3>How does it work?</h3>
					<ul>
						<li>Anyone can deposit any ETH amount to presale contract.</li>
						<li>Deposited ETH can be withdrawn back anytime before trading started.</li>
						<li>After trading started early birds can claim their fair token share.</li>
					</ul>
					<template v-if="activeState.id === 2">
						<h3>How to ape?</h3>
						<p>
							Send ETH on BASE directly to [EarlyBird](basescan link) contract address [0x34215] or use
							Connect wallet button.
						</p>
					</template>
					<template v-else-if="activeState.id === 3">
						<h3>How to claim?</h3>
						<p>
							If you took part in the presale, you can simply click on the “Claim button” after you have logged in. The contract recognizes the participants and the ETH amount used.
						</p>
					</template>
				</template>
				<template #right>
					<img class="right-image" src="@/assets/img/duckquestion.png" alt="question duck" />
				</template>
			</block1>
		</section>
		<section id="login" ref="login">
			<template v-if="activeState.id === 1">
				<card class="presale-upcoming">
					<countdown v-model="countdownExpired" :key="endDt" :end="endDt">
						<template #default="{ days, hours, minutes, seconds }">
							Protocol Launch in {{ days }}d {{ hours }}h {{ minutes }}m {{ seconds }}s
						</template>
					</countdown>
					<div><button @click="resetCountdown">setTime</button></div>
					<p>
						Presale contract address will be announced on telegram and discord.<br />
						Don't send ETH to any other contract. Stay SAFU!
					</p>
				</card>
			</template>
			<template v-if="activeState.id === 2">
				<card class="presale-live">
					<button @click="progress++">add</button>
					<progress-bar :max="max" v-model="progress"> </progress-bar>
					<login text="Connect to your wallet to join the presale">
						<template #connected>
							<div class="wallet-connected">
								<div class="disconnect">
									<token-button @click="disconnect()">Disconnect</token-button>
								</div>
								<div class="early-bird-contracts">
									{{ inputEth }}
									<div>
										<input-crypto v-model="inputEth"></input-crypto>
									</div>
									<div class="actions">
										<token-button @click="todo">Deposit</token-button>
										<token-button @click="todo">Withdraw</token-button>
									</div>
								</div>
							</div>
						</template>
					</login>
					<contract-button></contract-button>
				</card>

			</template>
			<template v-if="activeState.id === 3">
				<card class="presale-completed">
					<login text="Connect to your wallet to claim fair token share">
						<template #connected>
							<div class="wallet-connected ">
								<div class="disconnect">
									<token-button @click="disconnect()">Disconnect</token-button>
								</div>
								<div class="early-bird-contracts">
                                    <token-button @click="todo">claim</token-button>
								</div>
							</div>
						</template>
					</login>
				</card>
			</template>
		</section>
	</div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from "vue";
import Block1 from "@/components/blocks/block1.vue";
import Login from "@/components/Login.vue";
import Countdown from "@/components/Countdown.vue";
import Card from "@/components/atomaric/Card.vue";
import ContractButton from "@/components/ContractButton.vue";
import InputCrypto from "@/components/InputCrypto.vue";
import TokenButton from "@/components/atomaric/TokenButton.vue";
import {useDisconnect} from "@wagmi/vue"
import ProgressBar from "@/components/ProgressBar.vue";
import PresaleStepper from "@/components/PresaleStepper.vue";
const { disconnect } = useDisconnect();
const endDt = ref();
endDt.value = new Date(1745224400000);
let _timerId;
const max = ref(10);
const progress = ref(4.42);
const seconds = ref(0);
const countdownExpired = ref(1);

const steps = [
{ id: 1, name: "Presale upcoming", text: "Scroll down to get all informations" },
{ id: 2, name: "Presale IS LIVE", text: "Scroll down to join the presale" },
{ id: 3, name: "Presale completed", text: "Scroll down to claim" },
]

const activeState = computed(() => {
	if (seconds.value > 0) {
		return steps[0]
	} else if (progress.value >= max.value) {
		return steps[2]
	} else {
		return steps[1]
	}
});

onMounted(() => {
	setSeconds(endDt.value);
});

function todo() {
	alert("todo");
}

function setSeconds(date) {
	console.log("setSeconds");

	if (_timerId) {
		clearInterval(_timerId);
	}
	seconds.value = Math.round((date.getTime() - new Date().getTime()) / 1000);
	console.log("seconds.value", seconds.value);

	if (seconds.value > 0) {
		_timerId = setInterval(() => {
			seconds.value--;
			if (seconds.value <= 0) {
				clearInterval(_timerId);
			}
		}, 1000);
	}
}
function resetCountdown() {
	let timeElapsed = new Date();
	timeElapsed.setSeconds(timeElapsed.getSeconds() + 0);
	endDt.value = timeElapsed;
	console.log("endDt.value", endDt.value);
	setSeconds(endDt.value);
}

onUnmounted(() => clearInterval(_timerId));
</script>

<style lang="sass">
.presale-header-block
    position: absolute
    background-color: rgba(37, 50, 69, 0.8)
    width: 80%
    padding: 24px
    text-align: center
    display: flex
    flex-direction: column
    justify-content: center
    left: 50%
    transform: translateX(-50%)
    @media (min-width: 768px)
        top: 200px
        height: 300px
    .presale-text
        font-size: 48px
        color: white
        font-family: GreatVibes
        @media (min-width: 768px)
            font-size: 92px
    .presale-second-text
        font-size: 18px
        color: white
        @media (min-width: 768px)
            font-size: 42px
#presale
    ul
        text-align: left
    .block1-right
        img
            width: 100%
            @media (min-width: 768px)
                width: auto
.presale-upcoming
    text-align: center
    .countdown
        font-size: 24px
        @media (min-width: 768px)
            font-size: 48px
.presale-live
    display: flex
    flex-direction: column
    gap: 12px
.presale-completed
    .wallet-connected
        display: flex
        flex-direction: row
        gap: 12px
</style>
