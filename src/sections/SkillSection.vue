<script setup>
import TechLogo from '@/components/TechLogo.vue'
import { at } from 'lodash'
import { animate, timeline } from 'motion'
import { onMounted } from 'vue'
import { SquareArrowOutUpRight } from 'lucide-vue-next'

const services_data = [
    {
        title: 'Web Development',
        tagline: 'Responsive and interactive.',
        description:
            'Building responsive and interactive websites using modern front-end frameworks and technologies.',
    },
    {
        title: 'Web Maintenance',
        tagline: 'Support and updates.',
        description:
            'Providing ongoing support and updates to ensure websites remain functional and up-to-date.',
    },
    {
        title: 'Motion',
        tagline: 'Engaging animations.',
        description:
            'Developing animations and interactive experiences to enhance user engagement.',
    },
    {
        title: 'Responsive Design',
        tagline: 'Optimized for all screens.',
        description:
            'Ensuring websites are optimized for all devices, from desktops to smartphones.',
    },
]

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

const hoverAnimation = e => {
    const title = e.target.querySelector('.title')
    const description = e.target.querySelector('.description')
    const tagline = e.target.querySelector('.tagline')
    const background = e.target.querySelector('.background')

    const sequence = [
        [title, { color: 'black' }, { duration: 0.2, at: 0 }],
        [title, { y: [0, -50] }, { duration: 0.3, at: 0.1 }],
        [background, { width: '100%' }, { duration: 0.2, at: 0 }],
        [description, { opacity: 1, y: [100, 20] }, { duration: 0.2, at: 0.2 }],
        [tagline, { opacity: 1, y: [100, 20] }, { duration: 0.2, at: 0.3 }],
    ]

    timeline(sequence)
}

const leaveAnimation = e => {
    const title = e.target.querySelector('.title')
    const description = e.target.querySelector('.description')
    const tagline = e.target.querySelector('.tagline')
    const background = e.target.querySelector('.background')

    const sequence = [
        [title, { color: 'white' }, { duration: 0.1, at: 0 }],
        [title, { y: 0 }, { duration: 0.3, at: 0.1 }],
        [background, { width: '0%' }, { duration: 0.2, at: 0 }],
        [description, { opacity: 0, y: 100 }, { duration: 0.2, at: 0 }],
        [tagline, { opacity: 0, y: 100 }, { duration: 0.2, at: 0 }],
    ]

    timeline(sequence)
}

const redirectLink = link => {
    window.open(link, '_blank')
}

onMounted(() => {})
</script>

<template>
    <section>
        <div>
            <div class="services">
                <div
                    class="item"
                    v-for="(data, i) in services_data"
                    :key="i"
                    @mouseenter="hoverAnimation"
                    @mouseleave="leaveAnimation"
                >
                    <div class="title">
                        {{ data.title }}
                    </div>
                    <div class="description">{{ data.description }}</div>
                    <div class="tagline">{{ data.tagline }}</div>
                    <div class="background"></div>
                </div>
            </div>
        </div>

        <div>
            <h2>Technologies and Tools</h2>
            <div class="technologies">
                <div class="item" v-for="skill in skills" :key="skill">
                    <div class="logo-container">
                        <TechLogo :name="skill.logo" />
                        <div>{{ skill.name }}</div>
                    </div>
                    <div class="content">
                        <div>{{ skill.description }}</div>
                        <div>
                            <div v-for="tag in skill.tag" :key="tag">
                                #{{ tag }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    gap: 300px;
}

h2 {
    font-size: 1.5rem;
    padding: 1rem 0;
    padding-bottom: 2rem;
}

.services {
    border-top: 1px solid;
    border-bottom: 1px solid white;
    display: flex;
    height: 80vh;
}

.services .item {
    overflow: hidden;
    flex: 1;
    text-align: center;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-right: 1px solid white;
}

.services .item:last-child {
    border-right: 0px;
}

.services .title {
    font-size: 2rem;
    position: relative;
    top: 45%;
    color: white;
    z-index: 2;
}

.services .description {
    color: black;
    height: fit-content;
    position: relative;
    top: 50%;
    font-size: 1.1rem;
    margin: 0 2rem;
    opacity: 0;
    z-index: 2;
}

.services .tagline {
    color: black;
    height: fit-content;
    position: relative;
    margin-top: auto;
    bottom: 10%;
    opacity: 0;
    z-index: 2;
}

.services .background {
    position: absolute;
    width: 0%;
    height: 100%;
    background-color: white;
    z-index: 1;
}

.technologies {
    display: flex;
    gap: 2rem;
    justify-content: baseline;
    align-items: stretch;
}

.technologies .item {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 400px;
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
