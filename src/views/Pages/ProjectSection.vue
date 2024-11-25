<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { scroll, animate } from 'motion'

const projectRef = ref(null)

onMounted(() => {
    // animate based on scroll
    // projectRef.value.querySelectorAll('.sub-heading').forEach(item => {
    //     scroll(animate(item, { width: '500px' }, { easing: 'linear' }), {
    //         target: item,
    //         offset: ['start end', 'center center'],
    //     })
    // })
})
</script>

<template>
    <section ref="projectRef"></section>
</template>

<style scoped>
section {
    display: flex;
    flex-direction: column;
}
</style>
