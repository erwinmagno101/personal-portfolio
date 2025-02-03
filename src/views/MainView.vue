<script setup>
import HeroSection from '@/sections/HeroSection.vue'
import { onMounted, watch } from 'vue'
import AboutSection from '@/sections/AboutSection.vue'
import { ref } from 'vue'
import NavBar from '@/components/NavBar.vue'
import ProjectSection from '@/sections/ProjectSection.vue'
import { useScrollingStore } from '@/stores/scroll'
import { useMediaStore } from '@/stores/media'

const scrollingStore = useScrollingStore()
const mediaStore = useMediaStore()

onMounted(() => {
    scrollingStore.init()
})

const sw = ref(false)
</script>

<template>
    <div class="canvas" v-if="!mediaStore.isMobile">
        <header id="header" v-if="sw">
            <NavBar v-model="sw" />
        </header>
        <main class="main">
            <HeroSection v-if="!sw" v-model="sw" />
            <div class="sections" v-if="sw">
                <div>
                    <AboutSection />
                </div>
                <div>
                    <ProjectSection />
                </div>
            </div>
        </main>
        <!-- <footer></footer> -->
    </div>
    <div v-else class="mobile">
        <div>Mobile Responsiveness Under Construction...</div>
        <div>Visit the Website on PC</div>
    </div>
</template>

<style scoped>
.mobile {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 1rem;
}

.canvas {
    font-family: 'Poppins', serif;
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
.sections {
    display: flex;
    flex-direction: column;
    gap: 200px;
    overflow-x: hidden;
}
main {
    display: flex;
    flex-direction: column;
    gap: 300px;
}
footer {
    padding-bottom: 5rem;
}

.sections {
    padding: 5rem;
}
</style>
