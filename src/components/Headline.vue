<template>
	<div class="token-headline">
        <img src="@/assets/img/header.jpeg" alt="">
	</div>
</template>

<script setup>
</script>

<style lang="sass">
.token-headline
    background-color: black
    display: flex
    flex-direction: column
    color: white
    @media (min-width: 768px)
        flex-direction: row
    img
        width: 100%
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
