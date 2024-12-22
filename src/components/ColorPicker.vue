<script setup>
import { onMounted, ref, watch } from 'vue'
import { useColorGeneration } from '@/stores/colorgen'

const colorGeneration = useColorGeneration()

const currentColor = ref(null)

const generateColor = () => {
    currentColor.value = colorGeneration.generateRandomColor()

    document.documentElement.style.setProperty(
        '--primary-color',
        currentColor.value.colors.primary,
    )

    document.documentElement.style.setProperty(
        '--accent-color',
        currentColor.value.colors.secondary,
    )
}
</script>

<template>
    <div @click="generateColor">generate</div>
</template>
