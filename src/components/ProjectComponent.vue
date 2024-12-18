<script setup>
import ShadowEffect from './ShadowEffect.vue'
</script>

<template>
    <div class="projects-container">
        <div v-for="i in 3" :key="i">
            <ShadowEffect>
                <div class="project-block">gg</div>
            </ShadowEffect>
        </div>
    </div>
</template>

<style scoped>
.projects-container {
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    padding: 1rem;
    flex-wrap: wrap;
}

.projects-container > div {
    padding: 2rem;
    width: 50%;
}

.project-block {
    aspect-ratio: 1/0.6;
    border: 1px solid black;
    background-color: var(--primary-color);
}
</style>
