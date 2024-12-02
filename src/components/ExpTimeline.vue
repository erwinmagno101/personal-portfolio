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

const expData = [
    { title: 'Sh', content: 'test Desc' },
    { title: 'College', content: 'test Desc' },
    { title: 'Freelance', content: 'test Desc' },
    { title: 'SSC', content: 'test Desc' },
    { title: 'Freelance', content: 'test Desc' },
]
</script>

<template>
    <div class="container" ref="expTimelineRef">
        <div class="timeline">
            <div
                class="point"
                v-for="(data, index) in expData"
                :key="index"
                :style="{ top: `${300 * (index + 1)}px` }"
            ></div>
        </div>
        <!-- <div class="exp-block" v-for="(data, index) in expData" :key="index">
            {{ data.title }}
        </div> -->
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
    position: absolute;
}

.exp-block {
    position: absolute;
    width: 300px;
    height: 150px;
    border: 1px solid var(---secondary);
    left: 100px;
}

.point {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background-color: green;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}
</style>
