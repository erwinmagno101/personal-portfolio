<script setup>
import { animate, stagger } from 'motion'

const props = defineProps({
    data: Object,
})

const hoverAnimation = e => {
    const bg = e.target.querySelector('.img')
    const content = e.target.querySelector('.content')
    animate(bg, { width: '100%' }, { duration: 0.2, easing: 'ease-out' })
    animate(
        content.children,
        { opacity: 1, y: [50, 0] },
        { duration: 0.2, delay: stagger(0.1) },
    )
}

const exitHoverAnimation = e => {
    const bg = e.target.querySelector('.img')
    const content = e.target.querySelector('.content')
    animate(bg, { width: '0%' }, { duration: 0.2, easing: 'ease-in' })
    animate(content.children, { opacity: 0 }, { duration: 0.2 })
}
</script>

<template>
    <div
        class="project"
        @mouseenter="hoverAnimation"
        @mouseleave="exitHoverAnimation"
    >
        <div class="img-container">
            <div class="title">{{ props.data.name }}</div>
            <div class="background"></div>
            <img
                class="img"
                src="https://placehold.co/400x500"
                alt="Project Image"
            />
        </div>
        <div class="content">
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
}

.project .img-container {
    width: 100%;
    height: 800px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border: 1px solid rgba(255, 255, 255, 0.3);
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
}

.img-container .background {
    width: 100%;
    height: 100%;
    background-color: black;
}

.project .hero-content {
    position: absolute;
    color: black;
    z-index: 10;
    bottom: 0;
    padding: 1.5rem;
}

.project .content > div:nth-child(1) {
    font-size: 1.5rem;
    opacity: 0;
}

.project .content > div:nth-child(2) {
    opacity: 0;
}
.project .content > div:nth-child(3) {
    opacity: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0 1rem;
}
</style>
