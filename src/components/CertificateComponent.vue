<script setup>
import FloatingBlock from './FloatingBlock.vue'
import { ref } from 'vue'
import ShadowEffect from './ShadowEffect.vue'

const hoverIndex = ref(null)
</script>
<template>
    <div class="certificate-container">
        <div v-for="i in 6" :key="i">
            <ShadowEffect
                @mouseenter="hoverIndex = i"
                @mouseleave="hoverIndex = null"
            >
                <div class="certificate-block">
                    gg

                    <FloatingBlock v-if="i === hoverIndex">
                        <div class="floating-certificate">
                            <div>Certificate {{ i }}</div>
                        </div>
                    </FloatingBlock>
                </div>
            </ShadowEffect>
        </div>
    </div>
</template>

<style scoped>
.certificate-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, calc(100% / 3));
    place-content: center;
    width: 80%;
    margin: 0 auto;
}

.certificate-container > div {
    padding: 1rem;
}

.certificate-block {
    width: 100%;
    aspect-ratio: 1 / 0.7;
    background-color: var(--primary-color);
    border: 1px solid var(--font-color);
}
</style>
