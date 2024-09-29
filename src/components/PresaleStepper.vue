<template>
       <div class="v-stepper">
        {{ activeStep }}
        <div class="v-stepper-header">
            <button @click="activeStep= step" v-for="step in steps" :key="state" :class="{'active': state === activeStep}">{{step}}</button>
        </div>
        <div class="v-stepper-body">
            <template v-if="activeStep === 'presale'">
                    presale
            </template>
            <template v-if="activeStep === 'live'">
                    live
            </template>
            <template v-if="activeStep === 'completed'">
                completed
            </template>
        </div>
       </div>
</template>

<script setup>
import {ref} from "vue"

const activeStep = ref()

const steps = [
 "presale",
 "live",
 "completed"
]
</script>