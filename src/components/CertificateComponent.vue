<script setup>
import FloatingBlock from './FloatingBlock.vue'
import { ref } from 'vue'
import ShadowEffect from './ShadowEffect.vue'

const hoverIndex = ref(null)
</script>
<template>
    <div class="certificate-container">
        <ShadowEffect
            v-for="i in 6"
            :key="i"
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
</template>

<style scoped>
.certificate-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, 400px);
    gap: 3rem;
    place-content: center;
    width: 90%;
    margin: 0 auto;
}

.certificate-block {
    width: 400px;
    height: 250px;
    background-color: var(--primary-color);
    border: 1px solid var(--font-color);
}
</style>
