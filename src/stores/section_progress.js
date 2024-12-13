import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useSectionProgressStore = defineStore('section_progress', () => {
    const progress = ref(null)

    const calculateProgress = (data, condition) => {
        if (!condition) return
        let scrollProgress = data.y.current
        let offset = data.y.targetOffset
        let containerLenght = data.y.targetLength

        let rawProgress = containerLenght - (scrollProgress - offset)
        let percentage = (rawProgress * 100) / containerLenght
        let finalPercentage = Math.max(
            0,
            Math.min(100, Math.floor(100 - percentage)),
        )

        progress.value = finalPercentage
    }

    return { calculateProgress, progress }
})
