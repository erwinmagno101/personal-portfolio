<script setup>
import FloatingBlock from './FloatingBlock.vue'
import { ref } from 'vue'
import PrimaryButton from './PrimaryButton.vue'

const hoverIndex = ref(null)
</script>
<template>
    <div class="certificate-container">
        <PrimaryButton v-for="i in 6" :key="i">
            <div class="certificate-block">gg</div>
        </PrimaryButton>
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
    width: 100%;
    height: 250px;
    background-color: var(--primary-color);
    border: 1px solid var(--font-color);
}
</style>
