<script setup>
import BackgroundEffect from '@/components/BackgroundEffect.vue'
import HeroSection from '@/sections/HeroSection.vue'
import SkillSection from '@/sections/SkillSection.vue'
import SectionProgress from '@/components/SectionProgress.vue'

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
        <header>
            <div class="Logo">LOGO HERE</div>
            <nav>
                <div v-for="(nav, index) in navList" :key="index">
                    {{ nav.title }}
                </div>
            </nav>
            <div class="Logo">LOGO HERE</div>
        </header>
        <main class="main">
            <HeroSection></HeroSection>
            <SkillSection></SkillSection>
            <HeroSection></HeroSection>
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
