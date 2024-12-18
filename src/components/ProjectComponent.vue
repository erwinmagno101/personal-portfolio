<script setup></script>

<template>
    <div class="projects-container">
        <div class="project-block" v-for="i in 3" :key="i">gg</div>
    </div>
</template>

<style scoped>
.projects-container {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    padding: 1rem;
}

.project-block {
    width: 100%;
    border: 1px solid black;
}
</style>
