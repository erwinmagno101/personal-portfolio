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
        images: ['../assets/images/Coolrate.png'],
    },
    {
        name: 'Trycicle',
        role: 'Frontend Web Developer',
        description: 'Test Description Here',
        highlights: ['highlights 1', 'highlights 2', 'highlights 3'],
        tags: ['Tech1', 'Tech2', 'Tech3'],
        images: ['../assets/images/Coolrate.png'],
    },
    {
        name: 'TypeGuru',
        role: 'Full Stack',
        description: 'Test Description Here',
        highlights: ['highlights 1', 'highlights 2', 'highlights 3'],
        tags: ['Tech1', 'Tech2', 'Tech3'],
        images: ['../assets/images/Coolrate.png'],
    },
]
</script>

<template>
    <div class="projects-container">
        <div
            v-for="(data, index) in projects_data"
            :key="index"
            class="project-block"
        >
            <div class="img-container">
                <img src="../assets/images/Coolrate.png" />
            </div>
            <div class="description">
                <div>Featured Project</div>
                <div>Test Project</div>
                <div>
                    Test Descriptions here Test Descriptions here Test Test
                    Descriptions here Test Descriptions here Test Test
                    Descriptions here Test Descriptions here Test Descriptions
                    here Test Descriptions here Test Descriptions here
                </div>
                <div>tags</div>
                <div>links</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.projects-container {
    width: 70%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.project-block {
    display: flex;
    position: relative;
}

.img-container {
    width: 700px;
    height: 400px;
}

.img-container > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.description {
    max-width: 600px;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(0, -50%);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
}

.description > div {
    width: fit-content;
}

.description > div:nth-child(1) {
    font-size: 1rem;
}

.description > div:nth-child(2) {
    font-size: 1.5rem;
    font-weight: 700;
}

.description > div:nth-child(3) {
    background-color: var(--primary-color);
    border: 1px solid var(--font-color);
    padding: 1rem;
    border-radius: 5px;
}
</style>
