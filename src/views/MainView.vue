<script setup>
import WelcomeSection from './Pages/WelcomeSection.vue'
import FloatingNav from '@/components/FloatingNav.vue'
</script>

<template>
    <div class="canvas">
        <div class="left"></div>

        <div class="center">
            <nav class="layout">
                <FloatingNav />
            </nav>
            <main class="layout">
                <WelcomeSection />
                <WelcomeSection />
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
}

.center {
    width: 80%;
    margin: auto;
}

.right {
    flex: 1 1 0;
}

.layout {
    width: 90%;
    margin: auto;
    padding: auto 1rem;
}

nav {
    padding-top: 3rem;
}
</style>
