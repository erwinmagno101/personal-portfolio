<script setup>
import {
  defineProps,
  defineEmits,
  onMounted,
  onUnmounted,
  onBeforeUnmount,
} from 'vue'
import { animate as motionAnim } from 'motion'

const props = defineProps({
  content: Object,
})

const emit = defineEmits(['close'])

function closePage() {
  const body = document.querySelector('.page-view')
  motionAnim(body, { height: 0 }, { duration: 0.5 }).finished.then(() => {
    emit('close')
  })
}

onMounted(() => {
  const body = document.querySelector('.page-view')
  motionAnim(body, { height: '100vh' }, { duration: 0.5, delay: 0.5 })
})
</script>

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

<style scoped>
.page-view {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 0px;
  background-color: gray;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: auto;
}

.close-button {
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 10px;
}
</style>
