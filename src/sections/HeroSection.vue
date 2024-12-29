<script setup>
import ScrollingBg from '@/components/widgets/ScrollingBg.vue'
import { LocateFixed } from 'lucide-vue-next'
import { animate } from 'motion'
import { onMounted, ref } from 'vue'

const heroRef = ref(null)
</script>

<template>
    <section class="hero" ref="heroRef">
        <ScrollingBg />
        <div>
            <hr />
            <div class="circle"></div>
        </div>
    </section>
</template>

<style scoped>
section {
    height: 900px;
    width: 100%;
    line-height: 1;
    user-select: none;
    overflow-x: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

hr {
}

.circle {
    border: 1px dashed white;
    width: 128px;
    height: 128px;
    border-radius: 50%;
}
</style>
