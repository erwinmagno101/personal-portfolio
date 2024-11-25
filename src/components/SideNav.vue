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

const navItemsRef = ref([])
const activeNav = computed(() => {
    return navigationStore.activeNav
})

watch(
    () => activeNav.value,
    newVal => {
        navItemsRef.value.forEach((item, index) => {
            if (index === activeNav.value)
                animate(item, { scale: 1.4, x: -30, opacity: 1 })
            else animate(item, { scale: 1, x: 0, opacity: 0.6 })
        })
    },
)

onMounted(() => {
    // navItemsRef.value.forEach((item, index) => {
    //     if (index === activeNav.value)
    //         animate(item, { scale: 1.5, x: -50, opacity: 1 })
    // })
})
</script>

<template>
    <div class="container">
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
