<template>
    <div class="input-crypto">
        <div class="currency">
           $ETH
        </div>
		<input id="input" type="number" placeholder="0.001" v-model="value"/>
	</div>
</template>
<script setup lang="ts">
import {computed} from "vue"

interface Props {
	modelValue?: number;
}
const props = withDefaults(defineProps<Props>(), {
});

const emit = defineEmits(["update:modelValue"]);


const value = computed({
  get() {
    return props.modelValue
  },
  set(newValue) {
    emit("update:modelValue", newValue)

  }
})
</script>
<style lang="sass">
.input-crypto
    border-radius: 8px
    height: 50px
    background-color: white
    display: flex
    align-items: center
    font-size: 18px
    .currency
        padding-left: 12px
        padding-right: 8px
        color: $primary-color
    input
        width: 100%
        color: $primary-color
        border: 0
        padding: 8px 12px
        border-radius: 8px
        width: 100%
        outline: none
        height: 50px
        font-size: 20px
</style>
