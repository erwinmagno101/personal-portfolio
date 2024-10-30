<script setup>
import { onMounted, ref } from 'vue'

const mouseDownPosition = ref(null)
const isMouseDown = ref(false)
const mouseTravel = ref(100)
const lastMousePostition = ref(100)

const trackMouseDown = e => {
  mouseDownPosition.value = e.clientX
  isMouseDown.value = true
}

const trackMouseDrag = e => {
  if (isMouseDown.value) {
    // Calculate the distance dragged relative to the initial position
    const distanceDragged = e.clientX - mouseDownPosition.value

    // Scale to fit within 0-100 range for 50% of the viewport width
    const scaledDistance = (distanceDragged / (window.innerWidth / 2)) * 100

    // Clamp and update mouseTravel to keep within 0 and 100
    mouseTravel.value = Math.min(
      100,
      Math.max(0, lastMousePostition.value + scaledDistance),
    )

    console.log(mouseTravel.value)
  }
}

onMounted(() => {
  document.addEventListener('mousedown', trackMouseDown)
  document.addEventListener('mousemove', trackMouseDrag)
  document.addEventListener('mouseup', () => {
    lastMousePostition.value = mouseTravel.value
    isMouseDown.value = false
  })
})
</script>

<template>
  <div class="main-canvas">
    <div
      class="nav"
      :style="{
        transform: `translate( ${50 + mouseTravel - 100}%) translateY(-150px)`,
      }"
    >
      <div class="nav-item" v-for="i in 7" :key="i">
        {{ i }}
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
  gap: 0px 10px;
  position: absolute;
  right: 0;
  bottom: 0;
}

.nav-item {
  width: 500px;
  height: 300px;
  background-color: red;
}

.nav-item:hover {
  scale: 1.1;
}
</style>
