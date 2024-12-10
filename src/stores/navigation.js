import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

export const useNavigationStore = defineStore('navigation', () => {
    const activeNav = ref(0)

    const setActiveNav = value => {
        activeNav.value = value
    }

    return { activeNav, setActiveNav }
})
