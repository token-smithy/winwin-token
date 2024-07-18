<template>
	<h2>Community oriented<br />Tokenomics</h2>
	<div class="tokenomics2-wrapper">
		<div class="tokenomics2__head">
				<p>
					Initial total supply - {{ supply }}
				</p>
		</div>
		<div class="tokenomics2__center">
			<div class="tokenomics2__center__left">
				<div class="tokenomics-card">
					<!-- <div class="tokenomics-card__title">TOTAL SUPPLY</div> -->
                    97% are in a Pool fully available for buyers
					<p></p>
				</div>
			</div>
			<div class="tokenomics2__center__center">
				<div class="tokenomics-card">
					<!-- <div class="tokenomics-card__title">CHARITY FIRST</div> -->
					<img src="@/assets/img/duck1.png" alt="" />
					<!-- <p>
					Global charity and research initiatives that will drive attention of millions of people. $WATER aims
					to have a net-positive impact on real world with the help of charity.
				</p> -->
				</div>
			</div>
			<div class="tokenomics2__center__right">
				<div class="tokenomics-card">
					<!-- <div class="tokenomics-card__title">TOTAL BURNED</div> -->
					<p>only 3% are in a team multisig "freezed". 0 tokens are vesting for "partners"</p>
				</div>
			</div>
		</div>
        <div class="tokenomics2__footer">
				<p>
                    No minting, only burning.
				</p>
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
    .tokenomics2__center
        display: flex
        gap: 24px
        flex-direction: column
        @media (min-width: 768px)
            flex-direction: row
        .tokenomics2__center__left, .tokenomics2__center__right, .tokenomics2__center__center
            flex: 1 1 auto
        .tokenomics2__center__center
            img
                max-width: 100% 
    .tokenomics2__left
        display: flex
        .tokenomics-card
            justify-content: center
            display: flex
            min-height: unset
            height: 100%

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
        background: $secondary-color
        border: 3px solid rgb(87, 187, 122)
        border-radius: 14px
        max-width: 370px
        width: 0px
        min-width: 100%
        height: 100%
        // @media (min-width: 768px)
        //     width: unset
        //     min-width: unset
        .tokenomics-card__title
            font-size: 20px
            foant-weight: 900
        &:nth-child(1)
            border: 3px solid $tertiary-color
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
