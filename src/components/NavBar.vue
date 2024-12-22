<script setup>
import { onMounted, ref, watch } from 'vue'
import { scroll, animate } from 'motion'

const navList = [
    { title: 'Home' },
    { title: 'Skills' },
    { title: 'Portfolio' },
    { title: 'About' },
    { title: 'Contact' },
]

const scrolled = ref(false)
const navContainerRef = ref(false)

const trackScroll = progress => {
    scrolled.value = progress > 0 ? true : false
}

watch(
    () => scrolled.value,
    newVal => {
        animateNav(newVal)
    },
)

const animateNav = condition => {
    const logo = navContainerRef.value.querySelector('.logo')
    const settings = navContainerRef.value.querySelector('.settings')

    if (condition) {
        animate(
            logo,
            { opacity: 0, pointerEvents: 'none' },
            { duration: 0.2, delay: 0.2 },
        )
        animate(
            settings,
            { opacity: 0, pointerEvents: 'none' },
            { duration: 0.2, delay: 0.2 },
        )
    } else {
        animate(
            logo,
            { opacity: 1, pointerEvents: 'all' },
            { duration: 0.2, delay: 0.2 },
        )
        animate(
            settings,
            { opacity: 1, pointerEvents: 'all' },
            { duration: 0.2, delay: 0.2 },
        )
    }
}

onMounted(() => {
    scroll(e => trackScroll(e.y.progress))
})
</script>

<template>
    <div class="nav-container" ref="navContainerRef">
        <div class="logo" @click="console.log('gg')">LOGO HERE</div>
        <nav>
            <div>
                <div v-for="(nav, index) in navList" :key="index">
                    {{ nav.title }}
                </div>
            </div>
        </nav>
        <div class="settings">LOGO HERE</div>
    </div>
</template>

<style scoped>
.nav-container {
    width: 100%;
    display: flex;
}

nav {
    flex: 1 1 0;
}

nav > div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem;
    width: fit-content;
    margin: 0 auto;
}
</style>
