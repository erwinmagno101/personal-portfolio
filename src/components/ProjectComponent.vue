<script setup>
import ShadowEffect from './ShadowEffect.vue'
import placeholderImage from '../assets/images/placeholder.jpg'

const projects_data = [
    {
        name: 'Coolrate',
        role: 'Frontend Web Developer',
        type: 'Project Hire',
        description:
            'CoolRate is a streamlined solution for managing financial and operational workflows in service and installation businesses. Designed with user efficiency in mind, the platform provides intuitive tools for tracking business performance and improving overall operations. ',
        tags: [
            'Vue 3',
            'Tailwind CSS',
            'Javascript',
            'Laravel',
            'PHP',
            'InertiaJS',
            'MySQL',
        ],
        images: [placeholderImage],
    },
    {
        name: 'Trycicle Franchising System',
        type: 'Project Hire',
        role: 'Frontend Web Developer',
        description: `A system designed to simplify and automate the tricycle franchising process. It provides an efficient platform for managing franchise applications, renewals, and approvals, ensuring compliance with local regulations. With a user-friendly interface and robust backend, reduces administrative overhead.`,
        tags: [
            'Vue 3',
            'Tailwind CSS',
            'Javascript',
            'Laravel',
            'PHP',
            'InertiaJS',
            'SQLite',
        ],
        images: [placeholderImage],
    },
    {
        name: 'TypeGuru',
        type: 'Personal Project',
        role: 'Full Stack',
        description:
            'A typing test platform inspire by the website monkeytype.com made out of passion for typing.',
        tags: ['React Js', 'CSS', 'Javascript', 'Redux'],
        images: [placeholderImage],
    },
    {
        name: 'Seekihod',
        type: 'Capstone Project',
        role: 'Full Stack',
        description:
            'An easy-to-use app that helps travelers explore new places in the island of Siquijor. Users can view information about destinations, leave reviews, save their favorite spots. It’s a straightforward and interactive tool for anyone looking to make the most of their travels.',
        tags: ['Flutter', 'Dart', 'Firebase', 'Cloude Firestore', 'GCP'],
        images: [placeholderImage],
    },

    {
        name: 'Language Translator App',
        type: 'Project Hire',
        role: 'Full Stack',
        description:
            'Language translator app, supporting multiple languages for quick and accurate word and phrase translations. It also includes a mini game that helps users enhance their language skills in an engaging way, blending practical translation tools with an interactive learning element.',
        tags: [
            'Java',
            'Gradle',
            'XML',
            'Jetpack',
            'okHttp',
            'Android Studio',
            'SQlite',
        ],
        images: [placeholderImage],
    },

    {
        name: 'Food Ordering App',
        type: 'Project Hire',
        role: 'Full Stack',
        description:
            'The app provides a user-friendly interface that allows customers to browse restaurant menus, place orders, and track deliveries. It features intuitive navigation with clear categories for quick food selection.',
        tags: [
            'Java',
            'Gradle',
            'XML',
            'Jetpack',
            'okHttp',
            'Android Studio',
            'SQlite',
        ],
        images: [placeholderImage],
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
                    <img :src="data.images[0]" />
                </div>
            </ShadowEffect>

            <div
                class="description"
                :class="[index % 2 !== 0 ? 'left-align' : 'right-align']"
            >
                <div>{{ data.type }}</div>
                <div>{{ data.name }}</div>
                <div>Role: {{ data.role }}</div>
                <div>
                    {{ data.description }}
                </div>
                <div>
                    <div v-for="(tag, index) in data.tags" :key="index">
                        {{ tag }}
                    </div>
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
    border: 2px solid var(--accent-color);
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
    border-right: 2px solid var(--accent-color);
    transition: border 0.5s ease;

    padding-right: 1rem;
}

.left-align {
    left: 0;
    align-items: flex-start;
    text-align: left;
    border-left: 2px solid var(--accent-color);
    transition: border 0.5s ease;

    padding-left: 1rem;
}

.left-align > div:nth-child(5) {
    justify-content: flex-start;
}

.right-align > div:nth-child(5) {
    justify-content: flex-end;
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

.description > div:nth-child(4) {
    background-color: var(--primary-color);
    border: 2px solid var(--accent-color);
    transition:
        border 0.5s ease,
        background-color 0.5s ease;

    padding: 1rem;
    border-radius: 10px;
}

.description > div:nth-child(5) {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.description > div:nth-child(5) > div {
    border: 2px solid var(--accent-color);
    transition:
        border 0.5s ease,
        background-color 0.5s ease;
    background-color: var(--primary-color);
    border-radius: 5px;
    padding: 0.1rem 0.5rem;
    font-size: 0.9rem;
}
</style>
