<script setup>
import { animate } from 'motion'
import { onMounted, ref, watch } from 'vue'
import { ArrowLeft, ArrowRight } from 'lucide-vue-next'

const timelineContainerRef = ref(null)
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
            { scale: index === activePoint.value ? 1.5 : 0.8 },
            { duration: 0.5 },
        )
    })
}

onMounted(() => {
    animateActivePoint()
    pointsPositions()
})
</script>

<template>
    <div class="component-container">
        <div class="slider-head">
            <div class="timeline-container" ref="timelineContainerRef">
                <div class="timeline">
                    <div v-for="i in 5" :key="i" class="points"></div>
                </div>
            </div>
            <div class="arrow-left" @click="() => slide('left')">
                <ArrowLeft />
            </div>
            <div class="arrow-right" @click="() => slide('right')">
                <ArrowRight />
            </div>
        </div>
        <div class="slider-body"></div>
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
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: blue;
    border-radius: 50%;
    left: 50%;
    transform: translate(-50%);
}
</style>
