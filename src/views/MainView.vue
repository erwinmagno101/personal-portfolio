<script setup>
import HeroSection from '@/sections/HeroSection.vue'
import { onMounted } from 'vue'
import SkillSection from '@/sections/SkillSection.vue'

onMounted(() => {})
</script>

<template>
    <div class="canvas">
        <!-- <header id="header"></header> -->
        <main class="main">
            <HeroSection />
        </main>
        <footer></footer>
    </div>
</template>

<style scoped>
.canvas {
    font-family: 'Inter', serif;
    font-optical-sizing: auto;
    position: relative;
    font-style: normal;
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
footer {
    padding-bottom: 5rem;
}
</style>
