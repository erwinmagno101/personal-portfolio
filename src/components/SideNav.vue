<script setup>
import { onMounted, ref, watch } from 'vue'
import { animate } from 'motion'

const navItems = [
    { title: 'Home', id: '1' },
    { title: 'Project', id: '2' },
    { title: 'Blog', id: '3' },
    { title: 'Contact', id: '4' },
]

const activeIndex = ref(null)

const navItemsRef = ref([])

onMounted(() => {
    changeNav(0)
})

const changeNav = navIndex => {
    activeIndex.value = navIndex
}

watch(
    () => activeIndex.value,
    newVal => {
        navItemsRef.value.forEach((item, index) => {
            if (index === 0) return
            else animate(item, { flex: 1 }, { duration: 0.3 })

            if (index === newVal) {
                animate(item, { flex: 3 }, { duration: 0.3, delay: 0.1 })
            }
        })
    },
)
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
    gap: 1rem 0;
}

.nav-items {
    flex: 1;
    transition:
        flex 0.3s ease,
        background-color 0.3s ease;
    border: 1px solid #373a40;
    border-radius: 0.5rem;
    padding: 0.5rem;
}

.nav-items:first-of-type {
    flex: none;
    height: 64px;
}
</style>
