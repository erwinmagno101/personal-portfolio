<script setup>
import { onUnmounted, ref, onMounted, watch } from 'vue'

const navRef = ref(null)
const isSticking = ref(false)

const checkStickyPosition = () => {
    if (!navRef.value) return

    const rect = navRef.value.getBoundingClientRect()

    if (rect.top <= 32) {
        isSticking.value = true
    } else {
        isSticking.value = false
    }
}

watch(
    () => isSticking.value,
    newVal => {
        console.log(newVal)
    },
)

onMounted(() => {
    window.addEventListener('scroll', checkStickyPosition)
})

onUnmounted(() => {
    window.removeEventListener('scroll', checkStickyPosition)
})
</script>

<template>
    <div class="nav-container" ref="navRef">
        <nav>
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
    width: 90%;
    margin: 0 auto;
    margin-top: 3rem;
    z-index: 99;
    padding: 1rem 0;
    background-color: var(---primary);
}
nav {
    padding: 0.5rem 0;
    display: flex;
    border: 0.1px solid var(---secondary);
    align-items: center;
    flex-direction: row;
    border-radius: 5px;
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
