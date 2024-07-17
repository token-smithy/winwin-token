<template>
	<div class="tokenomics-wrapper">
		<h2>Tokenomics</h2>
		<div class="tokenomics-inner">
			<card class="tokenomics-left">
				<img src="@/assets/img/waschbaer2.png" alt="" />
			</card>
			<div class="tokenomics-right">
				<card class="tokenomics-card">
					<h3>TOTAL SUPPLY</h3>
					<p>{{supply}}</p>
				</card>
				<card class="tokenomics-card">
                    <h3>TOKEN ADDRESS</h3>
					<p>{{address}}</p>
				</card>
                <card class="tokenomics-card">
                    <h3>Total Burned</h3>
                    <p>{{totalBurned}}</p>
                </card>
                <card class="tokenomics-card">
                    <h3>Distribution</h3>
                       <div class="distribution-body">
                            <p class="smaller-font">97% tokens are in a pool available for trading</p>
                            <p class="smaller-font">3% tokens are in a team multisig for marketing campaign</p>
                       </div>
                </card>
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
.tokenomics-wrapper
    .tokenomics-inner
        display: flex
        flex-direction: column
        gap: 20px
        @media (min-width: 768px)
            flex-direction: row
        .tokenomics-left
            display: flex
            flex-direction: column
            justify-content: center
            align-items: center
            img
                width: 250px
                @media (min-width: 768px)
                    width: 350px
        .tokenomics-right
            display: flex
            flex-direction: column
            gap: 20px
            .tokenomics-card
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
