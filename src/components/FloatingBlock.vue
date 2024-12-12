<script setup>
import { animate } from 'motion'
import { nextTick, onMounted, onUnmounted, ref } from 'vue'

const props = defineProps({
    data: Object,
})

const floatingBlockRef = ref(null)

const animateFloatingBlock = async () => {
    await nextTick()

    animate(
        floatingBlockRef.value,
        { opacity: [0, 1] },
        { duration: 0.3, delay: 0.1 },
    )
}

const getMousePosition = e => {
    let yDistanceToMove = e.clientY
    let xDistanceToMove = e.clientX

    animate(
        floatingBlockRef.value,
        { top: `${yDistanceToMove}px`, left: `${xDistanceToMove + 20}px` },
        { duration: 0 },
    )
}

onMounted(() => {
    document.addEventListener('mousemove', getMousePosition)
    animateFloatingBlock()
})

onUnmounted(() => {
    document.removeEventListener('mousemove', getMousePosition)
})

const colorMastery = mastery => {
    switch (mastery) {
        case 'Peak':
            return 'red'
        case 'High':
            return 'orange'
        case 'Intermediate':
            return 'green'
    }
}
</script>

<template>
    <Teleport to="main">
        <div class="floating-block" ref="floatingBlockRef">
            <div>{{ data.name }}</div>
            <div>
                Mastery :
                <div :style="{ color: colorMastery(data.level) }">
                    {{ data.level }}
                </div>
            </div>
            <div>{{ data.description }}</div>
            <div class="tags-container">
                <div v-for="(item, index) in data.tag" :key="index">
                    {{ item }}
                </div>
            </div>
        </div>
    </Teleport>
</template>

<style scoped>
.floating-block {
    pointer-events: none;
    max-width: 300px;
    position: fixed;
    z-index: 99;
    background-color: var(--primary-color);
    border: 1px solid black;
    padding: 0.5rem 1rem;
}

.floating-block > div:nth-child(1) {
    font-size: 1rem;
}

.floating-block > div:nth-child(2) {
    font-size: 0.9rem;
    opacity: 0.8;
}

.floating-block > div:nth-child(2) > div {
    display: inline;
}

.floating-block > div:nth-child(3) {
    font-size: 0.9rem;
    opacity: 0.8;
    margin-bottom: 1rem;
}

.tags-container {
    display: flex;
    font-size: 0.8rem;
    gap: 0.5rem;
    flex-wrap: wrap;
}

.tags-container > div {
    padding: 0.1rem 0.5rem;
    border: 1px solid black;
}
</style>
