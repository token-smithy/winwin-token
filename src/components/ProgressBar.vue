<template>
<div class="progress" @mouseover="hovered = true" @mouseleave="hovered = false"> 
    <div class="label" >
        <template v-if="hovered">
            {{ props.modelValue }}/ {{ props.max }} ETH
        </template>
        <template v-else>
            {{ percentageString }} Complete
        </template>
    </div>
  <span class="value" :style="{'width': percentageString}" ></span>
</div>
</template>

<script setup lang="ts">
import {computed, ref} from "vue"

const hovered = ref(false)
interface Props {
	modelValue: number;
	max: number;
}
const props = withDefaults(defineProps<Props>(), {
	modelValue: 0,
    max: 10
});

const percentage = computed(() => props.modelValue / props.max * 100)

const percentageString = computed(() => percentage.value.toFixed(2) +"%")
</script>

<style lang="sass">
.progress
    height: 48px
    width: 100%
    background-color: #c9c9c9
    position: relative
    border-radius: 8px
    overflow: hidden
    .label
        content: attr(data-label)
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
        font-size: 20px
        color: $primary-color
        @media (min-width: 768px)
            font-size: 32px

    .value
        background-color: $tertiary-color
        display: inline-block
        height: 100%
        border-radius: 8px
        transition: width 5s ease
</style>