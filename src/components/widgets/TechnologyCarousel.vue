<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import TechLogo from '../TechLogo.vue'
import { animate, inView, scroll, timeline } from 'motion'
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

let scrollPosition = 0

function preventScroll() {
    scrollPosition = window.scrollY
    document.body.style.overflow = 'hidden'
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollPosition}px`
    document.body.style.width = '100%'
}

function allowScroll() {
    document.body.style.overflow = ''
    document.body.style.position = ''
    document.body.style.top = ''
    window.scrollTo(0, scrollPosition) // Restore the previous scroll position
}

let scrollDistance = 0

const handleScrollingAnimation = info => {
    const dimension = techRef.value.getBoundingClientRect()
    if (info.y.current > info.y.offset[1]) {
        preventScroll()
        window.addEventListener('wheel', e => {
            const normalizedDelta = e.deltaY * (e.deltaMode === 1 ? 16 : 1)
            if (
                scrollDistance >= 0 &&
                scrollDistance <=
                    techRef.value.scrollWidth - dimension.width - 80
            )
                scrollDistance += normalizedDelta
            scrollDistance = Math.min(
                Math.max(scrollDistance, 0),
                techRef.value.scrollWidth - dimension.width - 80,
            )

            animate(techRef.value, { x: -scrollDistance }, { duration: 0 })
        })
    }
}

onMounted(() => {
    scroll(handleScrollingAnimation, { target: techRef.value })
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
