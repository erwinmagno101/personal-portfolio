<script setup>
import ShadowEffect from './ShadowEffect.vue'
import { ref } from 'vue'
import FloatingBlock from './FloatingBlock.vue'

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
            :style="{ flexDirection: index % 2 !== 0 ? 'row-reverse' : 'row' }"
        >
            <ShadowEffect>
                <div class="img-container">
                    <img src="../assets/images/Coolrate.png" />
                </div>
            </ShadowEffect>

            <div
                class="description"
                :class="[index % 2 !== 0 ? 'left-align' : 'right-align']"
            >
                <div>Featured Project</div>
                <div>Test Project</div>
                <div>
                    Test Descriptions here Test Descriptions here Test Test
                    Descriptions here Test Descriptions here Test Test
                    Descriptions here Test Descriptions here Test Descriptions
                    here Test Descriptions here Test Descriptions here
                </div>
                <div>
                    <div v-for="i in 5" :key="i">Tags{{ i }}</div>
                </div>
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
    gap: 10rem;
}

.project-block {
    display: flex;
    position: relative;
}

.img-container {
    width: 700px;
    height: 400px;
    border: 1px solid var(--accent-color);
    transition: border 0.5s ease;
    border-radius: 10px;
    overflow: hidden;
}

.img-container > img:hover {
    filter: grayscale(0%);
}

.img-container > img {
    transition: filter 0.5s ease;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.right-align {
    right: 0;
    align-items: flex-end;
    text-align: right;
    border-right: 1px solid var(--accent-color);
    transition: border 0.5s ease;

    padding-right: 1rem;
}

.left-align {
    left: 0;
    align-items: flex-start;
    text-align: left;
    border-left: 1px solid var(--accent-color);
    transition: border 0.5s ease;

    padding-left: 1rem;
}

.description {
    max-width: 600px;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    pointer-events: none;
}

.description > div {
    width: fit-content;
}

.description > div:nth-child(1) {
    font-size: 1rem;
    line-height: 1;
}

.description > div:nth-child(2) {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
    color: var(--accent-color);
    transition: color 0.5s ease;
}

.description > div:nth-child(3) {
    background-color: var(--primary-color);
    border: 1px solid var(--accent-color);
    transition:
        border 0.5s ease,
        background-color 0.5s ease;

    padding: 1rem;
    border-radius: 10px;
}

.description > div:nth-child(4) {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.description > div:nth-child(4) > div {
    border-radius: 5px;
    padding: 0.1rem 0.5rem;
    background-color: var(--primary-color);
    transition: background-color 0.5s ease;
}

.description > div:nth-child(4) > div {
    border: 1px solid var(--accent-color);
    transition: border 0.5s ease;

    padding: 0 0.5rem;
    font-size: 0.9rem;
}
</style>
