<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import TechLogo from '../TechLogo.vue'
import { animate, timeline } from 'motion'
import { DiscAlbum } from 'lucide-vue-next'

const skills = [
    {
        name: 'Flutter',
        description:
            'A cross-platform toolkit by Google for building modern, high-performance apps.',
        logo: 'flutter',
        link: 'https://flutter.dev/',
        tag: ['Framework', 'Mobile', 'UI', 'Tool'],
        level: 'Intermediate',
        color: '#62b7ea',
    },
    {
        name: 'Vue js',
        description:
            'A progressive JavaScript framework for creating fast, interactive, and reactive UIs.',
        logo: 'vue',
        link: 'https://vuejs.org/',
        tag: ['Framework', 'Frontend', 'JavaScript', 'UI'],
        level: 'High',
        color: '#1dd1a1',
    },
    {
        name: 'React js',
        description:
            'A powerful JavaScript library for building reusable, component-driven user interfaces.',
        logo: 'react',
        link: 'https://react.dev/',
        tag: ['Framework', 'Frontend', 'JavaScript', 'Library'],
        level: 'Intermediate',
        color: '#0abde3',
    },
    {
        name: 'Tailwind CSS',
        description:
            'A utility-first CSS framework for designing responsive, modern, and fast layouts.',
        logo: 'tailwind',
        link: 'https://tailwindcss.com/',
        tag: ['Framework', 'CSS', 'Frontend', 'Design'],
        level: 'High',
        color: '#0284C7',
    },
    {
        name: 'Javascript',
        description:
            'The most popular programming language for developing interactive, dynamic web applications.',
        logo: 'javascript',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        tag: ['Language', 'Frontend', 'Backend', 'Web'],
        level: 'Peak',
        color: '#f2c12d',
    },
    {
        name: 'Java',
        description:
            'A versatile programming language for enterprise-grade, mobile, and cross-platform applications.',
        logo: 'java',
        link: 'https://www.java.com/en/',
        tag: ['Language', 'Backend', 'Mobile', 'Enterprise'],
        level: 'Intermediate',
        color: '#eb3536',
    },
    {
        name: 'Dart',
        description:
            'An efficient programming language optimized for creating beautiful, high-performance UIs.',
        logo: 'dart',
        link: 'https://dart.dev/',
        tag: ['Language', 'Frontend', 'Mobile', 'UI'],
        level: 'Intermediate',
        color: '#34e7e4',
    },
    {
        name: 'CSS',
        description:
            'A styling language for designing visually appealing and responsive web layouts.',
        logo: 'css',
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        tag: ['Language', 'Design', 'Frontend', 'Web'],
        level: 'Peak',
        color: '#36adde',
    },
    {
        name: 'HTML',
        description:
            'The fundamental markup language for structuring and presenting content on the web.',
        logo: 'html',
        link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
        tag: ['Language', 'Markup', 'Frontend', 'Web'],
        level: 'Peak',
        color: '#f26c35',
    },
    {
        name: 'Mongo DB',
        description:
            'A NoSQL database offering flexible, scalable, and high-performance data storage.',
        logo: 'mongodb',
        link: 'https://www.mongodb.com/',
        tag: ['Database', 'NoSQL', 'Backend', 'Tool'],
        level: 'Intermediate',
        color: '#00ed64',
    },
    {
        name: 'Firebase',
        description:
            'A Google-backed platform for backend development, including database, authentication, and hosting.',
        logo: 'firebase',
        link: 'https://firebase.google.com/',
        tag: ['Tool', 'Backend', 'Cloud', 'Database'],
        level: 'Intermediate',
        color: '#ffc400',
    },
    {
        name: 'Android Studio',
        description:
            'The official integrated development environment (IDE) for creating Android applications.',
        logo: 'android',
        link: 'https://developer.android.com/studio',
        tag: ['Tool', 'IDE', 'Mobile', 'Development'],
        level: 'Intermediate',
        color: '#00e676',
    },
    {
        name: 'VS Code',
        description:
            'A lightweight, extensible code editor with powerful features for development.',
        logo: 'vscode',
        link: 'https://code.visualstudio.com/',
        tag: ['Tool', 'IDE', 'Development', 'Open Source'],
        level: 'High',
        color: '#087ebf',
    },
    {
        name: 'GitHub',
        description:
            'A popular platform for version control, collaboration, and hosting open-source projects.',
        logo: 'github',
        link: 'https://github.com/',
        tag: ['Platform', 'Collaboration', 'Version Control', 'Tool'],
        level: 'High',
        color: '#010409',
        textColor: 'white',
    },
]

