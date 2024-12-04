<script setup>
import { animate, timeline } from 'motion'
import { ref } from 'vue'
import SkillsLogo from './SkillsLogo.vue'
import router from '@/router'
import { at } from 'lodash'

const props = defineProps({
    data: Object,
})

const itemRef = ref(null)

const hoverAnimIn = () => {
    const reflect = itemRef.value.querySelector('.reflect')

    const sequence = [
        [reflect, { rotate: '30deg' }, { duration: 0 }],
        [reflect, { x: 350, rotate: '30deg' }, { duration: 0.3 }],
        [
            itemRef.value,
            {
                backgroundColor: props.data.color,
                color: props.data.textColor || 'black',
            },
            { at: 0.1 },
        ],
        [itemRef.value, { scale: 1.02 }, { duration: 0.1, at: 0.2 }],
    ]

    timeline(sequence)
}

const hoverAnimOut = () => {
    const reflect = itemRef.value.querySelector('.reflect')

    const sequence = [
        [reflect, { x: -10, rotate: '30deg' }, { duration: 0.3 }],
        [
            itemRef.value,
            { backgroundColor: '#151515', color: '#9E9E9E' },
            { at: 0.1 },
        ],
        [itemRef.value, { scale: 1 }, { duration: 0.1, at: 0 }],
    ]
    timeline(sequence)
}

const openNewPage = () => {
    window.open(props.data.link, '_blank')
}
</script>

<template>
    <div
        class="item"
        @mouseenter="hoverAnimIn"
        @mouseleave="hoverAnimOut"
        @click="openNewPage"
        ref="itemRef"
    >
        <div>
            <div class="logo-container">
                <img
                    v-if="data.expert"
                    src="@/assets/gifs/fireball.gif"
                    alt="Description of GIF"
                />
                <div>
                    <SkillsLogo :name="data.logo" />
                </div>
            </div>
            <div class="tag">{{ data.tag }}</div>
        </div>

        <div class="description">
            <div>{{ data.name }}</div>
            <div>{{ data.description }}</div>
        </div>
        <div class="reflect"></div>
    </div>
</template>

<style scoped>
.item {
    font-family: 'Overpass', sans-serif;
    border: 1px solid var(---secondary);
    padding: 1rem;
    text-align: center;
    width: 250px;
    display: flex;
    border-radius: 10px 10px 10px 10px;
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
    font-weight: 500;
    border: 1px solid var(---secondary);
    padding: 2px 5px;
    border-radius: 5px;
    background-color: var(---primary);
    color: #9e9e9e;
}

.description {
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
}
.description div:nth-child(1) {
    letter-spacing: 1px;
    font-size: 1rem;
    font-weight: 700;
    opacity: 1;
}

.description div:nth-child(2) {
    font-size: 0.8rem;
    font-weight: 600;
    opacity: 0.7;
    letter-spacing: 1px;
}
</style>
