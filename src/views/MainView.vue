<script setup>
import HeroSection from '@/sections/HeroSection.vue'

const navList = [
    { title: 'Home' },
    { title: 'Skills' },
    { title: 'Project' },
    { title: 'About' },
    { title: 'Contact' },
]
</script>

<template>
    <div>
        <header>
            <div class="Logo">LOGO HERE</div>
            <nav>
                <div v-for="(nav, index) in navList" :key="index">
                    {{ nav.title }}
                </div>
            </nav>
            <div class="Logo">LOGO HERE</div>
        </header>
        <main>
            <HeroSection></HeroSection>
        </main>
        <footer></footer>
    </div>
</template>

<style scoped>
div {
    font-family: 'Google Sans Flex', sans-serif;
}

header {
    display: flex;
    padding: 1rem 1rem;
}

nav {
    flex: 1 1 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: fit-content;
    padding: 0.5rem;
}
</style>
