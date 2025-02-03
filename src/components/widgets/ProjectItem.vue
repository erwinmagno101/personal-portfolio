<script setup>
import { animate, inView, stagger } from 'motion'
import { onMounted, ref } from 'vue'

const props = defineProps({
    data: Object,
    index: Number,
})

const projectRef = ref(null)
let mountFinish = false
const hoverAnimation = e => {
    if (!mountFinish) return
    const bg = e.target.querySelector('.img')
    const content = e.target.querySelector('.content')
    animate(bg, { width: '100%' }, { duration: 0.2, easing: 'ease-out' })
    animate(
        content.children,
        { opacity: 1, y: [50, 0] },
        { duration: 0.2, delay: stagger(0.05) },
    )
}

const exitHoverAnimation = e => {
    if (!mountFinish) return
    const bg = e.target.querySelector('.img')
    const content = e.target.querySelector('.content')
    animate(bg, { width: '0%' }, { duration: 0.2, easing: 'ease-in' })
    animate(content.children, { opacity: 0 }, { duration: 0.2 })
}

const onMountAnimation = () => {
    const imgContainer = projectRef.value.querySelector('.img-container')
    const title = projectRef.value.querySelector('.title')
    animate(imgContainer, { width: '100%', opacity: 1 }, { duration: 0.4 })

    animate(
        title,
        { opacity: 1, y: [50, 0] },
        {
            duration: 0.3,
            delay: 0.3,
        },
    ).finished.then(() => (mountFinish = true))
}

onMounted(() => {
    inView(projectRef.value, onMountAnimation, { margin: '0px 0px -400px 0px' })
})
</script>

<template>
    <div
        class="project"
        ref="projectRef"
        @mouseenter="hoverAnimation"
        @mouseleave="exitHoverAnimation"
    >
        <div class="img-container">
            <div class="title">{{ props.data.name }}</div>
            <div class="background"></div>
            <img class="img" :src="data.img" alt="Project Image" />
        </div>
        <div class="content">
            <div class="vignatte"></div>

            <div>{{ props.data.name }}</div>
            <div>
                {{ props.data.description }}
            </div>
            <div>
                <div v-for="tag in props.data.tags" :key="tag">#{{ tag }}</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.project {
    flex: 1;
    min-width: 500px;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: hidden;
    position: relative;
    align-items: center;
}

.project .img-container {
    width: 0%;
    height: 800px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border: 1px solid rgba(255, 255, 255, 0.3);
    opacity: 0;
}

.project .img-container img {
    width: 0%;
    height: 100%;
    object-fit: cover;
    z-index: 10;
    position: absolute;
}

.img-container .title {
    position: absolute;
    font-size: 2rem;
    text-align: center;
    padding: 0 2rem;
    opacity: 0;
}

.img-container .background {
    width: 100%;
    height: 100%;
    background-color: black;
}

.project .content {
    position: absolute;
    color: white;
    z-index: 10;
    bottom: 0;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.project .content > div:nth-child(2) {
    font-size: 1.5rem;
    opacity: 0;
}

.project .content > div:nth-child(3) {
    opacity: 0;
}
.project .content > div:nth-child(4) {
    opacity: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0 1rem;
}

.vignatte {
    background: rgb(255, 255, 255);
    background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(0, 0, 0, 0.700717787114846) 16%,
        rgba(0, 0, 0, 1) 100%,
        rgba(0, 0, 0, 1) 100%
    );

    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    opacity: 0;
}
</style>
