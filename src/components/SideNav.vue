<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { animate } from 'motion'
import { useNavigationStore } from '@/stores/navigation'

const navigationStore = useNavigationStore()

const navItems = [
    { title: 'Home', id: '1' },
    { title: 'Skills', id: '2' },
    { title: 'Project', id: '3' },
    { title: 'Blog', id: '4' },
    { title: 'Contact', id: '5' },
]

const nav = ref(null)
const navItemsRef = ref([])

const animateNav = activeIndex => {
    navItemsRef.value.forEach((item, index) => {
        if (index === activeIndex)
            animate(item, { scale: 1.4, x: -30, opacity: 1 })
        else animate(item, { scale: 1, x: 0, opacity: 0.6 })
    })
}

watch(
    () => navigationStore.activeNav,
    newVal => {
        animateNav(newVal)
    },
)

onMounted(() => {
    animateNav(navigationStore.activeNav)
    animate(nav.value, { opacity: [0, 1] }, { duration: 0.2 })
})
</script>

<template>
    <div class="container" ref="nav">
        <div
            :ref="element => (navItemsRef[index] = element)"
            class="nav-items"
            v-for="(item, index) in navItems"
            :key="item.id"
            @click="() => changeNav(index)"
        >
            {{ item.title }}
        </div>
    </div>
</template>

<style scoped>
.container {
    height: 100vh;
    margin: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    justify-content: center;
    font-size: 1rem;
    align-items: flex-end;
}

.nav-items {
    border-radius: 0.5rem;
    padding: 0.5rem;
    text-align: center;
    opacity: 0.6;
}
</style>
