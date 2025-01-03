<script setup>
import TechLogo from '@/components/TechLogo.vue'
import { onMounted, ref, watch } from 'vue'
import { animate } from 'motion'
import FloatingBlock from '@/components/FloatingBlock.vue'

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

const indeces = ref([])
const hoverIndex = ref(null)
const isHovering = ref(false)

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

const enterHoverAnimte = (el, i) => {
    isHovering.value = true
    const points = document.querySelectorAll('.point')
    const target = indeces.value.find(el => el.point_index === i)
    hoverIndex.value = target.point_index

    points[target.skill_index].style.zIndex = 10

    animate(
        el,
        { scale: 1.2, backgroundColor: 'var(--accent-color)' },
        { duration: 0.2 },
    )
}

const leaveHoverAnimate = (el, i) => {
    isHovering.value = false
    const points = document.querySelectorAll('.point')
    const target = indeces.value.find(el => el.point_index === i)
    hoverIndex.value = null

    points[target.skill_index].style.zIndex = 1
    animate(
        el,
        { scale: 1, backgroundColor: 'var(--font-color)' },
        { duration: 0.2 },
    )
}

onMounted(() => {
    pointGeneration()
})

const colorMastery = mastery => {
    switch (mastery) {
        case 'Peak':
            return 'red'
        case 'High':
            return 'orange'
        case 'Intermediate':
            return 'green'
    }
}

const redirect = url => {
    window.open(url, '_blank')
}
</script>

<template>
    <div class="grid">
        <div v-for="i in 40" :key="i" class="grid-block">
            <div v-if="indeces?.find(el => el.point_index === i)" class="point">
                <div class="tech-block-wrapper">
                    <div
                        class="tech-block"
                        @mouseenter="e => enterHoverAnimte(e.target, i)"
                        @mouseleave="e => leaveHoverAnimate(e.target, i)"
                        @click="() => redirect(skills[getSkillIndex(i)].link)"
                    >
                        <div>
                            <TechLogo
                                :name="skills[getSkillIndex(i)].logo"
                                :active="i === hoverIndex"
                                :isHovering="isHovering"
                            />
                        </div>
                    </div>

                    <FloatingBlock v-if="hoverIndex === i">
                        <div class="floating-skill">
                            <div>{{ skills[getSkillIndex(i)].name }}</div>
                            <div>
                                Mastery :
                                <div
                                    :style="{
                                        color: colorMastery(
                                            skills[getSkillIndex(i)].level,
                                        ),
                                    }"
                                >
                                    {{ skills[getSkillIndex(i)].level }}
                                </div>
                            </div>
                            <div>
                                {{ skills[getSkillIndex(i)].description }}
                            </div>
                            <div class="tags-container">
                                <div
                                    v-for="(item, index) in skills[
                                        getSkillIndex(i)
                                    ].tag"
                                    :key="index"
                                >
                                    {{ item }}
                                </div>
                            </div>
                        </div>
                    </FloatingBlock>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
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
    width: 180px;
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
    cursor: pointer;
    pointer-events: all;
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    background-color: var(--font-color);
    transition: background-color 0.5s ease;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
}

.tech-block > div:first-of-type {
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    width: 98%;
    height: 98%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: var(--primary-color);
    transition: background-color 0.5s ease;
}

.floating-skill {
    max-width: 300px;
}

.floating-skill > div:nth-child(1) {
    font-size: 1rem;
}

.floating-skill > div:nth-child(2) {
    font-size: 0.9rem;
    opacity: 0.8;
}

.floating-skill > div:nth-child(2) > div {
    display: inline;
}

.floating-skill > div:nth-child(3) {
    font-size: 0.9rem;
    opacity: 0.8;
    margin-bottom: 1rem;
}

.tags-container {
    display: flex;
    font-size: 0.8rem;
    gap: 0.5rem;
    flex-wrap: wrap;
}

.tags-container > div {
    padding: 0.1rem 0.5rem;
    border: 1px solid var(--accent-color);
    border-radius: 5px;
    transition: border 1s ease;
}
</style>
