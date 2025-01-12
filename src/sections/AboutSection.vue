<script setup>
import { animate, timeline } from 'motion'
import { onMounted } from 'vue'
import TechnologyCarousel from '@/components/widgets/TechnologyCarousel.vue'
import ServicesCp from '@/components/widgets/ServicesCp.vue'

onMounted(() => {})
</script>

<template>
    <section>
        <div>
            <ServicesCp />
        </div>

        <div>
            <h2>Technologies and Tools</h2>
            <TechnologyCarousel />
        </div>
    </section>
</template>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    gap: 300px;
    overflow-x: hidden;
}

h2 {
    font-size: 1.5rem;
    padding: 1rem 0;
    padding-bottom: 2rem;
}
</style>
