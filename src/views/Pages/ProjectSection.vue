<script setup>
import DynamicHeading from '@/components/DynamicHeading.vue'
import { onMounted, onUnmounted, ref } from 'vue'

const projectRef = ref(null)
const subSections = defineModel('subSections')
const isSticking = defineModel('isSticking')

onMounted(() => {
    subSections.value = [
        {
            title: 'gege',
            onclick: () => scrollTo('.sub-heading-1'),
        },
        {
            title: 'gegegeg',
            onclick: () => scrollTo('.sub-heading-2'),
        },
        {
            title: 'gegegegege',
            onclick: () => scrollTo('.sub-heading-3'),
        },
    ]
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
        <div class="sub-heading sub-heading-1">gege</div>
        <div class="sub-heading sub-heading-2">gegege</div>
        <div class="sub-heading sub-heading-3">gegegegege</div>
    </section>
</template>

<style scoped>
section {
    display: flex;
    flex-direction: column;
}
</style>
