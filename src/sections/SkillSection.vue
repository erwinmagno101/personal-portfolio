<script setup>
import { ref, watch } from 'vue'

const skills = [
    {
        name: 'Flutter',
        description: 'Cross-platform UI toolkit by Google.',
        logo: 'flutter',
        link: 'https://flutter.dev/',
        tag: 'Framework',
        expert: false,
        color: '#62b7ea',
    },
    {
        name: 'Vue js',
        description: 'Progressive JavaScript framework for UIs.',
        logo: 'vue',
        link: 'https://vuejs.org/',
        tag: 'Framework',
        expert: true,
        color: '#1dd1a1',
    },
    {
        name: 'React js',
        description: 'JavaScript library for building UIs.',
        logo: 'react',
        link: 'https://react.dev/',
        tag: 'Framework',
        expert: false,
        color: '#0abde3',
    },
    {
        name: 'Tailwind CSS',
        description: 'A utility-first CSS framework',
        logo: 'tailwind',
        link: 'https://tailwindcss.com/',
        tag: 'Framework',
        expert: true,
        color: '#0284C7',
    },
    {
        name: 'Javascript',
        description: 'Popular language for web development.',
        logo: 'javascript',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        tag: 'Language',
        expert: true,
        color: '#f2c12d',
    },
    {
        name: 'Java',
        description: 'Widely used language for cross-platform apps.',
        logo: 'java',
        link: 'https://www.java.com/en/',
        tag: 'Language',
        expert: false,
        color: '#eb3536',
    },
    {
        name: 'Dart',
        description: 'Programming language optimized for UIs.',
        logo: 'dart',
        link: 'https://dart.dev/',
        tag: 'Language',
        expert: false,
        color: '#34e7e4',
    },

    {
        name: 'CSS',
        description: 'Stylesheets for designing web pages.',
        logo: 'css',
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        tag: 'Language',
        expert: true,
        color: '#36adde',
    },
    {
        name: 'HTML',
        description: 'Markup language for structuring web pages.',
        logo: 'html',
        link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
        tag: 'Language',
        expert: true,
        color: '#f26c35',
    },
    {
        name: 'Mongo DB',
        description: 'NoSQL database for flexible data storage.',
        logo: 'mongodb',
        link: 'https://www.mongodb.com/',
        tag: 'Tool',
        color: '#00ed64',
    },
    {
        name: 'Firebase',
        description: 'Backend-as-a-Service by Google.',
        logo: 'firebase',
        link: 'https://firebase.google.com/',
        tag: 'Tool',
        color: '#ffc400',
    },
    {
        name: 'Android Studio',
        description: 'Official IDE for Android development.',
        logo: 'android',
        link: 'https://developer.android.com/studio',
        tag: 'Tool',
        color: '#00e676',
    },
    {
        name: 'VS Code',
        description: 'Lightweight, extensible code editor by Microsoft.',
        logo: 'vscode',
        link: 'https://code.visualstudio.com/',
        tag: 'Tool',
        expert: true,
        color: '#087ebf',
    },
    {
        name: 'GitHub',
        description: ' Hosting for version control and collaboration.',
        logo: 'github',
        link: 'https://github.com/',
        tag: 'Platform',
        expert: true,
        color: '#010409',
        textColor: 'white',
    },
]

const indexCounter = ref([])

let counter = 0
const pointGeneration = index => {
    if (index > 30) return false

    if (index > 10 && index < 20) {
        if (index % 2 === 0) {
            counter += 1
            indexCounter.value.push({
                point_index: index,
                skill_index: counter - 1,
            })
            return true
        }
    } else {
        if (index % 2 !== 0) {
            counter += 1
            indexCounter.value.push({
                point_index: index,
                skill_index: counter - 1,
            })
            return true
        }
    }

    return false
}
</script>

<template>
    <section class="section">
        <h2>Skills</h2>
        <div class="section-content">
            <h3>Technologies</h3>
            <div class="grid">
                <div v-for="i in 40" :key="i" class="grid-block">
                    <div v-if="pointGeneration(i)" class="point">
                        <div class="tech-block"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.section {
    min-height: 100vh;
    padding: 0 100px;
    display: flex;
    flex-direction: column;
    gap: 100px;
    padding-bottom: 30px;
}

h2 {
    font-size: 10rem;
}

h3 {
    font-size: 2rem;
    text-align: center;
}

.grid {
    margin-top: 3rem;
    display: grid;
    gap: 0.25rem;
    grid-template-columns: repeat(10, 100px);
    place-content: center;
}

.grid-block {
    height: 100px;
    position: relative;
}

.point {
    height: 10px;
    width: 10px;
    border-radius: 100%;
    position: absolute;
    z-index: 98;
    bottom: -7px;
    right: -7px;
}

.tech-block {
    position: absolute;
    width: 200px;
    height: 200px;
    background-color: black;
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
