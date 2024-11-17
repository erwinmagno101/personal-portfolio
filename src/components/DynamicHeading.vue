<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'

const props = defineProps({
    title: String,
    subtitle: String,
})

const headingRef = ref(null)

const isSticking = ref(false)
const isVisible = ref(false)

const checkStickyPosition = () => {
    if (!headingRef.value) return

    const rect = headingRef.value.getBoundingClientRect()

    if (rect.top <= 32 && isVisible.value) {
        console.log(`${props.title} stuck`)
        isSticking.value = true
    } else {
        console.log(`${props.title} not stuck`)
        isSticking.value = false
    }
}

watch(
    () => isVisible.value,
    newVal => {
        if (newVal) {
            window.addEventListener('scroll', checkStickyPosition)
            return
        }
        window.removeEventListener('scroll', checkStickyPosition)
    },
)

onMounted(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (!entry.isIntersecting) {
                console.log(`${props.title} no longer visible`)
                isSticking.value = false
                isVisible.value = false
            } else {
                console.log(`${props.title} visible`)
                isVisible.value = true
            }
        },
        {
            root: null, // Use the viewport as the root
            threshold: 0, // Trigger as soon as even 1px is visible or not visible
        },
    )

    if (headingRef.value) {
        observer.observe(headingRef.value)
    }

    onUnmounted(() => {
        if (headingRef.value) {
            observer.unobserve(headingRef.value)
        }
    })
})
</script>

<template>
    <div ref="headingRef" class="heading">
        <div>{{ subtitle }}</div>
        <div class="title">
            <div>{{ title }}</div>
        </div>
    </div>
</template>

<style scoped>
.heading {
    position: sticky;
    top: 2rem;
}

.title {
    font-size: 5rem;
}
</style>
