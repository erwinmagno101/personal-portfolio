<script setup>
import FloatingBlock from './FloatingBlock.vue'
import { ref } from 'vue'
import ShadowEffect from './ShadowEffect.vue'
import placeholderImage from '../assets/images/placeholder.jpg'

const hoverIndex = ref(null)
</script>
<template>
    <div class="certificate-container">
        <div v-for="i in 3" :key="i">
            <ShadowEffect
                @mouseenter="hoverIndex = i"
                @mouseleave="hoverIndex = null"
            >
                <div class="certificate-block">
                    <img :src="placeholderImage" />
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
    border: 2px solid var(--font-color);
    border-radius: 10px;
    overflow: hidden;
}

.certificate-block > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
}
</style>
