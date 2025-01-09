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
        description: 'Cross-platform UI toolkit by Google.',
        logo: 'flutter',
        link: 'https://flutter.dev/',
        tag: ['Framework', 'Mobile', 'UI', 'Tool'],
        level: 'Intermediate',
        color: '#62b7ea',
    },
    {
        name: 'Vue js',
        description: 'Progressive JavaScript framework for UIs.',
        logo: 'vue',
        link: 'https://vuejs.org/',
        tag: ['Framework', 'Frontend', 'JavaScript', 'UI'],
        level: 'High',
        color: '#1dd1a1',
    },
    {
        name: 'React js',
        description: 'JavaScript library for building UIs.',
        logo: 'react',
        link: 'https://react.dev/',
        tag: ['Framework', 'Frontend', 'JavaScript', 'Library'],
        level: 'Intermediate',
        color: '#0abde3',
    },
    {
        name: 'Tailwind CSS',
        description: 'A utility-first CSS framework',
        logo: 'tailwind',
        link: 'https://tailwindcss.com/',
        tag: ['Framework', 'CSS', 'Frontend', 'Design'],
        level: 'High',
        color: '#0284C7',
    },
    {
        name: 'Javascript',
        description: 'Popular language for web development.',
        logo: 'javascript',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        tag: ['Language', 'Frontend', 'Backend', 'Web'],
        level: 'Peak',
        color: '#f2c12d',
    },
    {
        name: 'Java',
        description: 'Widely used language for cross-platform apps.',
        logo: 'java',
        link: 'https://www.java.com/en/',
        tag: ['Language', 'Backend', 'Mobile', 'Enterprise'],
        level: 'Intermediate',
        color: '#eb3536',
    },
    {
        name: 'Dart',
        description: 'Programming language optimized for UIs.',
        logo: 'dart',
        link: 'https://dart.dev/',
        tag: ['Language', 'Frontend', 'Mobile', 'UI'],
        level: 'Intermediate',
        color: '#34e7e4',
    },
    {
        name: 'CSS',
        description: 'Stylesheets for designing web pages.',
        logo: 'css',
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        tag: ['Language', 'Design', 'Frontend', 'Web'],
        level: 'Peak',
        color: '#36adde',
    },
    {
        name: 'HTML',
        description: 'Markup language for structuring web pages.',
        logo: 'html',
        link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
        tag: ['Language', 'Markup', 'Frontend', 'Web'],
        level: 'Peak',
        color: '#f26c35',
    },
    {
        name: 'Mongo DB',
        description: 'NoSQL database for flexible data storage.',
        logo: 'mongodb',
        link: 'https://www.mongodb.com/',
        tag: ['Database', 'NoSQL', 'Backend', 'Tool'],
        level: 'Intermediate',
        color: '#00ed64',
    },
    {
        name: 'Firebase',
        description: 'Backend-as-a-Service by Google.',
        logo: 'firebase',
        link: 'https://firebase.google.com/',
        tag: ['Tool', 'Backend', 'Cloud', 'Database'],
        level: 'Intermediate',
        color: '#ffc400',
    },
    {
        name: 'Android Studio',
        description: 'Official IDE for Android development.',
        logo: 'android',
        link: 'https://developer.android.com/studio',
        tag: ['Tool', 'IDE', 'Mobile', 'Development'],
        level: 'Intermediate',
        color: '#00e676',
    },
    {
        name: 'VS Code',
        description: 'Lightweight, extensible code editor by Microsoft.',
        logo: 'vscode',
        link: 'https://code.visualstudio.com/',
        tag: ['Tool', 'IDE', 'Development', 'Open Source'],
        level: 'High',
        color: '#087ebf',
    },
    {
        name: 'GitHub',
        description: 'Hosting for version control and collaboration.',
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
                    </div>
                    <div class="content">
                        <div>
                            <div>{{ skill.name }}</div>
                            <div>{{ skill.description }}</div>
                        </div>
                        <div @click="() => redirectLink(skill.link)">
                            <SquareArrowOutUpRight />
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
    gap: 1rem;
    flex-wrap: wrap;
    max-width: 1300px;
    margin: 0 auto;
    justify-content: center;
}

.technologies .item {
    border: 1px solid white;
    padding: 1rem;
    display: flex;
    gap: 1rem;
    max-width: 300px;
    align-items: center;
}

.technologies .item .content {
    display: flex;
    flex-direction: column;

    height: 100%;
}

.technologies .item .content > div:first-child {
    font-size: 1.1rem;
}

.technologies .item .content > div:first-child > :nth-child(2) {
    font-size: 0.8rem;
}

.technologies .item .content > div:last-child {
    margin-top: auto;
    margin-left: auto;
    cursor: pointer;
}
</style>
