<script setup>
import SideNav from '@/components/SideNav.vue'
import HeroSection from './Pages/HeroSection.vue'
import SkillSection from './Pages/SkillSection.vue'
import ProjectSection from './Pages/ProjectSection.vue'
import BlogSection from './Pages/BlogSection.vue'
import ContactSection from './Pages/ContactSection.vue'
import { onMounted, ref, watch } from 'vue'
import { animate, scroll } from 'motion'
import FloatingNav from '@/components/FloatingNav.vue'

const heroIsVisible = ref(null)
</script>

<template>
    <div class="canvas">
        <div class="left">
            <SideNav v-if="!heroIsVisible" />
        </div>

        <div class="center">
            <FloatingNav />
            <main class="layout">
                <HeroSection v-model:isVisible="heroIsVisible" />
                <SkillSection />
                <ProjectSection />
                <BlogSection ref="blogsectionRef" />
                <ContactSection ref="contactsectionRef" />
            </main>
            <footer class="layout"></footer>
        </div>
        <div class="right"></div>
    </div>
</template>

<style scoped>
.canvas {
    font-family: 'League Spartan', sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    letter-spacing: 0.2rem;
    display: flex;
    flex-direction: ro;
}

.left {
    flex: 1 1 0;
    position: sticky;
    top: 0;
    height: 100vh;
}

.center {
    width: 75%;
    margin: auto;
}

.right {
    flex: 1 1 0;
    height: 100vh;
    position: sticky;
    top: 0px;
}

.layout {
    margin: auto;
    padding: auto 1rem;
}

main {
    display: flex;
    flex-direction: column;
    gap: 20rem;
}
</style>
