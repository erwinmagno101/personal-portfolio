<script setup>
import { ref } from 'vue'

const sectionRef = ref(null)

defineExpose({
    getDom: () => sectionRef.value,
})
</script>

<template>
    <section ref="sectionRef">
        <slot></slot>
    </section>
</template>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    min-height: 90vh;
    gap: 15rem;
}
</style>
