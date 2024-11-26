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
    },
    {
        name: 'Vue js',
        description: 'Progressive JavaScript framework for UIs.',
        logo: 'vue',
        link: 'https://vuejs.org/',
        tag: 'Framework',
    },
    {
        name: 'React js',
        description: 'JavaScript library for building UIs.',
        logo: 'react',
        link: 'https://react.dev/',
        tag: 'Framework',
    },
    {
        name: 'Javascript',
        description: 'Popular language for web development.',
        logo: 'javascript',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        tag: 'Language',
    },
    {
        name: 'Java',
        description: 'Widely used language for cross-platform apps.',
        logo: 'java',
        link: 'https://www.java.com/en/',
        tag: 'Language',
    },
    {
        name: 'Dart',
        description: 'Programming language optimized for UIs.',
        logo: 'dart',
        link: 'https://dart.dev/',
        tag: 'Language',
    },
    {
        name: 'XML',
        description: 'Markup language for structured data.',
        logo: 'xml',
        link: 'https://www.w3.org/XML/',
        tag: 'Language',
    },
    {
        name: 'CSS',
        description: 'Stylesheets for designing web pages.',
        logo: 'css',
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        tag: 'Language',
    },
    {
        name: 'HTML',
        description: 'Markup language for structuring web pages.',
        logo: 'html',
        link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
        tag: 'Language',
    },
    {
        name: 'Mongo DB',
        description: 'NoSQL database for flexible data storage.',
        logo: 'mongodb',
        link: 'https://www.mongodb.com/',
        tag: 'Tool',
    },
    {
        name: 'Firebase',
        description: 'Backend-as-a-Service by Google.',
        logo: 'firebase',
        link: 'https://firebase.google.com/',
        tag: 'Tool',
    },
    {
        name: 'Android Studio',
        description: 'Official IDE for Android development.',
        logo: '',
        link: 'https://developer.android.com/studio',
        tag: 'Tool',
    },
    {
        name: 'VS Code',
        description: 'Lightweight, extensible code editor by Microsoft.',
        logo: 'vscode',
        link: 'https://code.visualstudio.com/',
        tag: 'Tool',
    },
    {
        name: 'Figma',
        description: 'Collaborative design and prototyping tool.',
        logo: 'figma',
        link: 'https://www.figma.com/',
        tag: 'Platform',
    },
    {
        name: 'GitHub',
        description: ' Hosting for version control and collaboration.',
        logo: 'github',
        link: 'https://github.com/',
        tag: 'Platform',
    },
]
</script>

<template>
    <SectionComponent ref="skillRef">
        <SectionHeading title="Skills">
            Tools and Technologies in my Arsenal
        </SectionHeading>
        <div class="container">
            <div class="item" v-for="(item, index) in skills" :key="index">
                <div>
                    <div class="logo">
                        <SkillsLogo :name="item.logo" />
                    </div>
                    <div class="tag">{{ item.tag }}</div>
                </div>
                <div class="description">
                    <div>{{ item.name }}</div>
                    <div>{{ item.description }}</div>
                </div>
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
    gap: 1rem;
}

.item {
    border: 1px solid var(---secondary);
    padding: 1rem;
    font-size: 30px;
    text-align: center;
    width: 250px;
    display: flex;
    border-radius: 100% 10px 10px 10px;
    font-size: 1rem;
    gap: 0.5rem;
}

.item > div:first-child {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.logo {
    border: 1px solid var(---secondary);
    width: 75px;
    height: 75px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(---primary);
    filter: grayscale(100%) brightness(120%);
}

.item:hover {
    .logo {
        filter: grayscale(0%);
    }
}

.tag {
    font-size: 0.7rem;
    font-weight: 100;
}

.description {
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
}

.description div:nth-child(2) {
    font-size: 0.7rem;
    font-weight: 100;
}
</style>
