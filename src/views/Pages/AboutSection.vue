<script setup>
import { animate, inView } from '@motionone/dom'
import DynamicHeading from '@/components/DynamicHeading.vue'
import { onMounted } from 'vue'
import { ref } from 'vue'
import FloatingInfo from '@/components/AboutSectionComponents/FloatingInfo.vue'

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
</script>

<template>
    <section>
        <DynamicHeading title="ABOUT SECTION" subtitle="1.0" />
        <div class="profile">
            <div class="img-container">
                <img src="/src/assets/images/profile.png" />
                <FloatingInfo />
            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.profile {
    width: 80%;
    margin: 0 auto;
    margin-top: 50rem;
}

.img-container {
    width: 400px;
    height: 500px;
    border: 1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    position: relative;
}
</style>
