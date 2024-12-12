<script setup>
import SectionHeader from '@/components/SectionHeader.vue'
import TechGrid from '@/components/TechGrid.vue'
import { onMounted, ref, onUnmounted, computed } from 'vue'

const pastPracticeDate = new Date('2017-06-01T00:00:00')
const pastProfessionalDate = new Date('2023-06-01T00:00:00')

const now = ref(new Date())

function calculateTimeDifference(past, current) {
    const diffInSeconds = Math.floor((current - past) / 1000)
    const seconds = diffInSeconds % 60
    const minutes = Math.floor(diffInSeconds / 60) % 60
    const hours = Math.floor(diffInSeconds / 3600) % 24
    const days = Math.floor(diffInSeconds / 86400) % 30
    const months = Math.floor(diffInSeconds / 2592000) % 12
    const years = Math.floor(diffInSeconds / 31536000)

    return { years, months, days, hours, minutes, seconds }
}

const formattedPractice = computed(() => {
    return calculateTimeDifference(pastPracticeDate, now.value)
})

const formattedProfessional = computed(() => {
    return calculateTimeDifference(pastProfessionalDate, now.value)
})

let intervalId
onMounted(() => {
    intervalId = setInterval(() => {
        now.value = new Date()
    }, 1000)
})

// Clear interval on unmount
onUnmounted(() => {
    clearInterval(intervalId)
})
</script>

<template>
    <section class="section">
        <SectionHeader title="Skills" />
        <div class="section-content">
            <div>
                <h3 class="sub-heading">Technologies</h3>
                <p class="sub-description">
                    Honed throughout my coding journey
                </p>
                <TechGrid />
            </div>
            <div>
                <h3 class="sub-heading">Experience</h3>
                <p class="sub-description">
                    Honed throughout my coding journey
                </p>
                <div class="experience-container">
                    <div class="date">
                        <div>
                            {{ formattedPractice.years }}
                            <div>years</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.section {
    min-height: 2000px;
    padding: 0 100px;
    display: flex;
    flex-direction: column;
    gap: 100px;
    padding-bottom: 30px;
}

.section-content {
    display: flex;
    flex-direction: column;
    gap: 200px;
}

.sub-heading {
    font-size: 2rem;
    text-align: center;
}
.sub-description {
    text-align: center;
    margin-bottom: 50px;
}

.experience-container {
    display: flex;
    width: fit-content;
    margin: 0 auto;
    gap: 5rem;
    font-size: 4rem;
    font-weight: 700;
}

.date {
    display: flex;
}

.date > div {
    display: flex;
}
</style>
