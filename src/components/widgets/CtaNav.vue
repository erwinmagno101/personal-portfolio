<script setup>
import { animate } from 'motion'
import { onMounted, ref } from 'vue'

const ctaRef = ref(null)

const hoverAnim = (target, state) => {
    let bg = target.children[0]

    animate(bg, { height: state ? '100%' : '0%' }, { duration: 0.2 })
    animate(
        target,
        { color: state ? 'black' : 'white', scale: state ? 1.1 : 1 },
        { duration: 0.1 },
    )
}

onMounted(() => {})
</script>

<template>
    <div
        class="cta-btn"
        ref="ctaRef"
        @mouseenter="e => hoverAnim(e.target, true)"
        @mouseleave="e => hoverAnim(e.target, false)"
    >
        <div></div>
        <div>Get in Touch</div>
    </div>
</template>

<style scoped>
.cta-btn {
    position: relative;
    padding: 0.3rem 1rem;
    border: 1px solid white;
    border-radius: 20px;
    color: white;
    background-color: black;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.cta-btn > :nth-child(1) {
    z-index: 1;
    background-color: white;
    width: 100%;
    height: 0%;
    z-index: 1;
    position: absolute;
}

.cta-btn > :nth-child(2) {
    position: relative;
    z-index: 1;
}
</style>
