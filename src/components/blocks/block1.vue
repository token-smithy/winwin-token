<template>
	<div class="block1-wrapper">
		<h2>
            {{ props.title }}
        </h2>
		<div class="block1-inner">
			<card class="block1-left" data-aos="fade-left">
				<slot name="left"></slot>
			</card>
			<card class="block1-right" data-aos="fade-right">
                <slot name="right"></slot>
			</card>
		</div>
	</div>
</template>

<script setup>
import Card from "@/components/atomaric/Card.vue";

const props = defineProps({
	title: String,
});
</script>

<style lang="sass">
.block1-wrapper
    .block1-inner
        display: flex
        flex-direction: column
        gap: 20px
        text-align: center
        @media (min-width: 768px)
            flex-direction: row
        .block1-left
            display: flex
            flex-direction: column
            justify-content: center
            align-items: center
            img
                width: 250px
                @media (min-width: 768px)
                    width: 350px
        .block1-right
            display: flex
            flex-direction: column
            gap: 20px
            .block1-card
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
