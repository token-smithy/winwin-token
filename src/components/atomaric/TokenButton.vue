<template>
    <button class="token-button" :class="{'token-button--disabled': props.disabled}" >
                <slot></slot>
        </button>
</template>

<script setup>
const uniswap = import.meta.env.VITE_UNISWAP;

const props = defineProps({
	disabled: {
        type: Boolean,
        required: false,
        default: false
    },
});
</script>

<style lang="sass">

button
    &.token-button
        color: white
        background-color: $tertiary-color
        padding: 12px 24px
        border-radius: 8px
        border: 0
        transition: .3s
        display: block
        transition: transform 0.3s ease
        &:hover, &:focus, &:active
            // background-color: darken($tertiary-color, 10%)
            cursor: pointer
            transform: scale(1.1)
        &.token-button--disabled
            opacity: 0.7
            &:hover, &:focus, &:active
                transform: scale(1)
                pointer-events: none


</style>
