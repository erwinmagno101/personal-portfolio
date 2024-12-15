<script setup>
import { ArrowUpIcon } from 'lucide-vue-next'
import { onMounted, onUnmounted, ref } from 'vue'
import { animate, scroll } from 'motion'

const containerRef = ref(null)
const showProgress = ref(false)
let cancel

const scrollProgress = e => {
    const progress = Math.floor(e.progress * 100)
    progress > 20 ? (showProgress.value = true) : (showProgress.value = false)

    animate(
        containerRef.value,
        {
            background: `conic-gradient(black 0% ${progress}%, white ${progress}% 100%)`,
        },
        { duration: 0 },
    )
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
        <div class="container" ref="containerRef" @click="scrollUp">
            <div class="cover">
                <ArrowUpIcon width="24" height="24" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    position: fixed;
    right: 60px;
    bottom: 60px;
    display: flex;
    padding: 1rem;
    border-radius: 100%;
    align-items: center;
    justify-content: center;
    padding: 2px;
    overflow: hidden;
    line-height: 1;
    background: conic-gradient(black 0% 0%, white 0% 100%);
    box-shadow: 2px 3px 13px -3px rgba(0, 0, 0, 0.37);
    -webkit-box-shadow: 2px 3px 13px -3px rgba(0, 0, 0, 0.37);
    -moz-box-shadow: 2px 3px 13px -3px rgba(0, 0, 0, 0.37);
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
</style>
