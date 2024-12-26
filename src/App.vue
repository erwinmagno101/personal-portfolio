<script setup>
import MainView from './views/MainView.vue'
import { onMounted } from 'vue'

onMounted(() => {
    document.title = 'Developer Portfolio' // Change the browser tab title
})
</script>

<template>
    <MainView />
</template>

<style scoped></style>
