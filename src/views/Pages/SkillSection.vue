<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { scroll, animate } from 'motion'

const skillRef = ref(null)
</script>

<template>
    <section ref="skillRef"></section>
</template>

<style scoped>
section {
    display: flex;
    flex-direction: column;
}
</style>
