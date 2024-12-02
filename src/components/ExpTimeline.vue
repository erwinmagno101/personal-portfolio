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
        <div>
            <div class="timeline">
                <div
                    class="point"
                    v-for="(data, index) in expData"
                    :key="index"
                    :style="{ top: `${250 * (index + 1)}px` }"
                >
                    <div
                        class="timeline-block"
                        :class="[index % 2 === 0 ? 'left' : 'right']"
                    ></div>
                </div>
            </div>
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
    border: 1px solid var(---secondary);
}

svg {
    transform: rotate(90deg);
}

.timeline-container > :first-child {
    width: fit-content;
    padding: 5px;
    position: relative;
    margin: 0 auto;
    height: calc(250px * 6);
}

.timeline {
    width: 5px;
    background-color: white;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 5px;
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
    background-color: white;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}

.timeline-block {
    width: 250px;
    height: 150px;
    border: 1px solid var(---secondary);
    position: absolute;
    top: 0px;
}

.left {
    left: 50px;
}

.right {
    right: 50px;
}
</style>
