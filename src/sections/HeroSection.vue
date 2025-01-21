<script setup>
import { LocateFixed, ArrowDown, Github, Linkedin, Mail } from 'lucide-vue-next'
import { animate, timeline, stagger, scroll } from 'motion'
import { onMounted, onUnmounted, ref } from 'vue'

const sw = defineModel({})

const heroRef = ref(null)

let finishedEnterAnim = false

const onEnterAnim = () => {
    const note = heroRef.value.querySelector('.note')

    const sequence = [
        [note, { opacity: [0, 1], y: [-25, 0] }, { duration: 0.2, delay: 0.2 }],
    ]
    timeline(sequence).finished.then(() => (finishedEnterAnim = true))
}

const onExitAnim = event => {
    if (event.deltaY < 0 || !finishedEnterAnim) return

    const note = heroRef.value.querySelector('.note')

    const sequence = [[note, { y: [50], opacity: [1, 0] }, { duration: 0.2 }]]

    timeline(sequence).finished.then(() => (sw.value = true))
    finishedEnterAnim = false
}
const setViewportHeight = () => {
    document.documentElement.style.setProperty(
        '--vh',
        `${window.innerHeight * 0.01}px`,
    )
}

onMounted(() => {
    animate(
        heroRef.value.querySelector('.arrow'),
        { y: [5, -5] },
        {
            duration: 1,
            repeat: Infinity,
            direction: 'alternate',
            type: 'spring',
            stiffness: 50,
            damping: 300,
        },
    )

    onEnterAnim()
    document.addEventListener('wheel', onExitAnim)
    setViewportHeight()
    window.addEventListener('resize', setViewportHeight)
})

onUnmounted(() => {
    document.removeEventListener('wheel', onExitAnim)
    window.removeEventListener('resize', setViewportHeight)
})
</script>

<template>
    <section class="hero" ref="heroRef">
        <div class="note">
            CHECK ME OUT <ArrowDown class="arrow"></ArrowDown>
        </div>
    </section>
</template>

<style scoped>
section {
    height: calc(var(--vh) * 100);
    min-height: 600px;
    width: 100%;
    line-height: 1;
    user-select: none;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
}

.note {
    position: absolute;
    bottom: 50px;
    left: 0;
    margin-left: 50px;
    display: flex;
    align-items: center;
}

.arrow {
    margin-left: 1rem;
}
</style>
