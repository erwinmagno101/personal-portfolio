import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useSectionProgressStore = defineStore('section_progress', () => {
    const progress = ref(0)
    const displayProgress = ref(false)

    const calculateProgress = (data, condition) => {
        if (!condition) return
        let scrollProgress = data.y.current
        let offset = data.y.offset

        let raw_progress = scrollProgress - offset[0]
        let percentage =
            (raw_progress * 100) / (data.y.offset[1] - data.y.offset[0])

        let normalized = Math.floor(Math.max(0, Math.min(100, percentage)))

        progress.value = normalized
    }

    watch(
        () => progress.value,
        newVal => {
            if (newVal === 0 || newVal === 100) {
                displayProgress.value = false
            } else {
                displayProgress.value = true
            }
        },
    )

    return { calculateProgress, progress, displayProgress }
})
