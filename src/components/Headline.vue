<template>
	<div class="token-headline">
        <img src="@/assets/img/header.jpeg" alt="">
        <div class="social-box">
            <div class="social-wrapper" data-aos="fade-down">
				<social-item size="small" title="Telegram" :href="telegram" icon="telegram"></social-item>
				<social-item size="small" title="x/Twitter" :href="twitter" icon="x"></social-item>
				<social-item size="small" :href="discord" title="Discord" icon="discord"></social-item>
				<social-item size="small" title="Dexscreener" :href="descreener" icon="dex"></social-item>
				<social-item size="small" title="Uniswap" :href="uniswap" icon="uniswap"></social-item>
			</div>
        </div>
	</div>
</template>

<script setup>
import SocialItem from "./atomaric/SocialItem.vue";

const telegram = import.meta.env.VITE_TELEGRAM;
const twitter = import.meta.env.VITE_TWITTER;
const discord = import.meta.env.VITE_DISCORD;
const uniswap = import.meta.env.VITE_UNISWAP;
const descreener = import.meta.env.VITE_DESCREENER;
</script>

<style lang="sass">
.token-headline
    background-color: black
    display: flex
    position: relative
    flex-direction: column
    color: white
    @media (min-width: 768px)
        flex-direction: row
    img
        width: 100%
        object-fit: cover
    .social-box
        position: absolute
        bottom: 0
        height: 100px
        width: 100%
        left: 50%
        transform: translate(-50%, 0)
        @media (min-width: 768px)
            height: 200px
            width: 1000px
        .social-wrapper
            display: flex
            gap: 24px
            justify-content: center
            align-items: center
            height: 100%
            @media (min-width: 768px)
                gap: 96px
    .token-headline_left, .token-headline_right
        flex: 1 1 auto
        display: flex
        flex-direction: column
        justify-content: center
        gap: 48px
        align-items: center
    .token-headline_left
        flex: 1 1 40%
        h1
            text-align: center
    .token-headline_right
        img
            height: 400px
            width: 400px
</style>