const techRef = ref(null)
let scrollAnimationId = null
let xPosition = 0

const autoScrollAnimation = () => {
    const dimension = techRef.value.getBoundingClientRect()
    const distance = (techRef.value.scrollWidth - dimension.width - 80) * -1
    const duration = (distance * -1) / (techRef.value.children.length * 5)

    const sequence = [
        [
            techRef.value,
            { x: [dimension.x - 80, distance] },
            {
                delay: 0.5,
                duration: duration,
                easing: 'linear',
            },
        ],
        [
            techRef.value,
            { x: [distance, 0] },
            {
                delay: 0.5,
                duration: duration,
                easing: 'linear',
            },
        ],
    ]

    scrollAnimationId = timeline(sequence, { repeat: Infinity })
}

let cachedElement = null

const isPressing = ref(false)
let dragPoint = 0
const pressLogic = e => {
    const boundingBox = techRef.value.getBoundingClientRect()
    xPosition = boundingBox.x
    if (e.type === 'mousedown') {
        scrollAnimationId.cancel()
        dragPoint = e.clientX
        isPressing.value = true
        techRef.value.addEventListener('mousemove', dragingLogic)
        return
    }
    autoScrollAnimation()
    dragPoint = 0
    isPressing.value = false
    techRef.value.removeEventListener('mousemove', dragingLogic)
}

const dragingLogic = e => {
    const dimension = techRef.value.getBoundingClientRect()
    let distance = e.clientX - dragPoint
    let calculatedTravel = Math.min(
        Math.max(
            distance * 2 + xPosition,
            (techRef.value.scrollWidth - dimension.width - 80) * -1,
        ),
        80,
    )

    animate(techRef.value, { x: calculatedTravel - 80 }, { duration: 0 })
}
const handleOutOfBounds = () => {
    techRef.value.removeEventListener('mousemove', dragingLogic)
}

onMounted(() => {
    cachedElement = techRef.value
    autoScrollAnimation()
    techRef.value.addEventListener('mousedown', pressLogic)
    techRef.value.addEventListener('mouseup', pressLogic)
})

onUnmounted(() => {
    if (cachedElement) {
        cachedElement.addEventListener('mousedown', pressLogic)
        cachedElement.removeEventListener('mouseup', pressLogic)
        cachedElement.removeEventListener('mousemove', dragingLogic)
    }
})

const redirectLink = link => {
    window.open(link, '_blank')
}
</script>

<template>
    <div class="technologies" ref="techRef" @mouseleave="handleOutOfBounds">
        <div class="item" v-for="skill in skills" :key="skill">
            <div class="logo-container">
                <TechLogo :name="skill.logo" />
                <div>{{ skill.name }}</div>
            </div>
            <div class="content">
                <div>{{ skill.description }}</div>
                <div>
                    <div v-for="tag in skill.tag" :key="tag">#{{ tag }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.technologies {
    display: flex;
    justify-content: baseline;
    align-items: stretch;
    cursor: grab;
    user-select: none;
}

.technologies .item {
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 450px;
    flex-shrink: 0;
    width: 100%;
}

.technologies .item .logo-container {
    display: flex;
    gap: 3rem;
    align-items: center;
    width: 100%;
}

.technologies .item .logo-container > :nth-child(2) {
    font-size: 2rem;
    white-space: nowrap;
}

.technologies .item .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.technologies .item .content > div:nth-child(2) {
    display: flex;
    flex-wrap: wrap;
    gap: 0 1rem;
}

.technologies .item .content > div:nth-child(2) > div {
    opacity: 0.5;
}
</style>
