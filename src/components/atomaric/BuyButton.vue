<template>
	<a :href="uniswap" target="_blank" class="token-button--buy">
		<button>BUY</button>
	</a>
</template>

<script setup>
const uniswap = import.meta.env.VITE_UNISWAP;
</script>

<style lang="sass">
a
    &.token-button--buy
        display: block
        transition: transform 0.3s ease
        button
            color: white
            background-color: #f5bd03
            padding: 12px 24px
            border-radius: 8px
            border: 0
            transition: .3s
            &:hover, &:focus, &:active
                background-color: lighten(#f5bd03, 20%)
                cursor: pointer
                transform: scale(1.2)

</style>
