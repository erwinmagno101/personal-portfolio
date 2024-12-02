<script setup>
import { animate, inView, scroll } from 'motion'
import { onMounted, ref } from 'vue'

const expTimelineRef = ref(null)
const calculatedHeight = ref(0)

onMounted(() => {
    const timeline = expTimelineRef.value.querySelector('.timeline')

    inView(expTimelineRef.value, () => {
        const cancel = scroll(
            progress => {
                calculatedHeight.value =
                    progress.y.current - progress.y.offset[0]

                if (calculatedHeight.value > 0) {
                    animate(
                        timeline,
                        {
                            height: `${calculatedHeight.value >= 300 ? calculatedHeight.value - 300 : 0}px`,
                        },
                        { duration: 0.5 },
                    )
                }
            },
            { target: expTimelineRef.value, offset: ['start end'] },
        )

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
    <div class="timeline-container" ref="expTimelineRef">
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
.timeline-container {
    width: 100%;
    min-height: 100vh;
    position: relative;
}

svg {
    transform: rotate(90deg);
}

.timeline {
    width: 10px;
    height: 0px;
    background-color: red;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
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
