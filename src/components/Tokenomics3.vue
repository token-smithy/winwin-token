<template>
	<h2>Community oriented<br />Tokenomics</h2>
	<div class="tokenomics2-wrapper">
		<div class="tokenomics2__head">
			<div class="supply">
				Initial total supply <br />
				<span>{{ supply }}</span>
			</div>
		</div>
		<div class="tokenomics2__center">
			<div class="tokenomics2__column">
				<div class="tokenomics-card">
					<!-- <div class="tokenomics-card__title">TOTAL SUPPLY</div> -->
					<div>97%</div>
				</div>
				<div class="tokenomics-text">in a Pool fully available for buyers</div>
			</div>
			<div class="tokenomics2__column">
				<div class="tokenomics-card">
					<!-- <div class="tokenomics-card__title">CHARITY FIRST</div> -->
					<div>0%</div>
					<!-- <p>
					Global charity and research initiatives that will drive attention of millions of people. $WATER aims
					to have a net-positive impact on real world with the help of charity.
				</p> -->
				</div>
				<div class="tokenomics-text">"freezed" in a team multisig</div>
			</div>
			<div class="tokenomics2__column">
				<div class="tokenomics-card">
					<!-- <div class="tokenomics-card__title">TOTAL BURNED</div> -->
					<div>3%</div>
				</div>
				<div class="tokenomics-text">are vesting for "partners</div>
			</div>
		</div>
		<div class="tokenomics2__footer">
			<p>No minting, only burning.</p>
		</div>

		<!-- <div class="tokenomics2__right" data-aos="fade-left">
			
		
			
			<div class="tokenomics-card">
				<div class="tokenomics-card__title">VESTED PARTNERS & KOLS</div>
				<p>
					All of our top partners & KOLs are limited with publicly visible tokens vesting. This ensures a
					long-term involvement.
				</p>
			</div>
		</div> -->
	</div>
</template>

<script setup>
import Card from "@/components/atomaric/Card.vue";
const totalBurned = import.meta.env.VITE_BURNED;
const address = import.meta.env.VITE_ADDRESS;
const supply = import.meta.env.VITE_SUPPLY;
</script>

<style lang="sass">
$card-size: 300px
.tokenomics2-wrapper
    display: flex
    margin: 50px auto 0px
    justify-content: center
    gap: 24px
    flex-direction: column
    // @media (min-width: 768px)
    //     flex-direction: row
    .tokenomics2__head, .tokenomics2__footer
        text-align: center
        font-size: 32px
    .tokenomics2__head
        .supply
            font-size: 32px
            span
                font-size: 92px
    .tokenomics2__center
        display: flex
        gap: 24px
        justify-content: center
        flex-direction: column
        @media (min-width: 768px)
            flex-direction: row
        .tokenomics2__column
            display: flex
            flex-direction: column
            gap: 24px
            justify-content: center
            .tokenomics-card
                padding: 22px
                min-height: 200px
                background: $secondary-color
                border-radius: 100%
                width: $card-size
                height: $card-size
                position: relative
                >div
                    position: absolute
                    top: 50%
                    left: 50%
                    transform: translate(-50%, -50%)
                    font-size: 92px
            .tokenomics-text
                text-align: center
</style>
