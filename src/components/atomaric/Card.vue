<template>
	<div class="token-card">
		<slot></slot>
	</div>
</template>

<script setup></script>

<style lang="sass">
.token-card
    padding: 22px
    border-radius: 8px
    border: 3px solid $tertiary-color
    background: $secondary-color
</style>
