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
                    <div>
                        <img src="../assets/images/Coolrate.png" />
                        <div class="project-name">{{ project.name }}</div>
                    </div>
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
    padding: 0.5rem;
}

.project-block > div {
    width: 100%;
    height: 100%;
    position: relative;
    filter: grayscale(100%);
}

.gradient {
    background: rgb(255, 255, 255);
    background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(0, 0, 0, 0.700717787114846) 67%,
        rgba(0, 0, 0, 1) 100%,
        rgba(0, 0, 0, 1) 100%
    );
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
}

.project-name {
    font-size: 3rem;
    text-transform: uppercase;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    letter-spacing: 3px;
}

.project-block > div > img {
    width: 100%;
    height: 100%;
}
.floating-project {
    max-width: 500px;
}
</style>
