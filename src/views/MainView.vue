<script setup>
import BackgroundEffect from '@/components/BackgroundEffect.vue'
import HeroSection from '@/sections/HeroSection.vue'
import SkillSection from '@/sections/SkillSection.vue'
import SectionProgress from '@/components/SectionProgress.vue'
import ScrollProgress from '@/components/ScrollProgress.vue'
import NavBar from '@/components/NavBar.vue'
import PortfolioSection from '@/sections/PortfolioSection.vue'
import { onMounted, ref } from 'vue'
import { useColorGeneration } from '@/stores/colorgen'

const colorGeneration = useColorGeneration()

const generateColor = () => {
    // const generatedColor = colorGeneration.generateRandomColor()
    // changeTheme(generatedColor)
    // localStorage.setItem('theme', JSON.stringify(generatedColor))
}

const changeTheme = color => {
    document.documentElement.style.setProperty(
        '--primary-color',
        color.colors.primary,
    )

    document.documentElement.style.setProperty(
        '--accent-color',
        color.colors.secondary,
    )
}

onMounted(() => {
    // const color = JSON.parse(localStorage.getItem('theme'))
    // if (color) {
    //     changeTheme(color)
    // }
})
</script>

<template>
    <div class="canvas">
        <BackgroundEffect />
        <SectionProgress />
        <ScrollProgress />
        <header id="header">
            <NavBar />
        </header>
        <main class="main" @click="generateColor">
            <HeroSection></HeroSection>
            <SkillSection></SkillSection>
            <PortfolioSection></PortfolioSection>
        </main>
        <footer></footer>
    </div>
</template>

<style scoped>
.canvas {
    font-family: 'Google Sans Flex', sans-serif;
    position: relative;
}

header {
    display: flex;
    padding: 1rem 1rem;
    position: sticky;
    top: 0px;
    z-index: 99;
}

main {
    display: flex;
    flex-direction: column;
    gap: 300px;
}
</style>
