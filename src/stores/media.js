import { defineStore } from 'pinia'
import { onMounted, onUnmounted } from 'vue'
import { ref } from 'vue'

export const useMediaStore = defineStore('media', () => {
    const isMobile = ref(null)

    const mediaQuery = window.matchMedia('(hover: none) and (pointer: coarse)')

    const updateIsMobile = e => {
        isMobile.value = e.matches
    }

    onMounted(() => {
        isMobile.value = mediaQuery.matches // ✅ Initialize immediately
        mediaQuery.addEventListener('change', updateIsMobile)
    })

    onUnmounted(() => {
        mediaQuery.removeEventListener('change', updateIsMobile)
    })

    return { isMobile }
})
