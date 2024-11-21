<script setup>
import { animate, inView, scroll } from 'motion'
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useTableofContentStore } from '@/stores/tablecontent'

const table = useTableofContentStore()

const props = defineProps({
    title: String,
    subtitle: String,
    subSections: Array,
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

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
const randomLetterEffect = async () => {
    for (const [index, element] of lettersArray.value.entries()) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0'
        let random
        let indexCount = 0

        do {
            random = characters.split('')[indexCount]
            indexCount++
            lettersArray.value[index] = random
            await delay(20)
        } while (random !== props.title.split('')[index])
    }
}

const resetLettersArray = () => {
    lettersArray.value = []
    props.title.split('').forEach(() => {
        lettersArray.value.push('*')
    })
}

watch(
    () => isSticking.value,
    newVal => {
        if (newVal) {
            table.setTableData(props.subSections)
            animate(
                headingRef.value.querySelector('.divider-line'),
                { width: ['0%', '100%'] },
                { easing: 'linear', duration: 1 },
            )
        } else {
            table.setTableData(null)
            animate(
                headingRef.value.querySelector('.divider-line'),
                { width: ['100%', '0%'] },
                { easing: 'linear', duration: 1 },
            )
        }
    },
)

onMounted(() => {
    resetLettersArray()

    inView(headingRef.value, () => {
        window.addEventListener('scroll', checkStickyPosition)
        if (isSticking.value) {
            table.setTableData(props.subSections)
        }

        setTimeout(() => {
            randomLetterEffect()
        }, 100)
        return () => {
            resetLettersArray()
            window.removeEventListener('scroll', checkStickyPosition)
        }
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
        <div class="divider-line"></div>
    </div>
</template>

<style scoped>
.heading {
    position: sticky;
    top: 0px;
    background-color: #151515;
    z-index: 99;
    padding-top: 1rem;
    padding-bottom: 1rem;
}

.divider-line {
    content: '';
    width: 100%;
    height: 1px;
    background-color: #373a40;
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
