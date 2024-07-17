<template>
	<div class="features-wrapper">
		<div class="features-inner-wrapper">
			<div><h1>FEATURES</h1></div>
			<div class="features-element">
				<card class="" data-aos="fade-left"> liquidity management </card>
			</div>
            <div class="features-element">
                <card  data-aos="fade-right"> protection holders against sellers </card>
            </div>
            <div class="features-element">
                <card  data-aos="fade-left"> buybacks </card>
            </div>
            <div class="features-element">
                <card  data-aos="fade-right"> token burning </card>
            </div>
            <div class="features-element">
			<card  data-aos="fade-up"> token rarecity </card>

            </div>
		</div>
	</div>
</template>

<script setup lang="ts">
import Card from "@/components/atomaric/Card.vue";
</script>
<style lang="sass">
.features-wrapper
    height: 400px
    display: flex
    flex-direction: column
    justify-content: center
.features-inner-wrapper
    position: relative
    margin: 0px auto
    position: relative
    width: fit-content
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center

    .features-element
        transition: transform 0.3s ease
        text-align: center
        &:nth-child(2)
            transform: rotate(13.161deg)
            left: -300px
            top: -100px
            position: absolute
            &:hover, &:active, &:focus
                transform: scale(1.2) rotate(-13.161deg)
        &:nth-child(3)
            transform: rotate(-13.161deg)
            right: -350px
            top: -100px
            position: absolute
            &:hover, &:active, &:focus
                transform: scale(1.2) rotate(13.161deg)
        &:nth-child(4)
            transform: rotate(-11.161deg)
            left: -200px
            top: 50px
            position: absolute
            &:hover, &:active, &:focus
                transform: scale(1.2) rotate(11.161deg)
        &:nth-child(5)
            transform: rotate(11.161deg)
            right: -200px
            top: 50px
            position: absolute
            &:hover, &:active, &:focus
                transform: scale(1.2) rotate(-11.161deg)
        &:nth-child(6)
            transform: rotate(1deg)
            left: 50%
            top: -150px
            position: absolute
            transform: translate(-50%, 0)
            width: fit-content
            &:hover, &:active, &:focus
                transform: scale(1.2) translate(-50%, 0)
</style>
