<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { animate as motionAnim, timeline } from 'motion'
import PageView from './PageView.vue'

const mouseDownPosition = ref(null)
const isMouseDown = ref(false)
const mouseTravel = ref(100)
const lastMousePosition = ref(100)
const targetPosition = ref(100)

const activeNavIndex = ref(null)
const activeNavId = ref(null)

const trackMouseDown = e => {
  if (!isActive.value) {
    mouseDownPosition.value = e.clientX
    isMouseDown.value = true
  }
}

const trackMouseDrag = e => {
  if (!isActive.value) {
    if (isMouseDown.value) {
      const distanceDragged = e.clientX - mouseDownPosition.value
      const scaledDistance = (distanceDragged / (window.innerWidth / 2)) * 100
      targetPosition.value = Math.min(
        100,
        Math.max(0, lastMousePosition.value + scaledDistance),
      )
    }
  }
}

const animate = () => {
  // Smoothly approach target position even while dragging
  mouseTravel.value += (targetPosition.value - mouseTravel.value) * 0.07
  requestAnimationFrame(animate)
}

const releaseMouse = () => {
  if (!isActive.value) {
    lastMousePosition.value = mouseTravel.value
    isMouseDown.value = false
  }
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

const navObject = ref([
  { id: 7, title: 'Contact', color: 'violet' },
  { id: 6, title: 'Blog', color: 'orange' },
  { id: 5, title: 'Education', color: 'purple' },
  { id: 4, title: 'Skills', color: 'yellow' },
  { id: 3, title: 'Experience', color: 'green' },
  { id: 2, title: 'Projects', color: 'blue' },
  { id: 1, title: 'Bio', color: 'red' },
])

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
            {
              rotateY: index > hoverIndex ? 30 : -30,
              rotateX: 1,
              rotateZ: 0,
              scale: 0.9,
            },
            { at: 0 },
          ],
        ]

        timeline(sequence, { duration: 0.3 })
      }
    })

    motionAnim(event.target, { scale: 1.1 }, { duration: 0.5 })
  }
}

const endHoverAnim = (event, hoverIndex) => {
  const navItems = document.querySelectorAll('.nav-item')

  if (!isActive.value) {
    navItems.forEach((item, index) => {
      if (hoverIndex !== index) {
        const sequence = [
          [item, { x: 0 }],
          [item, { rotateY: 0, rotateX: 0, rotateZ: 0, scale: 1 }, { at: 0 }],
        ]

        timeline(sequence, { duration: 0.3 })
      }
    })

    motionAnim(event.target, { scale: 1 }, { duration: 0.5 })
    event.target.style.zIndex = null
  }
}

const setActivePanel = (event, clickedIndex) => {
  if (!isActive.value) {
    const navItems = document.querySelectorAll('.nav-item')
    navItems.forEach((item, index) => {
      if (index != clickedIndex) {
        const xDistanceToMove = (index - clickedIndex) * 30 * 7

        const sequence = [
          [item, { x: xDistanceToMove }, { duration: 0.3 }],
          [
            item,
            {
              rotateY: index > clickedIndex ? 30 : -30,
              rotateX: 1,
              rotateZ: 0,
              scale: 0.9,
            },
            { at: 0, duration: 0.3 },
          ],
          [
            item,
            {
              y: '-900px',
            },
            { at: 0.3 },
          ],
        ]

        timeline(sequence, { duration: 0.6 })
      }
    })

    timeline([
      [event.currentTarget, { y: '-900px' }, { duration: 0.5, delay: 0.3 }],
    ])
    activeNavIndex.value = clickedIndex
    isActive.value = true
  }
}

const close = () => {
  const navContainers = document.querySelectorAll('.nav-item-container')
  navContainers.forEach((item, index) => {
    if (index === activeNavIndex.value) {
      timeline([
        [item, { y: '0px' }, { duration: 0.5 }],
        [item, { scale: 1 }, { duration: 0.2 }, { at: 0.3 }],
      ]).finished.then(() => {
        isActive.value = false
        activeNavIndex.value = null
        activeNavId.value = null
      })
    }
  })

  const navItems = document.querySelectorAll('.nav-item')
  navItems.forEach(item => {
    const sequence = [
      [item, { x: 0 }, { at: 0.3 }],
      [
        item,
        {
          rotateY: 0,
          rotateX: 0,
          rotateZ: 0,
          scale: 0.9,
        },
        { at: 0.3 },
      ],
      [
        item,
        {
          y: '0px',
        },
        { at: 0.1, duration: 0.3 },
      ],
    ]

    timeline(sequence, { duration: 0.6 })
  })
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
        v-for="(item, index) in navObject"
        :key="item.id"
        @mouseenter="event => startHoverAnim(event, index)"
        @mouseleave="event => endHoverAnim(event, index)"
        @click="
          e => {
            activeNavId = item.id
            setActivePanel(e, index)
          }
        "
      >
        <div class="nav-item">
          {{ item.title }}
        </div>
      </div>
    </div>
    <PageView v-if="isActive" :navId="activeNavId" @close="close" />
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
  align-items: stretch;
  position: absolute;
  right: 50%;
  bottom: 0;
  transform: translateX(100%);
  transition: transform 0.2s ease;
}

.nav-item-container {
  perspective: 500px;
  position: relative;
  z-index: 1;
  padding: 5px;
  display: flex;
  align-items: stretch;
}

.nav-item {
  width: 200px;
  transform-style: preserve-3d;
  writing-mode: vertical-lr;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-family: 'Gugi', sans-serif;
  font-family: 'Rubik Mono One', monospace;
  font-weight: 400;
  font-style: normal;
  font-size: 4rem;
  padding: 1rem 0px;
  border: 1px solid black;
  background-color: white;
}
</style>
