<script setup>
import { onMounted, ref, watch, nextTick, onUnmounted } from 'vue'
import { animate } from 'motion'

const navItems = ref([
  { title: 'Blog' },
  { title: 'Contact' },
  { title: 'Home' },
  { title: 'About' },
  { title: 'Project' },
])

const nav = ref(null)

const onWheel = event => {
  event.deltaY > 0 ? wheeldown() : wheelup()
}

const wheelup = () => scrollNavigation(-1)
const wheeldown = () => scrollNavigation(1)

const scrollNavigation = async direction => {
  animateOnscroll()

  const removedNav =
    direction > 0 ? navItems.value.shift() : navItems.value.pop()
  direction > 0
    ? navItems.value.push(removedNav)
    : navItems.value.unshift(removedNav)

  await nextTick()
  const listItems = document.querySelectorAll('.nav-item-container')
  animate(
    listItems[direction > 0 ? 0 : listItems.length - 1],
    {
      height: '200px',
    },
    { duration: 0 },
  )
}

const animateOnscroll = async () => {
  await nextTick()
  const listItems = document.querySelectorAll('.nav-item')
  listItems.forEach((element, index) => {
    animate(element, { scale: index === 2 ? 1 : 0.7 }, { duration: 1 })
  })
}

onMounted(() => {
  animateOnscroll()
  addEventListener('wheel', onWheel)
})

onUnmounted(() => {
  removeEventListener('wheel', onWheel)
})
</script>

<template>
  <div class="canvas">
    <div class="nav-content">gg</div>
    <div class="nav-screen">
      <div class="nav" ref="nav">
        <div
          class="nav-item-container"
          v-for="item in navItems"
          :key="item.title"
        >
          <div class="nav-item">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.canvas {
  background-color: black;
  color: white;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  padding: 0px calc(10%);
  overflow: hidden;
}

.nav-content {
  flex: 1 1 0%;
}

.nav-screen {
  width: clamp(200px, 40%, 500px);
  border: 1px solid white;
  height: 600px;
  margin: auto 0px;
  position: relative;
}

.nav {
  width: 100%;
  margin: auto 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  transform: translateY(-33%);
  height: 600px;
  background-color: red;
}

.nav-item-container {
  display: flex;
  align-items: center;
  height: 200px;
}

.nav-item {
  border: 1px solid red;
  width: 100%;
  height: 200px;
}
</style>
