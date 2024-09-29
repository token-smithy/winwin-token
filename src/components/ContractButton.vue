<template>
        <token-button @mouseover="onMouseOver" @mouseleave="onMouseLeave"  @click="copy2Clipboard" class="contract-button">
            <div class="tooltip" v-if="showTooltip && clicked">
                Copied! 
            </div>
			{{ contract }} 
            <template v-if="showTooltip && clicked">
                <Icon icon="mdi:success" />
            </template>
            <template v-else>
                <Icon icon="uil:copy" />
            </template>
		</token-button>
</template>

<script setup lang="ts">
import {ref} from "vue"
import { Icon } from '@iconify/vue';
import TokenButton from "@/components/atomaric/TokenButton.vue";
const contract = "0xCd21a41a137BCAf8743E47D048F57D92398f7Da9";

const showTooltip = ref(false)
const clicked = ref(false)

function onMouseOver(){
    clicked.value = false;
    showTooltip.value = true
}

function onMouseLeave(){
    showTooltip.value = false
}
function copy2Clipboard() {
    clicked.value = true;
	navigator.clipboard.writeText(contract);
}
</script>

<style lang="sass">
.token-button
    &.contract-button
        position: relative
        display: flex
        align-items: center
        justify-content: center
        gap: 4px
        font-size: 10px
        @media (min-width: 768px)
            font-size: 13px
        &:hover, &:focus, &:active
            cursor: pointer
            transform: unset
        .tooltip
            position: absolute
            background-color: rgba(0,0,0, 0.5)
            padding: 12px
            top: -45px
            left: 50%
            transform: translate(-50%, 0)
            border-radius: 12px
    
</style>
