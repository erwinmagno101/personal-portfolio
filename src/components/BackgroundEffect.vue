<script setup>
import { animate } from 'motion'
import { onMounted, onUnmounted, ref } from 'vue'

const cameraRef = ref(null)
let isAnimating = false

const handleMouseTracking = e => {
    if (isAnimating) return

    isAnimating = true

    requestAnimationFrame(() => {
        const cameraRect = cameraRef.value.getBoundingClientRect()

        let yDistanceToMove = e.clientY - cameraRect.height / 2
        let xDistanceToMove = e.clientX - cameraRect.width / 2

        animate(
            cameraRef.value,
            {
                top: `${yDistanceToMove}px`,
                left: `${xDistanceToMove}px`,
            },
            { duration: 0.3 },
        )

        isAnimating = false
    })
}

onMounted(() => {
    document.addEventListener('mousemove', handleMouseTracking)
})

onUnmounted(() => {
    document.removeEventListener('mousemove', handleMouseTracking)
})
</script>

<template>
    <div class="background-grid">
        <div class="camera" ref="cameraRef"></div>
        <div class="grid-box-container" v-for="i in 190" :key="i">
            <div class="grid-box"></div>
        </div>
    </div>
</template>

<style scoped>
.background-grid {
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: -99;
    display: grid;
    grid-template-columns: repeat(auto-fill, calc(100vw / 19));
    opacity: 0.08;
    filter: blur(1px);
}

.grid-box-container {
    padding: 1px;
}

.camera {
    width: 150px;
    height: 150px;
    background-color: black;
    position: absolute;
    z-index: -98;
}

.grid-box {
    width: 100%;
    background-color: var(--primary-color);
    aspect-ratio: 1;
}
</style>
