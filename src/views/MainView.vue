<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { animate as motionAnim, timeline } from 'motion'
import PageView from './PageView.vue'

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

const isActive = ref(false)

onMounted(() => {
  const navItems = document.querySelectorAll('.nav-item')
  navItems.forEach(item => {
    motionAnim(item, { rotateY: 0, rotateX: 0, rotateZ: 0 }, { duration: 0 })
  })
})

const startHoverAnim = (event, hoverIndex) => {
  if (!isActive.value) {
    const navItems = document.querySelectorAll('.nav-item')
    navItems.forEach((item, index) => {
      item.style.zIndex = null
      event.target.style.zIndex = '10'
      if (hoverIndex !== index) {
        const xDistanceToMove = (index - hoverIndex) * 30

        const sequence = [
          [item, { x: xDistanceToMove }],
          [
            item,
            { rotateY: index > hoverIndex ? 30 : -30, rotateX: 1, rotateZ: 0 },
            { at: 0 },
          ],
        ]

        timeline(sequence, { duration: 0.3 })
      }
    })

    motionAnim(event.target, { scale: 1.2 }, { duration: 0.5 })
  }
}

const endHoverAnim = (event, hoverIndex) => {
  if (!isActive.value) {
    const navItems = document.querySelectorAll('.nav-item')

    navItems.forEach((item, index) => {
      if (hoverIndex !== index) {
        const sequence = [
          [item, { x: 0 }],
          [item, { rotateY: 0, rotateX: 0, rotateZ: 0 }, { at: 0 }],
        ]

        timeline(sequence, { duration: 0.3 })
      }
    })

    motionAnim(event.target, { scale: 1 }, { duration: 0.5 })
    event.target.style.zIndex = null
  }
}

const setActivePanel = event => {
  timeline([[event.currentTarget, { y: '-900px' }, { duration: 0.5 }]])

  isActive.value = true
}

const close = () => {
  isActive.value = false
}
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
        @mouseenter="event => startHoverAnim(event, index)"
        @mouseleave="event => endHoverAnim(event, index)"
        @click="setActivePanel"
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
    <!-- <PageView v-if="isActive" @close="close" /> -->
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
  flex-direction: row-reverse;
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
  z-index: 1;
  padding: 5px;
  border: 1px solid black;
}

.nav-item {
  width: 300px;
  height: 300px;
  transform-style: preserve-3d;
}
</style>
