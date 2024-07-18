<template>
    <h2>TOKENOMICS</h2>
	<div class="tokenomics2-wrapper">
		<div class="tokenomics2__left" data-aos="fade-right">
			<div class="tokenomics-card">
				<!-- <div class="tokenomics-card__title">CHARITY FIRST</div> -->
                <img src="@/assets/img/duck1.png" alt="" />
				<!-- <p>
					Global charity and research initiatives that will drive attention of millions of people. $WATER aims
					to have a net-positive impact on real world with the help of charity.
				</p> -->
			</div>
		</div>
		<div class="tokenomics2__right" data-aos="fade-left">
			<div class="tokenomics-card">
				<div class="tokenomics-card__title">TOTAL SUPPLY</div>
                    <p>{{supply}}</p>
			</div>
			<div class="tokenomics-card">
				<div class="tokenomics-card__title">TOTAL BURNED</div>
				<p>{{totalBurned}}</p>
			</div>
			<div class="tokenomics-card">
				<div class="tokenomics-card__title">Why is it WIN-WIN?</div>
				<p>Protocol manages liquidity in a way that sellers are leaving a little part of profit for holders, this profit is used to buyback tokens. which makes holders be in guaranteed profit. So, sellers are in profit and holders are in profit -> its WIN-WIN.</p>
			</div>
			<div class="tokenomics-card">
				<div class="tokenomics-card__title">VESTED PARTNERS & KOLS</div>
				<p>
					All of our top partners & KOLs are limited with publicly visible tokens vesting. This ensures a
					long-term involvement.
				</p>
			</div>
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
.tokenomics2-wrapper
    display: flex
    margin: 50px auto 0px
    justify-content: center
    gap: 24px
    flex-direction: column
    @media (min-width: 768px)
        flex-direction: row
    .tokenomics2__left
        display: flex
        .tokenomics-card
            img
                max-width: calc(100vw - 44px - 30px - 6px)
            &:first-child
                max-width: 570px
                border: 3px solid blue
                .tokenomics-card__title
                    color: blue
    .tokenomics2__right
        display: grid
        gap: 24px
        max-width: 778px
        grid-template-columns: 1fr
        @media (min-width: 768px)
            grid-template-columns: repeat(2, 1fr)

    .tokenomics-card
        padding: 22px
        min-height: 200px
        background: rgb(255, 255, 255)
        border: 3px solid rgb(87, 187, 122)
        border-radius: 14px
        max-width: 370px
        width: 0px
        min-width: 100%
        @media (min-width: 768px)
            width: unset
            min-width: unset
        .tokenomics-card__title
            font-size: 20px
            foant-weight: 900
        &:nth-child(1)
            border: 3px solid red
            .tokenomics-card__title
                color: red
        &:nth-child(2)
            border: 3px solid orange
            .tokenomics-card__title
                color: orange
        &:nth-child(3)
            border: 3px solid purple
            .tokenomics-card__title
                color: purple
        &:nth-child(4)
            border: 3px solid green
            .tokenomics-card__title
                color: green
</style>
