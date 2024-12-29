<script setup>
import HeroSection from '@/sections/HeroSection.vue'
import NavBar from '@/components/NavBar.vue'
import { onMounted } from 'vue'
import SkillSection from '@/sections/SkillSection.vue'

onMounted(() => {})
</script>

<template>
    <div class="canvas">
        <header id="header">
            <NavBar />
        </header>
        <main class="main">
            <HeroSection />
            <SkillSection />
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
    padding: 0 100px;
}
footer {
    padding-bottom: 5rem;
}
</style>
