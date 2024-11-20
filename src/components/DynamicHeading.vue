<script setup>
import { animate, inView, scroll } from 'motion'
import { ref, onMounted, onUnmounted, watch } from 'vue'

const props = defineProps({
    title: String,
    subtitle: String,
})

const headingRef = ref(null)

const isSticking = defineModel('isSticking')

const lettersArray = ref([])

const checkStickyPosition = () => {
    if (!headingRef.value) return

    const rect = headingRef.value.getBoundingClientRect()

    if (rect.top <= 32) {
        isSticking.value = true
    } else {
        isSticking.value = false
    }
}

const getRandomString = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0 123456789'
    let result = ''
    for (let i = 0; i < 1; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length)
        result += characters[randomIndex]
    }
    return result
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
const randomLetterEffect = () => {
    lettersArray.value.forEach(async (element, index) => {
        let random
        do {
            random = getRandomString()
            lettersArray.value[index] = random
            await delay(10 * index)
        } while (random !== props.title.split('')[index])
    })
}

onMounted(() => {
    inView(headingRef.value, () => {
        window.addEventListener('scroll', checkStickyPosition)

        setTimeout(() => {
            randomLetterEffect()
        }, 100)
        return () => {
            window.removeEventListener('scroll', checkStickyPosition)
        }
    })

    props.title.split('').forEach(() => {
        lettersArray.value.push('0')
    })
})
</script>

<template>
    <div ref="headingRef" class="heading">
        <div ref="subtitleRef" class="subtitle">{{ subtitle }}</div>

        <div ref="titleRef" class="title">
            <span v-for="(letter, index) in lettersArray" :key="index">{{
                letter
            }}</span>
        </div>
    </div>
</template>

<style scoped>
.heading {
    position: sticky;
    top: 0px;
    background-color: #151515;
    z-index: 99;
    padding-top: 1rem;
    border-bottom: 1px solid #373a40;
}

.title {
    font-size: 5rem;
}

.title,
.subtitle {
    width: fit-content;
    display: inline-block;
}

.subtitle {
    margin-right: 1rem;
}
</style>
