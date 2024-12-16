<script setup>
import { animate } from 'motion'
import { onMounted, ref, watch } from 'vue'
import { ArrowLeft, ArrowRight } from 'lucide-vue-next'

const expData = [
    {
        title: 'SHS - Information Communication Technology (ICT)',
        date: 'June 2017 - March 2019',
        content:
            'I gained foundational skills in programming, multimedia design, and networking, it opened up my passion for technology through hands-on projects and practical learning in Siquijor State College.',
    },
    {
        title: 'Bachelor of Science in Infomation Technology (BSIT)',
        date: 'June 2019 - June 2023',
        content:
            'Continuing on the same school, I studied software development, networking, and system analysis, gaining technical expertise through hands-on projects and practical applications.',
    },
    {
        title: 'Frontend Developer - RondeoCreates',
        date: 'July 2023 - Jan 2024',
        content:
            'After graduating, I immediately dove into the world of working and creating solutions to real world problems as a frontend developer in a Freelance Company, gaining valuable experience.',
    },
    {
        title: 'Wordpress Developer - Siquijor State College',
        date: 'Jan 2024 - May 2024',
        content:
            'Later that year I was offered a contract and hired as a developer to create a functionality and feature for the wordpress website of my former school.',
    },
    {
        title: 'Frontend Developer - RondeoCreates',
        date: 'May 2024 - Present',
        content:
            'Finishing the contract, I got back into creating websites as a frontend developer and exploring new technologies and possibilities with various clients.',
    },
]

const timelineContainerRef = ref(null)
const componentContainerRef = ref(null)
const position = ref(0)
const activePoint = ref(0)

const pointsPositions = () => {
    let points = timelineContainerRef.value.querySelectorAll('.points')
    points.forEach((element, index) => {
        animate(element, { left: `${50 + index * 20}%` }, { duration: 0 })
    })
}

let isAnimating = false

const slide = dir => {
    if (isAnimating) return
    isAnimating = true

    let points = timelineContainerRef.value.querySelectorAll('.points')

    if (dir === 'right' && position.value < (points.length - 1) * 20) {
        activePoint.value += 1
        position.value += 20
    }

    if (dir === 'left' && position.value > 0) {
        activePoint.value -= 1
        position.value -= 20
    }

    animateSlide()
}

const handlePointClick = index => {
    if (index === activePoint.value) return
    let distance = Math.abs((activePoint.value - index) * 20)

    if (activePoint.value > index) {
        position.value -= distance
    } else {
        position.value += distance
    }

    activePoint.value = index

    animateSlide()
}

const animateSlide = () => {
    let points = timelineContainerRef.value.querySelectorAll('.points')

    points.forEach((element, index) => {
        animate(
            element,
            { left: `${50 + index * 20 - position.value}%` },
            { duration: 0.5 },
        ).finished.then(() => {
            if (index !== points.length - 1) return
            isAnimating = false
        })
    })
}

watch(
    () => activePoint.value,
    () => {
        animateActivePoint()
    },
)

const animateActivePoint = () => {
    let points = timelineContainerRef.value.querySelectorAll('.points')
    points.forEach((element, index) => {
        animate(
            element,

            {
                transform: 'translateX(-50%)',
            },
            { duration: 0 },
        )
        animate(
            element,

            {
                transform: `translateX(-50%) scale(${index === activePoint.value ? 2 : 0.8})`,
            },
            { duration: 0.5 },
        )
    })

    animate(
        componentContainerRef.value.querySelector('.slider-body'),
        { opacity: [0, 1] },
        { duration: 1 },
    )
}

onMounted(() => {
    animateActivePoint()
    pointsPositions()
})
</script>

<template>
    <div class="component-container" ref="componentContainerRef">
        <div class="slider-head">
            <div class="timeline-container" ref="timelineContainerRef">
                <div class="timeline">
                    <div
                        v-for="(data, index) in expData"
                        :key="index"
                        class="points"
                        @click="() => handlePointClick(index)"
                    ></div>
                </div>
            </div>
            <div class="arrow-left" @click="() => slide('left')">
                <ArrowLeft />
            </div>
            <div class="arrow-right" @click="() => slide('right')">
                <ArrowRight />
            </div>
        </div>
        <div class="slider-body">
            <div>{{ expData[activePoint].date }}</div>
            <div>{{ expData[activePoint].title }}</div>
            <div>{{ expData[activePoint].content }}</div>
        </div>
    </div>
</template>

<style scoped>
.component-container {
    width: 80%;
    margin: 0 auto;
    padding: 0 5rem;
}

.slider-head {
    position: relative;
}

.arrow-left,
.arrow-right {
    width: 32px;
    height: 32px;
    padding: 5px;
    border-radius: 50%;
    line-height: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    border: 1px solid black;
    cursor: pointer;
}

.arrow-left {
    left: 0;
    top: 50%;
    transform: translate(-110%, -50%);
}

.arrow-right {
    right: 0;
    top: 50%;
    transform: translate(110%, -50%);
}

.timeline-container {
    padding: 2rem 0;
    position: relative;
    overflow: hidden;
    height: 100px;
    display: flex;
    align-items: center;
}

.timeline {
    flex: 1 1 0;
    background-color: black;
    height: 2px;
    position: relative;
    display: flex;
    align-items: center;
}

.timeline > .points {
    pointer-events: all;
    position: absolute;
    width: 30px;
    height: 30px;
    background-color: black;
    border: 5px solid var(--primary-color);
    border-radius: 50%;
    left: 50%;
    transform: translateX(-50%);
}

.slider-body {
    width: fit-content;
    margin: 0 auto;
    max-width: 50%;
    text-align: center;
}

.slider-body > div:nth-child(1) {
    font-size: 0.9rem;
}

.slider-body > div:nth-child(2) {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 1rem;
}

.slider-body > div:nth-child(3) {
}
</style>
