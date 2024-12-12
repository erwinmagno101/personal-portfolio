<script setup>
import TechLogo from '@/components/TechLogo.vue'
import { onMounted, ref, watch } from 'vue'
import { animate } from 'motion'
import SectionHeader from '@/components/SectionHeader.vue'
import FloatingBlock from '@/components/FloatingBlock.vue'
import TechGrid from '@/components/TechGrid.vue'
</script>

<template>
    <section class="section">
        <SectionHeader title="Skills" />
        <div class="section-content">
            <h3>Technologies</h3>
            <p>Honed throughout my coding journey</p>
            <TechGrid />
        </div>
    </section>
</template>

<style scoped>
.section {
    min-height: 2000px;
    padding: 0 100px;
    display: flex;
    flex-direction: column;
    gap: 100px;
    padding-bottom: 30px;
}

h2 {
    font-size: 10rem;
}

h3 {
    font-size: 2rem;
    text-align: center;
}
.section-content > :nth-child(2) {
    text-align: center;
    margin-bottom: 100px;
}
</style>
