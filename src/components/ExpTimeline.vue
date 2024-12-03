<script setup>
import { animate, inView, scroll } from 'motion'
import { onMounted, ref, watch } from 'vue'

const expTimelineRef = ref(null)
const calculatedHeight = ref(0)
const pointRefs = ref([])

onMounted(() => {
    // animate(
    //     expTimelineRef.value.querySelector('.pin'),
    //     { scale: [1, 1.2, 1] },
    //     { repeat: Infinity, duration: 1 },
    // )

    const timeline = expTimelineRef.value.querySelector('.timeline')

    inView(expTimelineRef.value, () => {
        const cancel = scroll(
            progress => {
                calculatedHeight.value =
                    progress.y.current - progress.y.offset[0]

                if (
                    calculatedHeight.value > 0 &&
                    calculatedHeight.value < 250 * 7
                ) {
                    animate(
                        timeline,
                        {
                            height: `${calculatedHeight.value >= 150 ? calculatedHeight.value - 150 : 0}px`,
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

watch(
    () => calculatedHeight.value,
    newVal => {
        pointRefs.value.forEach((element, index) => {
            if (newVal > 150 + 260 * (index + 1)) {
                animate(element, { opacity: 1 }, { duration: 0.1, delay: 0.1 })
            } else {
                animate(element, { opacity: 0 }, { duration: 0.2, delay: 0.1 })
            }
        })
    },
)

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
                    :ref="el => (pointRefs[index] = el)"
                >
                    <div class="pin"></div>
                    <div class="dot"></div>
                    <div
                        class="timeline-block"
                        :class="[index % 2 === 0 ? 'left' : 'right']"
                    >
                        <div class="timeline-block-heading">
                            Title Block {{ index + 1 }}
                            <div>Jan 2019 - October 2021</div>
                        </div>
                        <div class="timeline-block-content">
                            Content Block {{ index + 1 }} blah blah blah blah
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
    border-radius: 100%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    padding: 1rem;
    background-color: var(---primary);
}

.pin {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    border: 1px solid white;
    padding: 0.3rem;
}

.dot {
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background-color: white;
    padding: 0.3rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.timeline-block {
    width: 350px;
    height: 200px;
    position: absolute;
    top: 0px;
    padding: 0.5rem;
}

.timeline-block-heading {
    width: 100%;
    border: 1px solid var(---secondary);
    padding: 0.5rem 1rem;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
}

.timeline-block-heading > div {
    font-size: 0.8rem;
    display: inline-block;
    margin-left: auto;
}

.timeline-block-content {
    font-size: 1rem;
    padding: 1rem;
}

.left {
    left: 150px;
}

.right {
    right: 150px;
}
</style>
