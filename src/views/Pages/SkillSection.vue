<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { scroll, animate, inView } from 'motion'
import { useNavigationStore } from '@/stores/navigation'
import SectionComponent from '@/components/SectionComponent.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import SkillsLogo from '@/components/SkillsLogo.vue'

const navigationStore = useNavigationStore()
const skillRef = ref(null)

onMounted(() => {
    inView(skillRef.value, () => {
        navigationStore.setActiveNav(1)
        console.log('visible skill')

        return () => {}
    })
})

const skills = [
    {
        name: 'Flutter',
        description: 'Cross-platform UI toolkit by Google.',
        logo: 'flutter',
        link: 'https://flutter.dev/',
        tag: 'Framework',
        expert: false,
        color: '#0abde3',
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
        name: 'Javascript',
        description: 'Popular language for web development.',
        logo: 'javascript',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        tag: 'Language',
        expert: true,
        color: '#eccc68',
    },
    {
        name: 'Java',
        description: 'Widely used language for cross-platform apps.',
        logo: 'java',
        link: 'https://www.java.com/en/',
        tag: 'Language',
        expert: false,
        color: '#0abde3',
    },
    {
        name: 'Dart',
        description: 'Programming language optimized for UIs.',
        logo: 'dart',
        link: 'https://dart.dev/',
        tag: 'Language',
        expert: false,
        color: '#0abde3',
    },
    {
        name: 'XML',
        description: 'Markup language for structured data.',
        logo: 'xml',
        link: 'https://www.w3.org/XML/',
        tag: 'Language',
        expert: false,
        color: '#0abde3',
    },
    {
        name: 'CSS',
        description: 'Stylesheets for designing web pages.',
        logo: 'css',
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        tag: 'Language',
        expert: true,
        color: '#0abde3',
    },
    {
        name: 'HTML',
        description: 'Markup language for structuring web pages.',
        logo: 'html',
        link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
        tag: 'Language',
        expert: true,
        color: '#0abde3',
    },
    {
        name: 'Mongo DB',
        description: 'NoSQL database for flexible data storage.',
        logo: 'mongodb',
        link: 'https://www.mongodb.com/',
        tag: 'Tool',
        color: '#0abde3',
    },
    {
        name: 'Firebase',
        description: 'Backend-as-a-Service by Google.',
        logo: 'firebase',
        link: 'https://firebase.google.com/',
        tag: 'Tool',
        color: '#0abde3',
    },
    {
        name: 'Android Studio',
        description: 'Official IDE for Android development.',
        logo: '',
        link: 'https://developer.android.com/studio',
        tag: 'Tool',
        color: '#0abde3',
    },
    {
        name: 'VS Code',
        description: 'Lightweight, extensible code editor by Microsoft.',
        logo: 'vscode',
        link: 'https://code.visualstudio.com/',
        tag: 'Tool',
        expert: true,
        color: '#0abde3',
    },
    {
        name: 'Figma',
        description: 'Collaborative design and prototyping tool.',
        logo: 'figma',
        link: 'https://www.figma.com/',
        tag: 'Platform',
        color: '#0abde3',
    },
    {
        name: 'GitHub',
        description: ' Hosting for version control and collaboration.',
        logo: 'github',
        link: 'https://github.com/',
        tag: 'Platform',
        expert: true,
        color: '#0abde3',
    },
]

const items = ref([])

const hoverAnimIn = index => {
    const element = items.value[index]
    const reflect = element.querySelector('.reflect')
    animate(reflect, { rotate: '30deg' }, { duration: 0 })
    animate(reflect, { x: 350, rotate: '30deg' }, { duration: 0.3 })
    animate(element, { backgroundColor: skills[index].color, color: 'black' })
}

const hoverAnimOut = index => {
    const element = items.value[index]
    const reflect = element.querySelector('.reflect')
    animate(reflect, { x: -10, rotate: '30deg' }, { duration: 0.3 })
    animate(element, { backgroundColor: '#151515', color: '#9E9E9E' })
}
</script>

<template>
    <SectionComponent ref="skillRef">
        <SectionHeading title="Skills">
            Tools and Technologies in my Arsenal
        </SectionHeading>
        <div class="container">
            <div
                class="item"
                v-for="(item, index) in skills"
                :key="index"
                :ref="el => (items[index] = el)"
                @mouseenter="hoverAnimIn(index)"
                @mouseleave="hoverAnimOut(index)"
            >
                <div>
                    <div class="logo-container">
                        <img
                            v-if="item.expert"
                            src="@/assets/gifs/fireball.gif"
                            alt="Description of GIF"
                        />
                        <div>
                            <SkillsLogo :name="item.logo" />
                        </div>
                    </div>
                    <div class="tag">{{ item.tag }}</div>
                </div>

                <div class="description">
                    <div>{{ item.name }}</div>
                    <div>{{ item.description }}</div>
                </div>
                <div class="reflect"></div>
            </div>
        </div>
    </SectionComponent>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: stretch;
    flex-wrap: wrap;
    gap: 2rem 3rem;
}

.item {
    border: 1px solid var(---secondary);
    padding: 1rem;
    font-size: 30px;
    text-align: center;
    width: 250px;
    display: flex;
    border-radius: 10px 10px 10px 10px;
    font-size: 1rem;
    gap: 0.5rem;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.reflect {
    position: absolute;
    background-color: white;
    width: 10%;
    height: 200%;
    z-index: 99;
    top: -20%;
    left: -35%;
}

.item > div:first-child {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
}

.logo-container {
    border: 1px solid var(---secondary);
    width: 75px;
    height: 75px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(---primary);
    position: relative;
}

.logo-container > img {
    width: 150%;
    position: absolute;
    filter: grayscale(0%) brightness(120%);
}

.logo-container > div {
    display: flex;
    justify-content: center;
    align-items: center;
    filter: grayscale(100%) brightness(120%);
    transition: filter 0.5s;
}

.item:hover {
    .logo-container > div {
        filter: grayscale(0%);
    }
}

.tag {
    font-size: 0.7rem;
    font-weight: 100;
    border: 1px solid var(---secondary);
    padding: 2px 5px;
    border-radius: 5px;
}

.description {
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
}

.description div:nth-child(2) {
    font-size: 0.7rem;
    font-weight: 400;
    opacity: 0.7;
}
</style>
