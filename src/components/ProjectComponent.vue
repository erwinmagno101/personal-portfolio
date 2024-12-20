<script setup>
import ShadowEffect from './ShadowEffect.vue'
import { ref } from 'vue'
import FloatingBlock from './FloatingBlock.vue'

const hoverIndex = ref(null)

const projects_data = [
    {
        name: 'Coolrate',
        role: 'Frontend Web Developer',
        description:
            'Test Description Here Test Description Here Test Description Here Test Description Here',
        highlights: ['highlights 1', 'highlights 2', 'highlights 3'],
        tags: ['Tech1', 'Tech2', 'Tech3'],
    },
    {
        name: 'Trycicle',
        role: 'Frontend Web Developer',
        description: 'Test Description Here',
        highlights: ['highlights 1', 'highlights 2', 'highlights 3'],
        tags: ['Tech1', 'Tech2', 'Tech3'],
    },
    {
        name: 'TypeGuru',
        role: 'Full Stack',
        description: 'Test Description Here',
        highlights: ['highlights 1', 'highlights 2', 'highlights 3'],
        tags: ['Tech1', 'Tech2', 'Tech3'],
    },
]
</script>

<template>
    <div class="projects-container">
        <div v-for="(project, index) in projects_data" :key="index">
            <ShadowEffect>
                <div
                    class="project-block"
                    @mouseenter="hoverIndex = index"
                    @mouseleave="hoverIndex = null"
                >
                    <FloatingBlock v-if="index === hoverIndex">
                        <div class="floating-project">
                            <div>Project Name : {{ project.name }}</div>
                            <div>Role : {{ project.role }}</div>
                            <div>{{ project.description }}</div>
                            <div>
                                <div
                                    v-for="(value, index) in project.highlights"
                                    :key="index"
                                >
                                    {{ value }}
                                </div>
                            </div>
                            <div>
                                <div
                                    v-for="(value, index) in project.tags"
                                    :key="index"
                                >
                                    {{ value }}
                                </div>
                            </div>
                        </div>
                    </FloatingBlock>
                </div>
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

.floating-project {
    max-width: 500px;
}
</style>
