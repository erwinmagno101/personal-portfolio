<script setup>
import WelcomeSection from './Pages/WelcomeSection.vue'
import FloatingNav from '@/components/FloatingNav.vue'
import SideNav from '@/components/SideNav.vue'
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
    width: 250px;
    height: 100vh;
    position: sticky;
    top: 0;
    display: flex;
}

.center {
    flex: 1 1 0;
}

.right {
    width: 250px;
}

.layout {
    width: 90%;
    margin: auto;
}

nav {
    padding-top: 3rem;
}
</style>
