<template>
    <div class="socials-wrapper">
		<h2>Socials</h2>
        <div class="social-wrapper" data-aos="fade-down">
				<social-item size="small" title="Telegram" :href="telegram" icon="telegram"></social-item>
				<social-item size="small" title="x/Twitter" :href="twitter" icon="x"></social-item>
				<social-item size="small" :href="discord" title="Discord" icon="discord"></social-item>
				<social-item size="small" title="Dexscreener" :href="descreener" icon="dex"></social-item>
				<social-item size="small" title="Uniswap" :href="uniswap" icon="uniswap"></social-item>
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
.social-wrapper
    display: flex
    gap: 24px
    justify-content: center
</style>