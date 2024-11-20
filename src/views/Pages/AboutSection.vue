<script setup>
import { animate, inView } from '@motionone/dom'
import DynamicHeading from '@/components/DynamicHeading.vue'
import { onMounted, onUnmounted, watch } from 'vue'
import { ref } from 'vue'
import FloatingInfo from '@/components/AboutSectionComponents/FloatingInfo.vue'
import DoodleFace from '@/components/DoodleFace.vue'

const aboutRef = ref(null)
const subSections = defineModel('subSections')
const isSticking = defineModel('isSticking')

onMounted(() => {
    subSections.value = [
        {
            title: "1.1 It's Getting Personal",
            onclick: () => scrollTo('.sub-heading-1'),
        },
        {
            title: '1.2 Life story, nothing special',
            onclick: () => scrollTo('.sub-heading-2'),
        },
        {
            title: '1.3 Skills aqcuired along the way',
            onclick: () => scrollTo('.sub-heading-3'),
        },
    ]
})

const scrollTo = elementClass => {
    document.querySelector(elementClass).scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
    })
}

const floatingInfoData = [
    {
        id: 1,
        title: 'Personal Info',
        contents: ['test', 'test'],
        position: 'top-left',
    },
    {
        id: 2,
        title: 'Personal Info',
        contents: ['test', 'test'],
        position: 'top-right',
    },
    {
        id: 3,
        title: 'Personal Info',
        contents: ['test', 'test'],
        position: 'bottom-left',
    },
    {
        id: 4,
        title: 'Personal Info',
        contents: ['test', 'test'],
        position: 'bottom-right',
    },
]

const skillBlocks = ref(null)

const skillHoverEnter = (index, row) => {
    skillBlocks.value.forEach((element, i) => {
        if (index === i) {
            animate(element, { scale: 1.2 }, { duration: 0.2 })
        }
    })
}

const skillHoverExit = (index, row) => {
    skillBlocks.value.forEach((element, i) => {
        if (index === i) {
            animate(element, { scale: 1 }, { duration: 0.2 })
        }
    })
}

onMounted(() => {
    skillBlocks.value = document.querySelectorAll('.skill-block')
})
</script>

<template>
    <section class="about-section" ref="aboutRef">
        <DynamicHeading
            title="ABOUT SECTION"
            subtitle="1.0"
            v-model:isSticking="isSticking"
        />
        <div class="sub-section">
            <div class="sub-heading sub-heading-1">
                1.1 It's Getting Personal
            </div>
            <div class="img-container">
                <DoodleFace />
                <FloatingInfo
                    v-for="data in floatingInfoData"
                    :key="data.id"
                    :title="data.title"
                    :contents="data.contents"
                    :position="data.position"
                />
            </div>
        </div>

        <div class="sub-section">
            <div class="sub-heading sub-heading-2">
                1.2 Life story, nothing special
            </div>
            <div class="exp-container">
                <div class="timeline-text">Timeline</div>
                <div class="line"></div>
                <div class="timeline-content">
                    <div v-for="i in 5" :key="i">
                        <div class="line-content">
                            <div class="circle"></div>
                            <div class="date">Date Here Kunuhay</div>
                        </div>
                        <div class="content"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="sub-section">
            <div class="sub-heading sub-heading-3">
                1.3 Skills aqcuired along the way
            </div>
            <div class="skills-container">
                <div class="flex">
                    <div
                        v-for="(i, index) in 4"
                        :key="i"
                        class="skill-block"
                        @mouseenter="e => skillHoverEnter(index, 1)"
                        @mouseleave="e => skillHoverExit(index, 1)"
                    >
                        {{ i }}
                    </div>
                </div>
                <div class="flex">
                    <div
                        v-for="(i, index) in 5"
                        :key="i"
                        class="skill-block"
                        @mouseenter="e => skillHoverEnter(index + 4, 2)"
                        @mouseleave="e => skillHoverExit(index + 4, 2)"
                    >
                        {{ i }}
                    </div>
                </div>
                <div class="flex">
                    <div
                        v-for="(i, index) in 4"
                        :key="i"
                        class="skill-block"
                        @mouseenter="e => skillHoverEnter(index + 9, 3)"
                        @mouseleave="e => skillHoverExit(index + 9, 3)"
                    >
                        {{ i }}
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.flex {
    display: flex;
    margin: 0 auto;
    width: fit-content;
    gap: 1rem;
}
section {
    display: flex;
    flex-direction: column;
    gap: 12rem;
}

.about-section > .sub-section:nth-child(2) {
    margin-top: 50rem;
}

.sub-section {
    width: 100%;
}

.sub-heading {
    margin-bottom: 7rem;
}

.img-container {
    width: 400px;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.exp-container {
    display: flex;
}

.timeline-text {
    width: 10%;
}

.line {
    height: 1500px;
    width: 5px;
    border-radius: 5px;
    background-color: red;
}

.timeline-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 1;
}

.timeline-content > div {
    flex: 1 1 0;
    display: flex;
    align-items: center;
}

.line-content {
    width: 20%;
    display: flex;
    align-items: center;
}

.circle {
    width: 10px;
    height: 10px;
    background-color: yellow;
    border-radius: 100%;
    position: relative;
    left: -8px;
}

.date {
    margin: 0 auto;
}

.content {
    flex: 1 1 0;
    height: 100%;
    border: 1px solid white;
}

.skills-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.skill-block {
    border: 1px solid white;
    width: 150px;
    height: 150px;
}
</style>
