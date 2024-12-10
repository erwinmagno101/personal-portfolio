<script setup>
import { onMounted, ref, watch } from 'vue'
import { animate, scroll } from 'motion'

const navigationStore = useNavigationStore()

const heroIsVisible = ref(null)

watch(
    () => navigationStore.activeNav,
    newVal => {
        console.log(newVal)
    },
)
</script>

<template>
    <div></div>
</template>

<style scoped></style>
