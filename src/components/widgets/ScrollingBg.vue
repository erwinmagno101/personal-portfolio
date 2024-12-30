<script setup>
import { animate } from 'motion'
import { onMounted, ref } from 'vue'

const bgRef = ref(null)

const bgTextAnimation = () => {
    const textElem1 = bgRef.value.querySelector('.bg-text-1')
    const textElem2 = bgRef.value.querySelector('.bg-text-2')
    const startAnim = () => {
        animate(
            textElem1,
            { x: ['0%', '-35%'] },
            { duration: 10, easing: 'linear' },
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
            { duration: 10, easing: 'linear' },
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
    <div ref="bgRef">
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
    </div>
</template>

<style scoped>
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
    top: 5%;
}

.bg-text-2 {
    position: absolute;
    right: -70%;
    top: 55%;
}
</style>
