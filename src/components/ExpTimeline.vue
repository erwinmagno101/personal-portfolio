<script setup>
import { animate, inView, scroll, timeline } from 'motion'
import { onMounted, ref, watch } from 'vue'
import { debounce } from 'lodash'

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

const debouncedAnimate = debounce(newVal => {
    pointRefs.value.forEach((element, index) => {
        const enter_sequence = [
            [element, { opacity: 1 }, { duration: 0.1 }],
            [
                element.querySelector('.timeline-block'),
                { opacity: 1 },
                { duration: 0.5, at: 0.2 },
            ],
        ]

        if (newVal > 150 + 260 * (index + 1)) {
            timeline(enter_sequence, { duration: 1 })
        } else {
            animate(element, { opacity: 0 }, { duration: 0.2 })
        }
    })
}, 100)

watch(
    () => calculatedHeight.value,
    newVal => {
        debouncedAnimate(newVal)
    },
)

const expData = [
    {
        title: 'SHS - Information Communication Technology',
        date: 'June 2017 - March 2019',
        content: 'test Desc',
    },
    {
        title: 'Bachelor of Science in Infomation Technology',
        date: 'June 2019 - June 2023',
        content: 'test Desc',
    },
    {
        title: 'Frontend Developer - RondeoCreates',
        date: 'July 2023 - Jan 2024',
        content: 'test Desc',
    },
    {
        title: 'Wordpress Developer - Siquijor State College',
        date: 'Jan 2024 - May 2024',
        content: 'test Desc',
    },
    {
        title: 'Frontend Developer - RondeoCreates',
        date: 'May 2024 - Present',
        content: 'test Desc',
    },
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
                            {{ data.title }}
                            <div>{{ data.date }}</div>
                        </div>
                        <div class="timeline-block-content">
                            {{ data.content }}
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
    opacity: 0;
}

.timeline-block-heading {
    width: 100%;
    border: 1px solid var(---secondary);
    padding: 0.5rem 1rem;
    font-size: 1.1rem;
}

.timeline-block-heading > div {
    font-size: 0.8rem;
    text-align: right;
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
