<script setup>
import { animate } from 'motion'
import { nextTick, onMounted, onUnmounted, ref } from 'vue'

const props = defineProps({
    title: String,
    content: String,
})

const floatingBlockRef = ref(null)

const animateFloatingBlock = async () => {
    await nextTick()

    animate(
        floatingBlockRef.value,
        { opacity: [0, 1] },
        { duration: 0.5, delay: 0.2 },
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
</script>

<template>
    <Teleport to="main">
        <div class="floating-block" ref="floatingBlockRef">
            <div>{{ title }}</div>
            <div>{{ content }}</div>
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
}

.floating-block > div:nth-child(2) {
    font-size: 0.8rem;
    opacity: 0.7;
}
</style>
