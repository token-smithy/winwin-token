<template>
    <h2>Features</h2>
	<div class="features-wrapper">
		<div class="features-left">
			<h3 class="features__title">FREEZING (STAKING)</h3>
			<div class="features__body">
				<p>
					Just as water turns into ice when it gets cold, $WATER tokens can be staked (iced) to earn rewards.
					Stakers are rewarded with additional $WATER tokens over time, simulating the process of accumulating
					ice
				</p>
			</div>
		</div>
		<div class="features-right">
			<h3 class="features__title">Token burning - swap fees</h3>
			<div class="features__body">
				<p>
					Each time 100 WIN-WIN tokens is sold into a pool, protocol earns 1 WIN-WIN token as a swap fee.
					Protocol burns it, decreasing total supply.
				</p>
			</div>
		</div>
	</div>
</template>

<style lang="sass">
.features-wrapper
    display: flex
    gap: 34px
    .features-left, .features-right
        flex: 1 1 auto
        border: 1px solid rgb(64, 190, 255)
        border-radius: 14px
        max-width: 670px
        width: 100%
        padding: 76px 29px 28px
        display: flex
        flex-direction: column
        align-items: center
        background-color: $secondary-color
        .features__title
            font-size: 32px
            text-align: center
</style>
