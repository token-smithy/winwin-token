<template>
	<div class="about-wrapper">
		<h2>about</h2>
		<div class="about-inner">
			<card class="about-left" data-aos="fade-left">
				<img src="@/assets/img/wewin.png" alt="" />
			</card>
			<card class="about-right" data-aos="fade-right">
				<h3>Concept</h3>
				<p>
					WIN-WIN is a token based on a healthy community, which strives to grow it and each member wealth.
					WIN-WIN is guaranteed for all participants, who follow simple rule - do sell only in profit!
				</p>
				<h3>Why is it WIN-WIN?</h3>
				<p>
					Protocol manages liquidity in a way that sellers are leaving a little part of profit for holders,
					this profit is used to buyback tokens. which makes holders be in guaranteed profit. So, sellers are
					in profit and holders are in profit -> its WIN-WIN.
				</p>
				<p>
					Besides liquidity management with each sold token protocol earns 1% of it as a fee -> all these fees
					are burning. All tokens, which are bought back are burning. Token starts with 21 mln total supply
					and each seller makes it more and more rare.
				</p>
			</card>
		</div>
	</div>
</template>

<script setup>
import Card from "@/components/atomaric/Card.vue";

const totalBurned = import.meta.env.VITE_BURNED;
const address = import.meta.env.VITE_ADDRESS;
const supply = import.meta.env.VITE_SUPPLY;
</script>

<style lang="sass">
.about-wrapper
    .about-inner
        display: flex
        flex-direction: column
        gap: 20px
        @media (min-width: 768px)
            flex-direction: row-reverse
        .about-left
            display: flex
            flex-direction: column
            justify-content: center
            align-items: center
            img
                width: 250px
                @media (min-width: 768px)
                    width: 350px
        .about-right
            display: flex
            flex-direction: column
            gap: 20px
            .about-card
                display: flex
                flex-direction: column
                align-items: center
                flex: 1 1 auto
                justify-content: center

                h3
                    margin-bottom: 10px
                p
                    color: #000
                    margin: 0
                    font-family: Gluten
                    font-size: 30px
                    font-style: normal
                    font-weight: 500
                    text-transform: capitalize
                    &.smaller-font
                        font-size: 20px

.distribution-body
    display: flex
    flex-direction: column
    gap: 12px
    text-align: center
</style>
