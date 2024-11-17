<script setup>
import FloatingNav from '@/components/FloatingNav.vue'
import SideNav from '@/components/SideNav.vue'
import HeroSection from './Pages/HeroSection.vue'
import AboutSection from './Pages/AboutSection.vue'
import ProjectSection from './Pages/ProjectSection.vue'
import BlogSection from './Pages/BlogSection.vue'
import ContactSection from './Pages/ContactSection.vue'
</script>

<template>
    <div class="canvas">
        <div class="left">
            <SideNav />
        </div>

        <div class="center">
            <nav class="layout">
                <FloatingNav />
            </nav>
            <main class="layout">
                <HeroSection />
                <AboutSection />
                <ProjectSection />
                <BlogSection />
                <ContactSection />
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
}

.layout {
    margin: auto;
    padding: auto 1rem;
}

nav {
    padding-top: 3rem;
}

main {
    display: flex;
    flex-direction: column;
    gap: 20rem;
}

main > * {
    min-height: 90vh;
    border: 1px solid white;
}
</style>
