<script setup>
import { ArrowUpIcon } from 'lucide-vue-next'
import { onMounted, onUnmounted, ref } from 'vue'
import { animate, scroll } from 'motion'

const leftRef = ref(null)
const rightRef = ref(null)
const showProgress = ref(false)
let cancel

const scrollProgress = e => {
    const progress = Math.floor(e.progress * 100)
    progress > 20 ? (showProgress.value = true) : (showProgress.value = false)

    if (progress <= 50) {
        animate(leftRef.value, { height: `${0}%` }, { duration: 0 })
        animate(rightRef.value, { height: `${progress * 2}%` }, { duration: 0 })
        console.log(progress * 2)
    }

    if (progress >= 50) {
        animate(rightRef.value, { height: `${100}%` }, { duration: 0 })
        animate(
            leftRef.value,
            { height: `${(progress - 50) * 2}%` },
            { duration: 0 },
        )
    }
}

const scrollUp = () => {
    document.getElementById('header').scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    })
}

onMounted(() => {
    cancel = scroll(e => scrollProgress(e.y), {})
})

onUnmounted(() => {
    cancel()
})
</script>

<template>
    <div>
        <div class="container" v-if="showProgress" @click="scrollUp">
            <div class="cover">
                <ArrowUpIcon width="24" height="24" />
            </div>
            <div class="left-half" ref="leftRef"></div>
            <div class="right-half" ref="rightRef"></div>
        </div>
    </div>
</template>

<style scoped>
.container {
    position: fixed;
    right: 60px;
    bottom: 60px;
    display: flex;
    padding: 0.1rem;
    border-radius: 100%;
    align-items: center;
    justify-content: center;
    padding: 1px;
    overflow: hidden;
    line-height: 1;
}

.cover {
    border-radius: 50%;
    background-color: var(--primary-color);
    position: relative;
    z-index: 99;

    width: 32px;
    height: 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0;
}

.left-half {
    height: 0%;
    background-color: black;
    width: 50%;
    position: absolute;
    left: 0;
    opacity: 0.7;
    bottom: 0;
}
.right-half {
    height: 0%;
    background-color: black;
    width: 50%;
    position: absolute;
    right: 0;
    top: 0;
    opacity: 0.7;
}
</style>
