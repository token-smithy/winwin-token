<template>
	<a :href="props.href" target="_blank">
		<button
			class="social-item"
			:title="props.title"
			:class="{ [`social-item--${props.size}`]: true }"
			:style="{ color: props.color, 'background-color': props.bgColor }"
		>
			<component v-if="props.icon" :is="ImageComponent"></component>
			<template v-if="props.text">
				{{ props.text }}
			</template>
		</button>
	</a>
</template>

<script setup>
import { defineAsyncComponent } from "vue";

const props = defineProps({
	href: String,
	icon: String,
	text: String,
	bgColor: String,
	color: String,
	size: {
		type: String,
		required: false,
		default: "normal",
	},
});

const ImageComponent = defineAsyncComponent(() => {
	switch (props.icon) {
		case "x":
			return import("@/components/icons/IconTwitter.vue");
		case "twitter":
			return import("@/components/icons/IconTwitter.vue");
		case "discord":
			return import("@/components/icons/IconDiscord.vue");
		case "telegram":
			return import("@/components/icons/IconTelegram.vue");
		case "dex":
			return import("@/components/icons/IconChart.vue");
		case "uniswap":
			return import("@/components/icons/IconUniswap.vue");
		default:
			break;
	}
});
</script>

<style lang="sass">
a
    text-decoration: none
    .social-item
        border-radius: 12px
        border: 1px solid black
        background-color: white
        display: flex
        transition: transform 0.3s ease
        justify-content: center
        align-items: center
        font-size: 14px
        @media (min-width: 768px)
            font-size: 25px
        &:hover, &:active, &:focus
            background-color: darken(white, 10%)
            cursor: pointer
            transform: scale(1.2)
        &.social-item--normal
            height: 50px
            width: 50px
            @media (min-width: 992px)
                height: 100px
                width: 100px
            svg
                height: 25px
                @media (min-width: 992px)
                    height: 50px
        &.social-item--small
            height: 40px
            width: 40px
            @media (min-width: 992px)
                height: 80px
                width: 80px
            svg
                height: 20px
                @media (min-width: 992px)
                    height: 40px
        &.social-item--x-small
            height: 25px
            width: 25px
            @media (min-width: 992px)
                height: 50px
                width: 50px
            svg
                height: 12.5px
                @media (min-width: 992px)
                    height: 25px
</style>
