<script setup>
import HeroSection from '@/sections/HeroSection.vue'
import { onMounted } from 'vue'
import SkillSection from '@/sections/SkillSection.vue'
import { ref } from 'vue'
import NavBar from '@/components/NavBar.vue'

const sw = ref(false)

onMounted(() => {})
</script>

<template>
    <div class="canvas">
        <header id="header" v-if="sw">
            <NavBar />
        </header>
        <main class="main">
            <HeroSection v-if="!sw" v-model="sw" />
            <div class="sections" v-if="sw">
                <div>
                    <SkillSection />
                </div>
            </div>
        </main>
        <!-- <footer></footer> -->
    </div>
</template>

<style scoped>
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
