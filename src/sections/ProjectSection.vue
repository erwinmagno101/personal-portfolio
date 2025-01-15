<script setup></script>
<template>
    <section>
        <div>
            <h2>Featured Projects</h2>
            <div class="projects-container">
                <div class="project" v-for="i in 3" :key="i"></div>
            </div>
        </div>

        <div>
            <h2>Personal Projects</h2>
            <div class="projects-container"></div>
        </div>
    </section>
</template>

<style scoped>
.projects-container {
    display: flex;
    gap: 1rem;
}

section div > :first-child {
    margin-bottom: 1rem;
}

.project {
    flex: 1;
    background: red;
    height: 350px;
}
</style>
