<script setup>
import { LocateFixed } from 'lucide-vue-next'
import { animate } from 'motion'
import { onMounted, ref } from 'vue'

const heroRef = ref(null)

const bgTextAnimation = () => {
    const textElem1 = heroRef.value.querySelector('.bg-text-1')
    const textElem2 = heroRef.value.querySelector('.bg-text-2')
    const startAnim = () => {
        animate(
            textElem1,
            { x: ['0%', '-35%'] },
            { duration: 7, easing: 'linear' },
        ).finished.then(loop)
    }

    const loop = () => {
        animate(textElem1, { x: '0%' }, { duration: 0 })
        requestAnimationFrame(() => startAnim())
    }

    requestAnimationFrame(() => startAnim())

    const startAnim2 = () => {
        animate(
            textElem2,
            { x: ['0%', '35.4%'] },
            { duration: 8, easing: 'linear' },
        ).finished.then(loop2)
    }

    const loop2 = () => {
        animate(textElem2, { x: '0%' }, { duration: 0 })
        requestAnimationFrame(() => startAnim2())
    }

    requestAnimationFrame(() => startAnim2())
}

onMounted(() => {
    bgTextAnimation()
})
</script>

<template>
    <section class="hero" ref="heroRef">
        <div class="bg-text-1">
            <div>FRONT_END</div>
            <div>FRONT_END</div>
            <div>FRONT_END</div>
        </div>
        <div class="bg-text-2">
            <div>WEB_DEV</div>
            <div>WEB_DEV</div>
            <div>WEB_DEV</div>
        </div>
    </section>
</template>

<style scoped>
section {
    height: 900px;
    width: 100%;
    line-height: 1;
    user-select: none;
    overflow-x: hidden;
    position: relative;
}

.bg-text-1 > *,
.bg-text-2 > * {
    font-size: 20rem;
    font-weight: 900;
    opacity: 0.1;
}

.bg-text-1,
.bg-text-2 {
    display: flex;
    gap: 20rem;
}

.bg-text-1 {
    position: absolute;
    left: -40%;
    top: 10%;
}

.bg-text-2 {
    position: absolute;
    right: -70%;
    top: 60%;
}
</style>
