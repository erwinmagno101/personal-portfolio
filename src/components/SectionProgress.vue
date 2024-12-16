<script setup>
import { useSectionProgressStore } from '@/stores/section_progress'
import { animate } from 'motion'
import { onMounted, ref, watch } from 'vue'

const sectionProgressStore = useSectionProgressStore()
const indicatorRef = ref(null)

watch(
    () => sectionProgressStore.progress,
    newVal => {
        animate(indicatorRef.value, { height: `${newVal}%` }, { duration: 0 })
    },
)

watch(
    () => sectionProgressStore.displayProgress,
    newVal => {
        animate(
            indicatorRef.value,
            { opacity: newVal ? [0, 1] : [1, 0] },
            { duration: 0.2 },
        )
    },
)

onMounted(() => {
    animate(
        indicatorRef.value,
        { height: [0, `${sectionProgressStore.progress}%`] },
        { duration: 0.5 },
    )
})
</script>

<template>
    <div class="indicator-container">
        <div class="indicator" ref="indicatorRef"></div>
    </div>
</template>

<style scoped>
.indicator-container {
    width: 5px;
    height: 100vh;
    position: fixed;
    z-index: 99;
    left: 0px;
}

.indicator {
    background-color: black;
    width: 100%;
    opacity: 0.8;
    height: 0%;
}
</style>
