<script setup>
import WelcomeSection from './Pages/WelcomeSection.vue'
</script>

<template>
    <div class="canvas">
        <nav class="layout">
            <div class="nav-container">
                <div class="logo">
                    <div>LOGO</div>
                </div>
                <div class="time">PH, SIQUIJOR - 8:35 PM</div>
                <div class="drawer">
                    <div class=""></div>
                </div>
            </div>
        </nav>
        <main class="layout">
            <WelcomeSection />
        </main>
        <footer class="layout"></footer>
    </div>
</template>

<style>
.canvas {
    font-family: 'League Spartan', sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    letter-spacing: 0.2rem;
}

.layout {
    width: 70%;
    margin: auto;
}

nav {
    padding-top: 3rem;
}

.nav-container {
    border: 0.1px solid #373a40;
    display: flex;
    align-items: center;
    flex-direction: row;
    height: 64px;
    border-radius: 5px;
}

.logo {
    flex: 1 1 0;
    border-right: 0.1px solid #373a40;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 2rem;
}

.logo div {
    margin: auto 0;
    width: fit-content;
}

.time {
    padding: 0 1rem;
    border-right: 0.1px solid #373a40;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 2rem;
}

.drawer {
    padding: 0 1rem;
}

.drawer > div {
    height: 32px;
    width: 32px;
    border-radius: 100%;
    border: 1px solid white;
}
</style>
