<script setup>
import { animate } from 'motion'
import { onUnmounted, ref } from 'vue'

const shadowRef = ref(null)
const componentRef = ref(null)

const hoverAnim = () => {
    document.addEventListener('mousemove', getMousePosition)

    animate(componentRef.value, { scale: 1.02 }, { duration: 0.1 })
    animate(shadowRef.value, { opacity: 1 }, { duration: 0.1 })
}

const exitHoverAnim = () => {
    document.removeEventListener('mousemove', getMousePosition)
    animate(componentRef.value, { scale: 1 }, { duration: 0.1 })
    animate(shadowRef.value, { opacity: 0 }, { duration: 0.1 })
}

const getMousePosition = e => {
    let effect_pos = shadowRef.value.getBoundingClientRect()

    let effect_center_x_pos = effect_pos.width / 2 + effect_pos.x

    let distanceMoveX = Math.min(
        (effect_center_x_pos - e.clientX) / 10,
        effect_pos.width / 15,
    )

    if (Math.abs(distanceMoveX) < effect_pos.width / 25)
        distanceMoveX =
            distanceMoveX > 0
                ? effect_pos.width / 25
                : (effect_pos.width / 25) * -1

    console.log(Math.abs(distanceMoveX))
    console.log(effect_pos.width / 25)

    animate(
        shadowRef.value,
        {
            x: distanceMoveX,
            y: Math.abs(distanceMoveX),
        },
        { duration: 0.2 },
    )
}

onUnmounted(() => {
    document.removeEventListener('mousemove', getMousePosition)
})
</script>

<template>
    <div class="effect-container" ref="componentRef">
        <div @mouseover="hoverAnim" @mouseleave="exitHoverAnim">
            <slot></slot>
        </div>
        <div class="shadow" ref="shadowRef"></div>
    </div>
</template>

<style scoped>
.effect-container {
    position: relative;
    cursor: pointer;
    width: 100%;
    height: 100%;
}

.shadow {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--font-color);
    z-index: -99;
    opacity: 0;
    top: 0px;
}
</style>
