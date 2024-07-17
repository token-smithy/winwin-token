<template>
	<div class="htb-wrapper">
		<h2>How To Buy</h2>
		<div class="htb-element-list">
			<div class="htb-element">
				<div class="htb-element-inner">
					<div class="htb-element__front">
						<div class="image">
                            <icon-wallet></icon-wallet>
                        </div>
						<div class="text">Step 1</div>
					</div>
					<div class="htb-element__back">
						<h4>CREATE A WALLET</h4>
						<p>Create a wallet that supports BASE. We recommand to create a MetaMask wallet.</p>

						<a href="https://metamask.io/">Click Here</a>
					</div>
				</div>
			</div>
			<div class="htb-element">
				<div class="htb-element-inner">
					<div class="htb-element__front">
						<div class="image">
                            <icon-buy></icon-buy>
                        </div>
						<div class="text">Step 2</div>
					</div>
					<div class="htb-element__back">
						<h4>BUY ETHEREUM</h4>
						<p>Purchase Ethereum on your favorite CEX.</p>
					</div>
				</div>
			</div>
			<div class="htb-element">
				<div class="htb-element-inner">
					<div class="htb-element__front">
						<div class="image">
                            <icon-transfer></icon-transfer>
                        </div>
						<div class="text">Step 3</div>
					</div>
					<div class="htb-element__back">
						<h4>TRANSFER ETH TO YOUR WALLET</h4>
                        <p>Go to your CEX where you bought ETH and select Withdraw. Copy your wallet address from MetaMask.
                        Paste this address in the receiver field and send ETH to your wallet.</p>
					</div>
				</div>
			</div>
			<div class="htb-element">
				<div class="htb-element-inner">
					<div class="htb-element__front">
						<div class="image">
                            <icon-money-up></icon-money-up>
                        </div>
						<div class="text">Step 4</div>
					</div>
					<div class="htb-element__back">
                        <h4>SWAP ETH FOR WINWIN</h4>
                        <p>Go to uniswap and use this contract address to swap your WINWIN.</p>
                        <a href="https://app.uniswap.org/">Click Here</a>
                    </div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import IconMoneyUp from "@/components/icons/IconMoneyUp.vue"
import IconBuy from "@/components/icons/IconBuy.vue"
import IconTransfer from "@/components/icons/IconTransfer.vue"
import IconWallet from "@/components/icons/IconWallet.vue"
</script>

<style lang="sass">
.htb-wrapper
    display: flex
    flex-direction: column
    gap: 12px
    .htb-element-list
        display: flex
        flex-direction: row
        gap: 24px
        justify-content: center
        flex-wrap: wrap
        .htb-element
            height: 270px
            perspective: 1000px
            width: 200px
            .htb-element-inner
                border: 3px solid black
                position: relative
                border-radius: 8px
                width: 100%
                height: 100%
                text-align: center
                transition: transform 0.6s
                transform-style: preserve-3d
                box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2)
            .htb-element__front, .htb-element__back
                position: absolute
                width: 100%
                height: 100%
                backface-visibility: hidden
                transition: transform 0.9 ease
                transform-style: preserve-3d
                box-sizing: border-box
                padding: 36px 12px
                display: flex
                flex-direction: column
                justify-content: space-between
                .text
                    font-size: 24px
                .image
                    svg
                        height: 100px
                        fill: red
            .htb-element__front
                background-color: white
            .htb-element__back
                transform: rotateY(180deg)
                background-color: #2980b9
                color: white
                a
                    color: white
            &:hover, &:active, &:focus
                .htb-element-inner
                    transform: rotateY(180deg)
</style>
