<script setup>
import ProjectItem from '@/components/widgets/ProjectItem.vue'
</script>
<template>
    <section>
        <div>
            <h2>Featured Projects</h2>
            <div class="projects-container">
                <ProjectItem v-for="i in 3" :key="i" />
            </div>
        </div>

        <div>
            <h2>Personal Projects</h2>
            <div class="projects-container">
                <ProjectItem v-for="i in 3" :key="i" />
            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    gap: 100px;
    overflow-x: hidden;
}
.projects-container {
    display: flex;
    gap: 5rem;
    flex-wrap: wrap;
}

section > div > :first-child {
    margin-bottom: 1rem;
}
</style>
