<template>
	<div class="presale-header-block">
		<div>
			<div class="presale-text">Join Presale</div>
			<div class="presale-second-text">Scroll down to join the presale</div>
		</div>
	</div>
	<div class="container">
		<section id="presale" ref="presale">
			<block1 title="Presale">
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
					<h3>How to ape?</h3>
					<p>
						Send ETH on BASE directly to [EarlyBird](basescan link) contract address [0x34215] or use
						Connect wallet button.
					</p>
				</template>
				<template #right>
                    <img src="@/assets/img/duckquestion.png" alt="question duck">
                </template>
			</block1>
		</section>
        <section id="login" ref="login">
            <Presale></Presale>
        </section>
	</div>
</template>

<script setup>
import Block1 from "@/components/blocks/block1.vue";
import Presale from "@/components/Presale.vue";
</script>

<style lang="sass">
.presale-header-block
    position: absolute
    top: 200px
    background-color: rgba(255, 255, 255, 0.7)
    width: 80%
    height: 300px
    padding: 24px
    text-align: center
    display: flex
    flex-direction: column
    justify-content: center
    left: 50%
    transform: translateX(-50%)
    .presale-text
        font-size: 92px
        color: red
    .presale-second-text
        font-size: 42px
        color: red
#presale
    ul
        text-align: left
</style>
