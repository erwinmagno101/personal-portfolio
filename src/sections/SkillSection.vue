<script setup>
import TechLogo from '@/components/TechLogo.vue'
import { onMounted, ref, watch } from 'vue'
import { animate } from 'motion'
import SectionHeader from '@/components/SectionHeader.vue'

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

const indeces = ref([])

const pointGeneration = () => {
    let counter = 0
    for (let index = 1; index <= 40; index++) {
        if (index > 30) {
            return
        }
        if (index > 10 && index < 20) {
            if (index % 2 === 0) {
                indeces.value.push({
                    point_index: index,
                    skill_index: counter,
                })
                counter += 1
            }
        } else if (index % 2 !== 0) {
            indeces.value.push({
                point_index: index,
                skill_index: counter,
            })
            counter += 1
        }
    }
}

const getSkillIndex = i => {
    const found = indeces.value.find(el => el.point_index === i)
    return found ? found.skill_index : 'N/A'
}

onMounted(() => {})

const enterHoverAnimte = (el, i) => {
    const points = document.querySelectorAll('.point')
    const target = indeces.value.find(el => el.point_index === i)

    points[target.skill_index].style.zIndex = 10

    animate(el, { scale: 1.3 }, { duration: 0.2 })
}

const leaveHoverAnimate = (el, i) => {
    const points = document.querySelectorAll('.point')
    const target = indeces.value.find(el => el.point_index === i)

    points[target.skill_index].style.zIndex = 1
    animate(el, { scale: 1 }, { duration: 0.2 })
}

onMounted(() => {
    pointGeneration()
})
</script>

<template>
    <section class="section">
        <SectionHeader title="Skills" />
        <div class="section-content">
            <h3>Technologies</h3>
            <div class="grid">
                <div v-for="i in 40" :key="i" class="grid-block">
                    <div
                        v-if="indeces?.find(el => el.point_index === i)"
                        class="point"
                    >
                        <div class="tech-block-wrapper">
                            <div
                                class="tech-block"
                                @mouseenter="e => enterHoverAnimte(e.target, i)"
                                @mouseleave="
                                    e => leaveHoverAnimate(e.target, i)
                                "
                            >
                                <div>
                                    <TechLogo
                                        :name="skills[getSkillIndex(i)].logo"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.section {
    min-height: 2000px;
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
    grid-template-columns: repeat(10, minmax(30px, 90px));
    place-content: center;
    width: fit-content;
    margin: 0 auto;
}

.grid-block {
    aspect-ratio: 1;
    position: relative;
}

.point {
    height: 10px;
    width: 10px;
    border-radius: 100%;
    position: absolute;
    z-index: 1;
    bottom: -7px;
    right: -7px;
}

.tech-block-wrapper {
    position: absolute;
    width: 170px;
    aspect-ratio: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    pointer-events: none;
}

.tech-block {
    pointer-events: all;
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    background-color: black;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.tech-block > div {
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    width: 98%;
    height: 98%;
    background-color: var(--primary-color);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>
