<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { scroll, animate, inView } from 'motion'
import { useNavigationStore } from '@/stores/navigation'

const navigationStore = useNavigationStore()
const projectRef = ref(null)

onMounted(() => {
    // animate based on scroll
    // projectRef.value.querySelectorAll('.sub-heading').forEach(item => {
    //     scroll(animate(item, { width: '500px' }, { easing: 'linear' }), {
    //         target: item,
    //         offset: ['start end', 'center center'],
    //     })
    // })
    inView(projectRef.value, () => {
        navigationStore.setActiveNav(2)
        console.log('visible project')
        return () => {}
    })
})
</script>

<template>
    <section ref="projectRef">Project</section>
</template>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    min-height: 90vh;
    background-color: red;
}
</style>
