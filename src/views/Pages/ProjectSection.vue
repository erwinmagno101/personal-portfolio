<script setup>
import DynamicHeading from '@/components/DynamicHeading.vue'
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { scroll, animate } from 'motion'

const projectRef = ref(null)

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
    projectRef.value.querySelectorAll('.sub-heading').forEach(item => {
        scroll(animate(item, { width: '500px' }, { easing: 'linear' }), {
            target: item,
            offset: ['start end', 'center center'],
        })
    })
})
</script>

<template>
    <section ref="projectRef">
        <DynamicHeading
            title="PROJECT"
            subtitle="2.0"
            :subSections="subSections"
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
