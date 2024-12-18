<script setup>
import { animate } from 'motion'
import { onUnmounted, ref } from 'vue'

const shadowRef = ref(null)
const btnRef = ref(null)

const hoverAnim = () => {
    document.addEventListener('mousemove', getMousePosition)

    animate(btnRef.value, { scale: 1.05 }, { duration: 0.1 })
    animate(shadowRef.value, { opacity: 1 }, { duration: 0.1 })
}

const exitHoverAnim = () => {
    document.removeEventListener('mousemove', getMousePosition)
    animate(btnRef.value, { scale: 1 }, { duration: 0.1 })
    animate(shadowRef.value, { opacity: 0 }, { duration: 0.1 })
}

const getMousePosition = e => {
    let button_pos = shadowRef.value.getBoundingClientRect()

    let button_center_x_pos = button_pos.width / 2 + button_pos.x

    let distanceMove = button_center_x_pos - e.clientX

    animate(shadowRef.value, { x: distanceMove / 10 }, { duration: 0 })
}

onUnmounted(() => {
    document.removeEventListener('mousemove', getMousePosition)
})
</script>

<template>
    <div class="btn-container" ref="btnRef">
        <div @mouseover="hoverAnim" @mouseleave="exitHoverAnim">
            <slot></slot>
        </div>
        <div class="shadow" ref="shadowRef"></div>
    </div>
</template>

<style scoped>
.btn-container {
    position: relative;
    cursor: pointer;
}

.shadow {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--font-color);
    z-index: -99;
    opacity: 0;
    top: 10px;
}
</style>
