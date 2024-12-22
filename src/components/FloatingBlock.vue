<script setup>
import { animate } from 'motion'
import { nextTick, onMounted, onUnmounted, ref } from 'vue'

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
</script>

<template>
    <Teleport to="main">
        <div class="floating-block" ref="floatingBlockRef">
            <slot />
        </div>
    </Teleport>
</template>

<style scoped>
.floating-block {
    pointer-events: none;
    position: fixed;
    z-index: 99;
    border-radius: 10px;
    background-color: var(--primary-color);
    border: 1px solid var(--accent-color);
    padding: 0.5rem 1rem;
}
</style>
