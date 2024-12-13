<script setup>
import { onMounted, ref, watch } from 'vue'
import { animate, inView } from 'motion'

const props = defineProps({
    title: String,
})

const headingRef = ref(null)
const isSticking = defineModel(false)

const checkStickyPosition = () => {
    if (!headingRef.value) return

    const rect = headingRef.value.getBoundingClientRect()

    if (rect.top <= 10) {
        isSticking.value = true
    } else {
        isSticking.value = false
    }
}

watch(
    () => isSticking.value,
    newVal => {
        const heading = headingRef.value.querySelector('#heading')
        if (newVal) {
            animate(
                heading,
                { fontSize: '15rem', opacity: 0.3 },
                { duration: 0.2 },
            )
        } else {
            animate(
                heading,
                { fontSize: '10rem', opacity: 1 },
                { duration: 0.2 },
            )
        }
    },
)

onMounted(() => {
    inView(headingRef.value, () => {
        checkStickyPosition()
        window.addEventListener('scroll', checkStickyPosition)

        return () => {
            window.removeEventListener('scroll', checkStickyPosition)
        }
    })
})
</script>

<template>
    <div class="heading" ref="headingRef">
        <h2 id="heading">{{ title }}</h2>
    </div>
</template>

<style scoped>
.heading {
    position: sticky;
    top: 10px;
    min-height: 15rem;
    margin-bottom: 300px;
}

h2 {
    line-height: 1;
    font-size: 10rem;
}
</style>
