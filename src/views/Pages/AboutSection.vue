<script setup>
import { animate, inView } from '@motionone/dom'
import DynamicHeading from '@/components/DynamicHeading.vue'
import { onMounted } from 'vue'
import { ref } from 'vue'
import FloatingInfo from '@/components/AboutSectionComponents/FloatingInfo.vue'
import DoodleFace from '@/components/DoodleFace.vue'

const handleScrollAnimation = elements => {
    elements.forEach((element, index) => {
        inView(
            element,
            ({ target, isIntersecting }) => {
                if (isIntersecting) {
                    // Enter animation
                    animate(
                        target,
                        {
                            opacity: [0, 1],
                            transform: ['translateY(50px)', 'translateY(0)'],
                        },
                        { delay: index * 0.2, duration: 0.5 },
                    )
                } else {
                    // Exit animation
                    animate(
                        target,
                        {
                            opacity: [1, 0],
                            transform: ['translateY(0)', 'translateY(50px)'],
                        },
                        { duration: 0.5 },
                    )
                }
            },
            { amount: 0.5 }, // Trigger when 50% of the element is visible
        )
    })
}

onMounted(() => {
    const items = document.querySelectorAll('.timeline-item')
    handleScrollAnimation(items)
})

const isHovering = ref(false)

const floatingInfoData = [
    {
        id: 1,
        title: 'Personal Info',
        contents: ['test', 'test'],
        position: 'top-left',
    },
    {
        id: 2,
        title: 'Personal Info',
        contents: ['test', 'test'],
        position: 'top-right',
    },
    {
        id: 3,
        title: 'Personal Info',
        contents: ['test', 'test'],
        position: 'bottom-left',
    },
    {
        id: 4,
        title: 'Personal Info',
        contents: ['test', 'test'],
        position: 'bottom-right',
    },
]
</script>

<template>
    <section class="about-section">
        <DynamicHeading title="ABOUT SECTION" subtitle="1.0" />
        <div class="sub-section">
            <div class="sub-heading">1.1 It's Getting Personal</div>
            <div class="img-container">
                <DoodleFace />
                <FloatingInfo
                    v-for="data in floatingInfoData"
                    :key="data.id"
                    :title="data.title"
                    :contents="data.contents"
                    :position="data.position"
                />
            </div>
        </div>

        <div class="sub-section">
            <div class="sub-heading">1.2 Life story, nothing special</div>
            <div class="exp-container">
                <div class="timeline-text">Timeline</div>
                <div class="line"></div>
                <div class="timeline-content">
                    <div v-for="i in 5" :key="i">
                        <div class="line-content">
                            <div class="circle"></div>
                            <div class="date">Date Here Kunuhay</div>
                        </div>
                        <div class="content"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    gap: 12rem;
}

.about-section > .sub-section:nth-child(2) {
    margin-top: 50rem;
}

.sub-section {
    width: 100%;
}

.sub-heading {
    margin-bottom: 7rem;
}

.img-container {
    width: 400px;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.exp-container {
    display: flex;
}

.timeline-text {
    width: 10%;
}

.line {
    height: 1500px;
    width: 5px;
    border-radius: 5px;
    background-color: red;
}

.timeline-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 1;
}

.timeline-content > div {
    flex: 1 1 0;
    display: flex;
    align-items: center;
}

.line-content {
    width: 20%;
    display: flex;
    align-items: center;
}

.circle {
    width: 10px;
    height: 10px;
    background-color: yellow;
    border-radius: 100%;
    position: relative;
    left: -8px;
}

.date {
    margin: 0 auto;
}

.content {
    flex: 1 1 0;
    height: 100%;
    border: 1px solid white;
}
</style>
