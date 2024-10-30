<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { animate as motionAnim, timeline } from 'motion'

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

onMounted(() => {
  const navItems = document.querySelectorAll('.nav-item')
  navItems.forEach(item => {
    motionAnim(item, { rotateY: -30, rotateX: 1, rotateZ: 2 }, { duration: 0 })
  })
})

const startHoverAnim = event => {
  const navItem = event.target.querySelector('.nav-item')

  const sequence = [
    [navItem, { y: -100 }, { duration: 0.5 }],
    [navItem, { rotateY: 0, rotateX: 0, rotateZ: 0 }, { at: 0 }],
  ]

  timeline(sequence, { duration: 0.5 })

  event.target.style.zIndex = '2'
}

const endHoverAnim = event => {
  const navItem = event.target.querySelector('.nav-item')

  const sequence = [
    [navItem, { y: 0 }, { duration: 0.5 }],
    [navItem, { rotateY: -30, rotateX: 1, rotateZ: 2 }, { at: 0.2 }],
  ]

  timeline(sequence, { duration: 0.5 })
  event.target.style.zIndex = '1'
}

let currentRotate = -30
let animationTimeout

watch(mouseTravel, newVal => {
  clearTimeout(animationTimeout)
  animationTimeout = setTimeout(() => {
    const rotateDirection = newVal > 50 ? -30 : 30
    if (rotateDirection !== currentRotate) {
      currentRotate = rotateDirection
      const navItems = document.querySelectorAll('.nav-item')

      const itemOrder =
        rotateDirection < 0 ? Array.from(navItems).reverse() : navItems

      itemOrder.forEach((item, index) => {
        const staggerDelay = index * 50

        motionAnim(
          item,
          { rotateY: rotateDirection, rotateX: 1, rotateZ: 2 },
          { duration: 0.5, delay: staggerDelay / 1000 },
        )
      })
    }
  }, 5)
})
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
        @mouseenter="startHoverAnim"
        @mouseleave="endHoverAnim"
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
  flex-direction: row-reverse;
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
  z-index: 1;
}

.nav-item {
  margin-left: -100px;
  width: 300px;
  height: 300px;
  background-color: red;
  transform-style: preserve-3d;
}
</style>
