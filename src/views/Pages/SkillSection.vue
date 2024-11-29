<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { scroll, animate, inView } from 'motion'
import { useNavigationStore } from '@/stores/navigation'
import SectionComponent from '@/components/SectionComponent.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import SkillBlock from '@/components/SkillBlock.vue'

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
        name: 'XML',
        description: 'Markup language for structured data.',
        logo: 'xml',
        link: 'https://www.w3.org/XML/',
        tag: 'Language',
        expert: false,
        color: '#3c40c6',
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
        name: 'Figma',
        description: 'Collaborative design and prototyping tool.',
        logo: 'figma',
        link: 'https://www.figma.com/',
        tag: 'Platform',
        color: '#2C2C2C',
        textColor: 'white',
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
</script>

<template>
    <SectionComponent ref="skillRef">
        <SectionHeading
            title="Skills"
            subtitle='"Skills are the tools we craft through learning and practice; they shape not only our success but also the mark we leave on the world."'
        />
        <div>
            <div class="sub-heading">Tools and Technologies in my Arsenal</div>
            <div class="container">
                <SkillBlock
                    v-for="(skill, index) in skills"
                    :key="index"
                    :data="skill"
                />
            </div>
        </div>

        <div>
            <div class="sub-heading">Tools and Technologies in my Arsenal</div>
            <div class="container">
                <SkillBlock
                    v-for="(skill, index) in skills"
                    :key="index"
                    :data="skill"
                />
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

.sub-heading {
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
}
</style>
