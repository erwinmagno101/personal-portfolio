<script setup>
import BackgroundEffect from '@/components/BackgroundEffect.vue'
import HeroSection from '@/sections/HeroSection.vue'
import SkillSection from '@/sections/SkillSection.vue'
import SectionProgress from '@/components/SectionProgress.vue'
import ScrollProgress from '@/components/ScrollProgress.vue'
import NavBar from '@/components/NavBar.vue'

const navList = [
    { title: 'Home' },
    { title: 'Skills' },
    { title: 'Project' },
    { title: 'About' },
    { title: 'Contact' },
]
</script>

<template>
    <div class="canvas">
        <BackgroundEffect />
        <SectionProgress />
        <ScrollProgress />
        <header id="header">
            <NavBar />
        </header>
        <main class="main">
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
