<script setup>
import DynamicHeading from '@/components/DynamicHeading.vue'
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { scroll, animate } from 'motion'
import { useTableofContentStore } from '@/stores/tablecontent'

const projectRef = ref(null)
const isSticking = ref(false)
const table = useTableofContentStore()

watch(
    () => isSticking.value,
    newVal => {
        if (newVal) table.setTableData(subSections)
        else table.setTableData(null)
    },
)

const subSections = [
    {
        title: 'gege',
        tag: '.project-sub-heading-1',
    },
    {
        title: 'gegegeg',
        tag: '.project-sub-heading-2',
    },
    {
        title: 'gegegegege',
        tag: '.project-sub-heading-3',
    },
]

onMounted(() => {
    document.querySelectorAll('.sub-heading').forEach(item => {
        scroll(animate(item, { width: '500px' }, { easing: 'linear' }), {
            target: item,
            offset: ['start end', 'center center'],
        })
    })
})

const scrollTo = elementClass => {
    document.querySelector(elementClass).scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
    })
}
</script>

<template>
    <section ref="projectRef">
        <DynamicHeading
            title="PROJECT SECTION"
            subtitle="2.0"
            v-model:isSticking="isSticking"
        />
        <div class="sub-heading project-sub-heading-1">gege</div>
        <div class="sub-heading project-sub-heading-2">gegege</div>
        <div class="sub-heading project-sub-heading-3">gegegegege</div>
    </section>
</template>

<style scoped>
section {
    display: flex;
    flex-direction: column;
}

.sub-heading {
    opacity: 1;
    width: 0px;
    height: 250px;
    background-color: red;
    margin: 1rem 0;
}
</style>
