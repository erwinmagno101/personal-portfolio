<script setup>
import ProjectItem from '@/components/widgets/ProjectItem.vue'
import { onMounted, ref } from 'vue'
import { animate, inView } from 'motion'

const featuredProjects = [
    {
        name: 'Coolrate',
        description:
            'CoolRate is a streamlined solution for managing financial and operational workflows in service and installation businesses. Designed with user efficiency in mind, the platform provides intuitive tools for tracking business performance and improving overall operations. ',
        tags: [
            'Vue 3',
            'Tailwind CSS',
            'Javascript',
            'Laravel',
            'PHP',
            'Inertia Js',
            'MySql',
        ],
    },
    {
        name: 'Trycicle Franchising',
        description:
            'A system designed to simplify and automate the tricycle franchising process. It provides an efficient platform for managing franchise applications, renewals, and approvals, ensuring compliance with local regulations. With a user-friendly interface and robust backend, reduces administrative overhead.',
        tags: [
            'Vue 3',
            'Tailwind CSS',
            'Javascript',
            'Laravel',
            'PHP',
            'Inertia Js',
            'SQLite',
        ],
    },
]

const personalProjects = [
    {
        name: 'Type Guru',
        description:
            'A typing test platform inspire by the website monkeytype.com made out of passion for typing.',
        tags: ['React Js', 'CSS', 'Javascript', 'Redux'],
    },

    {
        name: 'Seekihood',
        description:
            'An easy-to-use app that helps travelers explore new places in the island of Siquijor. Users can view information about destinations, leave reviews, save their favorite spots. It’s a straightforward and interactive tool for anyone looking to make the most of their travels.',
        tags: ['Flutter', 'Dart', 'Firebase', 'Cloud Firestore', 'GCP'],
    },

    {
        name: 'Language Translator App',
        description:
            'Language translator app, supporting multiple languages for quick and accurate word and phrase translations. It also includes a mini game that helps users enhance their language skills in an engaging way, blending practical translation tools with an interactive learning element.',
        tags: [
            'Java',
            'Gradle',
            'XML',
            'Jetpack',
            'okHttp',
            'Android Studio',
            'SQLite',
        ],
    },
    {
        name: 'Food Delivery App',
        description:
            'The app provides a user-friendly interface that allows customers to browse restaurant menus, place orders, and track deliveries. It features intuitive navigation with clear categories for quick food selection.',
        tags: ['Java', 'Gradle', 'XML', 'Android Studio', 'SQLite'],
    },
]

const projectSectionRef = ref(null)

const headingMountAnim = e => {
    animate(e.target, { opacity: 1, y: [50, 0] }, { duration: 0.5 })
}

onMounted(() => {
    inView('.project-heading', headingMountAnim, {
        margin: '0px 0px -400px 0px',
    })
})
</script>
<template>
    <section ref="projectSectionRef">
        <div>
            <h2 class="project-heading">Featured Projects</h2>
            <div class="projects-container featured">
                <ProjectItem
                    v-for="(data, index) in featuredProjects"
                    :key="data"
                    :data="data"
                    :index="index"
                />
            </div>
        </div>

        <div>
            <h2 class="project-heading">Personal Projects</h2>
            <div class="projects-container personal">
                <ProjectItem
                    v-for="(data, index) in personalProjects"
                    :key="data"
                    :data="data"
                    :index="index"
                />
            </div>
        </div>
    </section>
</template>

<style scoped>
h2 {
    opacity: 0;
}

section {
    display: flex;
    flex-direction: column;
    gap: 300px;
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
