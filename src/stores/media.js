import { defineStore } from 'pinia'
import { onMounted, onUnmounted } from 'vue'
import { ref } from 'vue'

export const useMediaStore = defineStore('media', () => {
    const isMobile = ref(null)

    const updateIsMobile = e => {
        isMobile.value = e.matches
    }

    const mediaQuery = window.matchMedia('(hover: none) and (pointer: coarse)')

    onMounted(() => {
        mediaQuery.addEventListener('change', updateIsMobile)
    })

    onUnmounted(() => {
        mediaQuery.removeEventListener('change', updateIsMobile)
    })

    return { isMobile }
})
