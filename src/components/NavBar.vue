<script setup>
import { animate } from 'motion'
import { onMounted, onUnmounted, watch } from 'vue'
import { ref } from 'vue'
import CtaNav from './widgets/CtaNav.vue'

const showNav = ref(true)
const navRef = ref(null)
const sw = defineModel()

const trackScrollDir = e => {
    console.log()
    if (e.deltaY > 0 && document.documentElement.scrollTop > 50) {
        showNav.value = false
    }

    if (e.deltaY < 0) {
        showNav.value = true
    }
}

const navAnimation = value => {
    if (value) {
        animate(navRef.value, { opacity: 1, y: [-30, 0] }, { duration: 0.2 })
        return
    }

    animate(navRef.value, { opacity: 0, y: [0, -30] }, { duration: 0.2 })
}

watch(
    () => showNav.value,
    newVal => {
        navAnimation(newVal)
    },
)

onMounted(() => {
    document.addEventListener('wheel', trackScrollDir)
    animate(navRef.value, { opacity: [0, 1], y: [-30, 0] }, { duration: 0.2 })
})

onUnmounted(() => {
    document.removeEventListener('wheel', trackScrollDir)
})
</script>

<template>
    <nav ref="navRef">
        <div>LOGO</div>
        <ul>
            <li @click="sw = false">Home</li>
            <li>About</li>
            <li>Projects</li>
        </ul>
        <div>
            <CtaNav />
        </div>
    </nav>
</template>

<style scoped>
nav {
    display: flex;
    gap: 1rem;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    padding: 1rem 2rem;
    align-items: center;
    background-color: black;
}

ul > li {
    cursor: pointer;
}

nav > :nth-child(1) {
    flex: 1;
}

nav > :nth-child(2) {
    display: flex;
    gap: 1rem;
    list-style: none;
}

nav > :nth-child(3) {
    padding-left: 2rem;
}
</style>
