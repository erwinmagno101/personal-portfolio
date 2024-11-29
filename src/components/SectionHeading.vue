<script setup>
import { animate, inView, scroll } from 'motion'
import { ref, onMounted, onUnmounted, watch } from 'vue'

const props = defineProps({
    title: String,
    subtitle: String,
})

const headingRef = ref(null)
</script>

<template>
    <div ref="headingRef" class="heading">
        <div ref="titleRef" class="title">
            {{ title }}
        </div>
        <div class="subheading">
            {{ subtitle }}
        </div>
    </div>
</template>

<style scoped>
.heading {
    background-color: #151515;
    padding-top: 1rem;
    padding-bottom: 1rem;
}

.title {
    text-align: center;
    font-size: 3rem;
}

.subheading {
    text-align: center;
    font-size: 1.3rem;
    max-width: 50%;
    text-align: center;
    margin: 0 auto;
    letter-spacing: 0.1rem;
}
</style>
