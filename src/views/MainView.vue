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

const scrollNavigation = direction => {
  distanceToMove.value += direction > 0 ? -200 : 200
  animateOnscroll(direction)

  // const removedNav =
  //   direction > 0 ? navItems.value.shift() : navItems.value.pop()
  // direction > 0
  //   ? navItems.value.push(removedNav)
  //   : navItems.value.unshift(removedNav)
}

const distanceToMove = ref(0)

watch(distanceToMove, newVal => {
  console.log(newVal)
})

const animateOnscroll = async direction => {
  await nextTick()
  const listItems = document.querySelectorAll('.nav-item-container')
  listItems.forEach((element, index) => {
    animate(element, { y: distanceToMove.value }, { duration: 1 })
  })
}

onMounted(() => {
  const listItems = document.querySelectorAll('.nav-item-container')

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
  height: 600px;
}

.nav-item-container {
  display: flex;
  align-items: center;
  height: 200px;
  border: 1px solid green;
}

.nav-item {
  border: 1px solid red;
  width: 100%;
  height: 200px;
}
</style>
