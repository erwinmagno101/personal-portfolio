<script setup>
import { animate, stagger, timeline } from 'motion'
import { onMounted, ref } from 'vue'

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

const servicesRef = ref(null)

const hoverAnimation = e => {
    if (!mountanimFinished) return
    const title = e.target.querySelector('.title')
    const description = e.target.querySelector('.description')
    const tagline = e.target.querySelector('.tagline')
    const background = e.target.querySelector('.background')

    const sequence = [
        [title, { color: 'black' }, { duration: 0.2, at: 0 }],
        [title, { y: [0, -50] }, { duration: 0.3, at: 0.1 }],
        [
            background,
            { width: '100%' },
            { duration: 0.2, at: 0, easing: 'ease-out' },
        ],
        [description, { opacity: 1, y: [100, 20] }, { duration: 0.2, at: 0.2 }],
        [tagline, { opacity: 1, y: [100, 20] }, { duration: 0.2, at: 0.3 }],
    ]

    timeline(sequence)
}

const leaveAnimation = e => {
    if (!mountanimFinished) return
    const title = e.target.querySelector('.title')
    const description = e.target.querySelector('.description')
    const tagline = e.target.querySelector('.tagline')
    const background = e.target.querySelector('.background')

    const sequence = [
        [title, { color: 'white' }, { duration: 0.1, at: 0 }],
        [title, { y: 0 }, { duration: 0.3, at: 0.1 }],
        [
            background,
            { width: '0%' },
            { duration: 0.2, at: 0, easing: 'ease-out' },
        ],
        [description, { opacity: 0, y: 100 }, { duration: 0.2, at: 0 }],
        [tagline, { opacity: 0, y: 100 }, { duration: 0.2, at: 0 }],
    ]

    timeline(sequence)
}

let mountanimFinished = false

const mountAnimation = () => {
    const items = servicesRef.value.querySelectorAll('.item')
    animate(
        items,
        { opacity: [0, 1], x: [-100, 0] },
        { duration: 0.5, delay: stagger(0.1) },
    ).finished.then(() => (mountanimFinished = true))
}

onMounted(() => {
    mountAnimation()
})
</script>

<template>
    <div class="services" ref="servicesRef">
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
</template>

<style scoped>
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
</style>
