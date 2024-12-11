<script setup>
import HeroSection from '@/sections/HeroSection.vue'
import SkillSection from '@/sections/SkillSection.vue'
import { animate } from 'motion'
import { onMounted, onUnmounted, ref, watch } from 'vue'

const navList = [
    { title: 'Home' },
    { title: 'Skills' },
    { title: 'Project' },
    { title: 'About' },
    { title: 'Contact' },
]
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
    <div class="canvas">
        <div class="background-grid">
            <div class="camera" ref="cameraRef"></div>
            <div class="grid-box-container" v-for="i in 50" :key="i">
                <div class="grid-box"></div>
            </div>
        </div>
        <header>
            <div class="Logo">LOGO HERE</div>
            <nav>
                <div v-for="(nav, index) in navList" :key="index">
                    {{ nav.title }}
                </div>
            </nav>
            <div class="Logo">LOGO HERE</div>
        </header>
        <main>
            <HeroSection></HeroSection>
            <SkillSection></SkillSection>
        </main>
        <footer></footer>
    </div>
</template>

<style scoped>
.canvas {
    font-family: 'Google Sans Flex', sans-serif;
    position: relative;
}

.background-grid {
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: -99;
    display: grid;
    grid-template-columns: repeat(auto-fill, calc(100vw / 10));
    grid-template-rows: repeat(auto-fill, minmax(calc(100vh / 5)));
}

.grid-box-container {
    padding: 5px;
}

.camera {
    width: 300px;
    height: 300px;
    background-color: white;
    position: absolute;
    z-index: -98;
}

.grid-box {
    width: 100%;
    height: 100%;
    background-color: var(--primary-color);
}

header {
    display: flex;
    padding: 1rem 1rem;
}

nav {
    flex: 1 1 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: fit-content;
    padding: 0.5rem;
}

main {
    display: flex;
    flex-direction: column;
    gap: 300px;
}
</style>
