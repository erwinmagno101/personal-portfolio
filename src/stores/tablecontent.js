import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTableofContentStore = defineStore('tablecontent', () => {
    const tableData = ref(null)

    const setTableData = data => {
        tableData.value = data
    }

    return { tableData, setTableData }
})
