<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { scroll, animate, inView } from 'motion'
import { useNavigationStore } from '@/stores/navigation'

const navigationStore = useNavigationStore()
const skillRef = ref(null)

onMounted(() => {
    inView(skillRef.value, () => {
        navigationStore.setActiveNav(1)
        console.log('visible skill')

        return () => {}
    })
})
</script>

<template>
    <section ref="skillRef">gg</section>
</template>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    min-height: 200vh;
    background-color: red;
}
</style>
