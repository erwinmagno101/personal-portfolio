<script setup>
import { animate, inView, scroll } from 'motion'
import { ref, onMounted, onUnmounted, watch } from 'vue'

const props = defineProps({
    title: String,
    subtitle: String,
})

const headingRef = ref(null)

const isSticking = defineModel('isSticking')
const isVisible = ref(false)

const subtitleRef = ref(null)
const titleRef = ref(null)

const checkStickyPosition = () => {
    if (!headingRef.value) return

    const rect = headingRef.value.getBoundingClientRect()

    if (rect.top <= 32 && isVisible.value) {
        isSticking.value = true
    } else {
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
                isSticking.value = false
                isVisible.value = false
            } else {
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
        <div ref="subtitleRef" class="subtitle">{{ subtitle }}</div>

        <div ref="titleRef" class="title">
            <div>{{ title }}</div>
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
