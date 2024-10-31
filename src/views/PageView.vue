<!-- PageView.vue -->
<template>
  <div class="page-view">
    <button @click="closePage" class="close-button">Close</button>
    <div class="content">
      <p>Here’s the expanded view for</p>
      <!-- Add more detailed content or layout here -->
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  content: Object,
})

const emit = defineEmits(['close'])

function closePage() {
  emit('close')
}
</script>

<style scoped>
.page-view {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: white;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  overflow: auto;
}

.close-button {
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 10px;
}
</style>
