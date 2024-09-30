<template>
       <div class="v-stepper">
        <div class="v-stepper__header">
            <div class="v-stepper__item" v-for="(step, index) in props.steps" :key="step.id" :class="{'active': step.id === modelValue.id }">
                <button   class="v-stepper__button">
                    <div>
                        <div class="v-stepper__icon">{{ index +1 }}</div>
                    </div>
                    <div class="v-stepper__title">
                        {{step.name}}
                    </div>
                </button>
                <hr />
            </div>
        </div>
        <!-- <div class="v-stepper-body">
            <template v-if="activeStep === 'PRESALE'">
                    PRESALE
            </template>
            <template v-if="activeStep === 'LIVE'">
                    live
            </template>
            <template v-if="activeStep === 'COMPLETED'">
                completed
            </template>
        </div> -->
       </div>
</template>

<script setup>
import {ref, computed} from "vue"

const modelValue = computed({
    get() {
    return props.modelValue
  },
  set(newValue) {
    emit("update:modelValue", newValue)

  }
})

const props = defineProps({
	modelValue: String,
    steps: Array
});

const steps = [
 "PRESALE",
 "LIVE",
 "COMPLETED"
]
</script>

<style lang="sass">
.v-stepper
    .v-stepper__header
        display: flex
        .v-stepper__item
            display: flex
            align-items: center
            opacity: 0.6
            &:not(:last-child)
                flex: 1 1 auto
            &.active
                opacity: 1
            hr
                flex: 1 1 100%
                height: 0px
                max-height: 0px
                transition: inherit
                border-style: solid
                border-width: thin 0 0 0
                margin: 0 16px
                display: none
                @media (min-width: 768px)
                    display: block
            .v-stepper__button
                display: flex
                padding: 0
                border: 0
                background-color: transparent
                align-items: center

                @media (min-width: 768px)
                    padding: 1.5rem
                    gap: 8px
                // &:hover, &:active, &:focus
                    // cursor: pointer
                .v-stepper__icon
                    width: 24px
                    height: 24px
                    border-radius: 24px
                    background-color: $tertiary-color
                    display: flex
                    align-items: center
                    justify-content: center
                    @media (min-width: 768px)
                        width: 24px
                        height: 24px
                        border-radius: 24px
                .v-stepper__title
                    font-size: 14px
                    margin-left: -5px
                    @media (min-width: 768px)
                        font-size: 18px
                        text-wrap: nowrap
                        margin-left: 0
</style>