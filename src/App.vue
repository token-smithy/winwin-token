<template>
	<div ref="home"></div>
	<vue-header  @link-clicked="menuItemClicked"></vue-header>
	<main :class="{'menuOpen': menuOpen}" >
		<section id="home">
			<headline></headline>
			<Vue3Marquee>
				<span v-for="(word, index) in words" :key="index">
					{{ word }}
				</span>
			</Vue3Marquee>

		</section>
        <RouterView />
		
		<vue-footer></vue-footer>
	</main>
</template>

<script setup>
import { ref, getCurrentInstance, provide, onMounted } from "vue";
import VueHeader from "./components/Header.vue";
import VueFooter from "./components/Footer.vue";

import Headline from "./components/Headline.vue";

import { Vue3Marquee } from "vue3-marquee";
import {useRouter} from "vue-router"

const router = useRouter();

const home = ref();
const about = ref();
const tokenomics = ref();
const instance = getCurrentInstance();
const menuOpen = ref(false)
provide('menuOpen', menuOpen)

const words = [
	"$WIN-WIN",
	"$WIN-WIN",
	"$WIN-WIN",
	"$WIN-WIN",
	"$WIN-WIN",
	"$WIN-WIN",
	"$WIN-WIN",
	"$WIN-WIN",
	"$WIN-WIN",
	"$WIN-WIN",
	"$WIN-WIN",
	"$WIN-WIN",
	"$WIN-WIN",
];

function menuItemClicked(payLoad) {
    // menuClickedElement.value = payLoad
    console.log("payLoad", payLoad);
    router.push(`/#${payLoad}`)
    
}

</script>

<style lang="sass">
.token-headline
    height: auto 
    @media (min-width: 768px)
        // height: calc(100vh - 66px - 38.5px)
        height: calc(100vh - 38.5px)
.vue3-marquee
    background-color: black
    color: #f7f9e3
    padding: 12px 0
    overflow: hidden
    .marquee
        justify-content: space-around
        gap: 12px
        @media (min-width: 768px)
            gap: 0

main
    &.menuOpen
        touch-action: none

    .container
        gap: 48px
        display: flex
        flex-direction: column
</style>
