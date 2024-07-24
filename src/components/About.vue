<template>
	<div class="token-about">
		<h2>About</h2>
		<card>
			<div class="token-about_header">
				<p>WIN-WIN is a token based on a healthy community, which strives to grow it and each member wealth.</p>
				<p>WIN-WIN is guaranteed for all participants, who follow simple rule - do sell only in profit!</p>
			</div>
			<div class="token-about_body">
				<p>Why is it WIN-WIN?</p>
<p>The protocol manages its liquidity in a way, such that sellers are leaving a little bit of their profit for the holders - this is done via buyback and burn. 
This way the holders are guaranteed to profit, the sellers profit -> it's a WIN-WIN.</p>
<p>
    Besides liquidity management with each sold token protocol earns 1% of it as a fee -> all these fees are burning. All tokens, which are bought back are burning. Token starts with 21 mln total supply and each seller makes it more and more rare.
</p>
			</div>
		</card>
	</div>
</template>

<script setup>
import Card from "./atomaric/Card.vue";
</script>

<style lang="sass">
.token-about
    .token-card
        padding: 28px 28px
        display: flex
        flex-direction: column
        gap: 24px
        .token-about_header
            text-align: center
            p
                margin: 0
                font-size: 24px
</style>
