<script setup>
import { onMounted, ref, onUnmounted, computed } from 'vue'

const pastPracticeDate = new Date('2017-06-01T00:00:00')
const pastProfessionalDate = new Date('2023-06-01T00:00:00')
const pastBirthDate = new Date('2000-10-25T00:00:00')

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

const formattedBirth = computed(() => {
    return calculateTimeDifference(pastBirthDate, now.value)
})

let intervalId
onMounted(() => {
    intervalId = setInterval(() => {
        now.value = new Date()
    }, 1000)
})

onUnmounted(() => {
    clearInterval(intervalId)
})
</script>

<template>
    <div class="date">
        <div>
            {{ formattedPractice.years }}
            <div>years</div>
            <div>coding practice</div>
        </div>
        <div>
            {{ formattedProfessional.years }}
            <div>
                {{ formattedProfessional.years > 1 ? 'years' : 'year' }}
            </div>
            <div>professional experience</div>
        </div>
        <div>
            {{ formattedBirth.years }}
            <div>years</div>
            <div>being alive</div>
        </div>
    </div>
</template>

<style scoped>
.date {
    display: flex;
    gap: 5rem;
    width: fit-content;
    margin: 0 auto;
}

.date > div {
    display: flex;
    font-size: 6rem;
    flex-direction: column;
    line-height: 1;
    align-items: center;
    font-weight: 600;
}

.date > div > div {
    font-size: 1rem;
    font-weight: 400;
}
</style>
