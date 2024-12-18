<script setup>
import FloatingBlock from './FloatingBlock.vue'
import { ref } from 'vue'

const hoverIndex = ref(null)
</script>
<template>
    <div class="certificate-container">
        <div
            class="certificate-block"
            v-for="i in 6"
            :key="i"
            @mouseenter="hoverIndex = i"
            @mouseleave="hoverIndex = null"
        >
            Certificate Placeholder
            <FloatingBlock v-if="i === hoverIndex">
                <div class="floating-certificate">
                    <div>Certificate {{ i }}</div>
                </div>
            </FloatingBlock>
        </div>
    </div>
</template>

<style scoped>
.certificate-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, 400px);
    gap: 1rem;
    place-content: center;
    width: 90%;
    margin: 0 auto;
}

.certificate-block {
    width: 100%;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--font-color);
    background-color: var(--primary-color);
}
</style>
