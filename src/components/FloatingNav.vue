<script setup>
import { onUnmounted, ref, onMounted, watch } from 'vue'
import { animate, timeline } from 'motion'

const navRef = ref(null)
const navContainerRef = ref(null)
const isSticking = ref(false)

const checkStickyPosition = () => {
    if (!navContainerRef.value) return

    const rect = navContainerRef.value.getBoundingClientRect()

    if (rect.top <= 32) {
        isSticking.value = true
    } else {
        isSticking.value = false
    }
}

watch(
    () => isSticking.value,
    newVal => {
        navMorphAnimation(newVal)
    },
)

const navMorphAnimation = condition => {
    if (condition) {
        animate(navRef.value, { width: '80%' }, { duration: 0.5 })
    } else {
        animate(navRef.value, { width: '100%' }, { duration: 0.5 })
    }
}

onMounted(() => {
    window.addEventListener('scroll', checkStickyPosition)
})

onUnmounted(() => {
    window.removeEventListener('scroll', checkStickyPosition)
})
</script>

<template>
    <div class="nav-container" ref="navContainerRef">
        <nav ref="navRef">
            <div class="logo">
                <div>LOGO</div>
            </div>
            <div class="time">PH, SIQUIJOR - 8:35 PM</div>
            <div class="drawer">
                <div class=""></div>
            </div>
        </nav>
    </div>
</template>

<style scoped>
.nav-container {
    position: sticky;
    top: 0px;
    margin: 0 auto;
    margin-top: 3rem;
    z-index: 99;
    padding: 1rem 0;
    background-color: var(---primary);
}
nav {
    width: 100%;
    padding: 0.5rem 0;
    display: flex;
    border: 0.1px solid var(---secondary);
    align-items: center;
    flex-direction: row;
    border-radius: 5px;
    margin: 0 auto;
}

nav > * {
    padding: 0.5rem 1rem;
}

.logo {
    flex: 1 1 0;
    border-right: 0.1px solid #373a40;
    display: flex;
    align-items: center;
}

.logo div {
    margin: auto 0;
    width: fit-content;
}

.time {
    border-right: 0.1px solid #373a40;
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
