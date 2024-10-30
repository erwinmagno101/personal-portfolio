<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const mouseDownPosition = ref(null)
const isMouseDown = ref(false)
const mouseTravel = ref(100)
const lastMousePosition = ref(100)
const targetPosition = ref(100)

const trackMouseDown = e => {
  mouseDownPosition.value = e.clientX
  isMouseDown.value = true
}

const trackMouseDrag = e => {
  if (isMouseDown.value) {
    const distanceDragged = e.clientX - mouseDownPosition.value
    const scaledDistance = (distanceDragged / (window.innerWidth / 2)) * 100
    targetPosition.value = Math.min(
      100,
      Math.max(0, lastMousePosition.value + scaledDistance),
    )
  }
}

const animate = () => {
  // Smoothly approach target position even while dragging
  mouseTravel.value += (targetPosition.value - mouseTravel.value) * 0.07
  requestAnimationFrame(animate)
}

const releaseMouse = () => {
  lastMousePosition.value = mouseTravel.value
  isMouseDown.value = false
}

onMounted(() => {
  document.addEventListener('mousedown', trackMouseDown)
  document.addEventListener('mousemove', trackMouseDrag)
  document.addEventListener('mouseup', releaseMouse)
  animate()
})

onUnmounted(() => {
  document.removeEventListener('mousedown', trackMouseDown)
  document.removeEventListener('mousemove', trackMouseDrag)
  document.removeEventListener('mouseup', releaseMouse)
})

const values = [
  { title: 'Bio', color: 'red' },
  { title: 'Projects', color: 'blue' },
  { title: 'Experience', color: 'green' },
  { title: 'Skills', color: 'yellow' },
  { title: 'Education', color: 'purple' },
  { title: 'Blog', color: 'orange' },
  { title: 'Contact', color: 'violet' },
]
</script>

<template>
  <div class="main-canvas">
    <div
      class="nav"
      :style="{
        transform: `translate(${mouseTravel}%) translateY(-150px)`,
      }"
    >
      <div
        class="nav-item-container"
        v-for="(item, index) in values"
        :key="index"
      >
        <div
          class="nav-item"
          :style="{
            backgroundColor: item.color,
          }"
        >
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-canvas {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.nav {
  display: flex;
  flex-direction: row;
  gap: 10px;
  position: absolute;
  right: 0;
  bottom: 0;
  transform: translateX(100%);
  transition: transform 0.2s ease;
  right: 50%;
}

.nav-item-container {
  perspective: 500px;
  position: relative;
}

.nav-item {
  margin-left: -100px;
  width: 300px;
  height: 300px;
  background-color: red;
  transition: transform 0.3s ease;
  transform: rotateX(1deg) rotateY(-30deg) rotateZ(2deg);
  transform-style: preserve-3d;
}
</style>
