<template>
	<div class="about-wrapper">
		<h2>ABOUT</h2>
		<div class="about-inner">
			<card class="about-left" data-aos="fade-left">
				<img src="@/assets/img/wewin.png" alt="" />
			</card>
			<card class="about-right" data-aos="fade-right">
				<h3>Concept</h3>
				<p>
					<b>WIN-WIN</b> is a token striving to grow a healthy community and grow the wealth of each member.
					<b>WIN-WIN</b> is guaranteed for all participants who follow a simple rule -
					<b>sell only in profit!</b>
				</p>
				<h3>Why is it WIN-WIN?</h3>
				<p>
					The protocol manages its liquidity in a way, such that sellers are leaving a little bit of their
					profit for the holders - this is done via buyback and burn. This way the holders are guaranteed to
					profit, the sellers profit -> it's a WIN-WIN.
				</p>
				<h3>Beware</h3>
				<p>Each seller makes the token more rare.</p>
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
        text-align: center
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
