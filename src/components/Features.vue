<template>
	<h2>Features</h2>
	<div class="features-wrapper">
		<div class="features">
			<h3 class="features__title">TOKEN NAME ON A CHART</h3>
			<div class="features__body">
				<p>
					How the price chart looks like is one of the crucial things for any token on the market. WIN-WIN has
					its token name drawn on its chart as a unique signature. Price is guaranteed to never drop below the
					drawing.
				</p>
				<card class="features-mechanism">
					<h4>MECHANISM</h4>
					<ul>
						<li>Drawing token name on a 5 min chart on dexscreener.</li>
						<li>Best community draws best following.</li>
					</ul>
				</card>
			</div>
		</div>
		<div class="features">
			<h3 class="features__title">BUYBACKS</h3>
			<div class="features__body">
				<p>
					When sellers neglect the holders interest, the protocol recovery plan starts. The protocol restores
					the holders interest by buying and burning WIN-WIN tokens.
				</p>
				<p>This recovers the price and decreases the total supply, thus working in the holders interest.</p>
				<card class="features-mechanism">
					<h4>MECHANISM</h4>
					<ul>
						<li>Profit generated from Liquidity management is used to buy tokens from the pool.</li>
						<li>Purchased WIN-WIN tokens are burned by the protocol.</li>
						<li>
							Assess the Damage. Understanding the full impact helps in liquidity management
							configuration.
						</li>
					</ul>
				</card>
			</div>
		</div>
		<div class="features">
			<h3 class="features__title">TOKEN BURNING - Swap Fees</h3>
			<div class="features__body">
				<p>
					WIN-WIN scenario is challenging to achieve. Generally, the departure of participants makes win-win
					scenarios less common. Thus, the WIN-WIN total supply is decreasing.
				</p>
				<p><b>Each time a 100 WIN-WIN tokens are sold - the total supply is decreased by 1 WIN-WIN. </b></p>
				<card class="features-mechanism">
					<h4>MECHANISM</h4>
					<ul>
						<li>The protocol is earning swap fees as a liquidity provider.</li>
						<li>Sellers generate WIN-WIN earnings for the protocol.</li>
						<li>The protocol collects swap fees.</li>
						<li>All collected WIN-WIN tokens are burned by the protocol.</li>
					</ul>
				</card>
			</div>
		</div>
		<div class="features">
			<h3 class="features__title">LIQUIDITY MANAGEMENT</h3>
			<div class="features__body">
				<p>
					Balancing the interests is essential for sustainability of WIN-WIN scenarios, because it ensures all
					parties benefit, fostering satisfaction, trust, collaboration, and long-term success.
				</p>
				<p>WIN-WIN uses liquidity management to balance the holders and the sellers interests.</p>
				<card class="features-mechanism">
					<h4>MECHANISM</h4>
					<ul>
						<li>The protocol at certain checkpoints is rebalancing the concentration of liquidity.</li>
						<li>
							The lower price ranges become more concentrated and the higher price ranges less
							concentrated.
						</li>
						<li>The rebalancing affects a minor part of the whole liquidity.</li>
						<li>Normal trading activity doesn't feel the effect of the rebalancing.</li>
						<li>
							Significant sell pressure (dump) does feel an effect - generating a profit for a protocol.
						</li>
						<li>The generated profit at certain checkpoints is used to make buybacks.</li>
						<!-- <li>
							Assess the Damage. Understanding the full impact helps in liquidity management
							configuration.
						</li> -->
					</ul>
				</card>
			</div>
		</div>
	</div>
</template>

<script setup>
import Card from "./atomaric/Card.vue";
</script>

<style lang="sass">
.features-wrapper
    display: grid
    grid-template-columns: 1fr 1fr
    gap: 34px
    .features
        flex: 1 1 auto
        border: 1px solid rgb(64, 190, 255)
        border-radius: 14px
        max-width: 670px
        width: 100%
        padding: 56px 28px 28px 28px
        display: flex
        flex-direction: column
        align-items: center
        background-color: $secondary-color

        .features__title
            font-size: 32px
            text-align: center
        .token-card
            &.features-mechanism
                padding: 22px
                border-radius: 8px
                border-width: 0
                background: #0f608d
                h4
                    margin-bottom: 12px
                    margin-top: 0
                ul
                    display: flex
                    flex-direction: column
                    gap: 12px
                    margin: 0
                    padding: 0 22px
</style>
