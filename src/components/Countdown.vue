<template>
	<div class="countdown">
		<slot :days="differenceDays" :hours="differenceHours" :minutes="differenceMinutes"
        :seconds="differenceSeconds"
        >
			<div>{{ differenceDays }}d {{ differenceHours }}h {{ differenceMinutes }}m {{ differenceSeconds }}s</div>
		</slot>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";
const seconds = ref(0);
let _timerId:ReturnType<typeof setTimeout>;

interface Props {
	modelValue: number;
	end: Date;
}

const emit = defineEmits(["update:modelValue"]);

const props = withDefaults(defineProps<Props>(), {
	modelValue: 0,
});

const differenceDays = computed(() => {
    if(seconds.value <= 0){
        return 0
    } 
    return Math.floor(seconds.value / (3600 * 24))
});
//tage abziehen
const differenceHours = computed(() => {
    if(seconds.value <= 0){
        return 0
    }
    return Math.floor((seconds.value - differenceDays.value * 3600 * 24) / 3600)
});
//tage + stunden abziehen
const differenceMinutes = computed(() =>
	{
        if(seconds.value <= 0){
            return 0
        }
        return Math.floor((seconds.value - differenceDays.value * 3600 * 24 - differenceHours.value * 3600) / 60)
    }
);
const differenceSeconds = computed(() =>
	{
        console.log("seconds.value", seconds.value);
        
        if(seconds.value <= 0){
            return 0
        }
        
        return Math.floor((seconds.value - differenceDays.value * 3600 * 24 - differenceHours.value * 3600 - differenceMinutes.value * 60))
    }
);

onMounted(() => {
    console.log("props.end", props.end);
    
	seconds.value = Math.round((props.end.getTime() - new Date().getTime()) / 1000);
	if (seconds.value > 0) {
		_timerId = setInterval(() => {
			seconds.value--;
            emit("update:modelValue", seconds.value)

			if (seconds.value <= 0) {
                
				clearInterval(_timerId);
			}
		}, 1000);
        
	}
    emit("update:modelValue", seconds.value)

});


onUnmounted(() => clearInterval(_timerId));
</script>
