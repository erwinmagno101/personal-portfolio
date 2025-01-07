<script setup>
import { animate, timeline } from 'motion'
import { onMounted, ref } from 'vue'

const bgRef = ref(null)

const bgTextAnimation = () => {
    const textElem1 = bgRef.value.querySelector('.bg-text-1')
    const textElem2 = bgRef.value.querySelector('.bg-text-2')
    const startAnim = () => {
        animate(
            textElem1,
            { x: ['0%', '-35%'] },
            { duration: 15, easing: 'linear' },
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
            { duration: 15, easing: 'linear' },
        ).finished.then(loop2)
    }

    const loop2 = () => {
        animate(textElem2, { x: '0%' }, { duration: 0 })
        requestAnimationFrame(() => startAnim2())
    }

    requestAnimationFrame(() => startAnim2())
}

const onMountAnimation = () => {
    const textElem1 = bgRef.value.querySelector('.bg-text-1')
    const textElem2 = bgRef.value.querySelector('.bg-text-2')

    const sequence = [
        [textElem1, { opacity: [0, 1] }, { duration: 0.5 }],
        [textElem2, { opacity: [0, 1] }, { duration: 0.5, at: 0 }],
    ]

    timeline(sequence, { delay: 1.3, easing: 'ease-in' })
}

onMounted(() => {
    onMountAnimation()
    // bgTextAnimation()
})
</script>

<template>
    <div ref="bgRef">
        <div class="bg-text-1">
            <div>FRONT_END</div>
        </div>
        <div class="bg-text-2">
            <div>WEB_DEV</div>
        </div>
    </div>
</template>

<style scoped>
.bg-text-1 > *,
.bg-text-2 > * {
    font-size: 18rem;
    font-weight: 900;
    opacity: 0.1;
}

.bg-text-1 {
    position: absolute;
    top: 5%;
}

.bg-text-2 {
    position: absolute;
    top: 55%;
}

.bg-text-1,
.bg-text-2 {
    display: flex;
    gap: 20rem;
    left: 50%;
    transform: translateX(-50%);
}
</style>
