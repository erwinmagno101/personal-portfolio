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

    if (showProgress.value && containerRef.value)
        animate(
            containerRef.value,
            {
                background: `conic-gradient(var(--font-color) 0% ${progress}%, white ${progress}% 100%)`,
            },
            { duration: 0 },
        )
}

const scrollUp = () => {
    document.querySelector('.canvas').scrollIntoView({
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
        <Transition name="fade">
            <div
                class="container"
                ref="containerRef"
                @click="scrollUp"
                v-if="showProgress"
            >
                <div class="cover">
                    <ArrowUpIcon width="24" height="24" />
                </div>
            </div>
        </Transition>
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
    cursor: pointer;
    background: conic-gradient(
        var(--font-color) 0% var(--progress, 0%),
        white var(--progress, 0%) 100%
    );
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

.fade-enter-active,
.fade-leave-active {
    transition:
        opacity 0.2s ease,
        scale 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    scale: 0.5;
}
</style>
