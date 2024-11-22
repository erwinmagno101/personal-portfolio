<script setup>
import FloatingNav from '@/components/FloatingNav.vue'
import SideNav from '@/components/SideNav.vue'
import HeroSection from './Pages/HeroSection.vue'
import AboutSection from './Pages/AboutSection.vue'
import ProjectSection from './Pages/ProjectSection.vue'
import BlogSection from './Pages/BlogSection.vue'
import ContactSection from './Pages/ContactSection.vue'
import { onMounted, ref, watch } from 'vue'
import { animate, scroll } from 'motion'
import SideContent from '@/components/SideContent.vue'
import { useTableofContentStore } from '@/stores/tablecontent'

const table = useTableofContentStore()
const heroIsVisible = ref(null)
</script>

<template>
    <div class="canvas">
        <div class="left">
            <SideNav v-if="!heroIsVisible" />
        </div>

        <div class="center">
            <main class="layout">
                <HeroSection v-model:isVisible="heroIsVisible" />
                <AboutSection />
                <ProjectSection />
                <BlogSection ref="blogsectionRef" />
                <ContactSection ref="contactsectionRef" />
            </main>
            <footer class="layout"></footer>
        </div>
        <div class="right">
            <SideContent v-if="table.tableData" :contents="table.tableData" />
        </div>
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
}
</style>
