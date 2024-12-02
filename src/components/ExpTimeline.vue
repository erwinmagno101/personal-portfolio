<script setup>
import { animate, inView, scroll } from 'motion'
import { onMounted, ref } from 'vue'

const expTimelineRef = ref(null)
const currentY = ref(0)
onMounted(() => {
    const timeline = expTimelineRef.value.querySelector('.timeline')

    inView(expTimelineRef.value, () => {
        animate(timeline, { background: 'blue' })
        const cancel = scroll(progress => {
            console.log(progress)
            if (currentY.value === 0) currentY.value = progress.y.current
            let calculatedValue =
                progress.y.current - currentY.value > -1
                    ? progress.y.current - currentY.value
                    : 0
            console.log(calculatedValue)

            animate(timeline, {
                height: `${calculatedValue > 100 ? calculatedValue - 100 : calculatedValue}px`,
            })
        })
        return () => {
            cancel()
        }
    })
})
</script>

<template>
    <div class="container" ref="expTimelineRef">
        <div class="timeline">
            <div class="exp-block">213221</div>
            <div class="exp-block">213221</div>
        </div>
        <!-- <svg width="500" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M0 10 Q 25 0, 50 10 T 100 10 T 150 10 T 200 10 T 250 10 T 300 10 T 350 10 T 400 10 T 450 10 T 500 10"
                fill="none"
                stroke="black"
                stroke-width="2"
            />
        </svg> -->
    </div>
</template>

<style scoped>
.container {
    width: 100%;
    min-height: 100vh;
}

svg {
    transform: rotate(90deg);
}

.timeline {
    width: 10px;
    height: 10px;
    background-color: red;
    position: relative;
}

.exp-block {
    position: absolute;
    width: 300px;
    height: 150px;
    border: 1px solid var(---secondary);
    left: 100px;
    top: 300px;
}
</style>
