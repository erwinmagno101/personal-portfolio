<script setup>
import { onMounted, ref, watch, nextTick } from 'vue'
import { animate } from 'motion'
const navItems = [
  { title: 'Home' },
  { title: 'About' },
  { title: 'Project' },
  { title: 'Blog' },
  { title: 'Contact' },
]

const navContents = [
  { heading: 'Home' },
  { heading: 'About' },
  { heading: 'Project' },
  { heading: 'Blog' },
  { heading: 'Contact' },
]

const indecesRange = ref({ start: 0, end: 2 })
const visibleNav = ref(null)
const visibleNavItems = ref([
  { title: 'Home' },
  { title: 'About' },
  { title: 'Project' },
])

watch(indecesRange.value, newVal => {
  const count = 3

  const result = []
  for (let i = 0; i < count; i++) {
    const index = (newVal.start + i) % navItems.length
    result.push(navItems[index])
  }
  visibleNavItems.value = result
})

watch(visibleNavItems, newVal => {
  animateOnscroll()
})

const wheelup = () => {
  if (indecesRange.value.start !== 0) {
    indecesRange.value.start = indecesRange.value.start - 1
  } else {
    indecesRange.value.start = 4
  }

  if (indecesRange.value.end !== 0) {
    indecesRange.value.end = indecesRange.value.end - 1
  } else {
    indecesRange.value.end = 4
  }
}

const wheeldown = () => {
  if (indecesRange.value.start !== 4) {
    indecesRange.value.start = indecesRange.value.start + 1
  } else {
    indecesRange.value.start = 0
  }

  if (indecesRange.value.end !== 4) {
    indecesRange.value.end = indecesRange.value.end + 1
  } else {
    indecesRange.value.end = 0
  }
}

const onWheel = event => {
  if (event.deltaY > 0) {
    wheeldown()
  } else {
    wheelup()
  }
}

const centerNavItem = ref(null)

const animateOnscroll = async () => {
  await nextTick()
  Object.keys(visibleNav.value.children).forEach(key => {
    if (key === '1') {
      centerNavItem.value = visibleNav.value.children[key].children[0]
      animate(centerNavItem.value, { backgroundColor: 'red' }, { duration: 1 })
    } else {
      animate(
        visibleNav.value.children[key].children[0],
        { backgroundColor: 'blue' },
        { duration: 1 },
      )
    }
  })
}

onMounted(() => {
  animateOnscroll()
  addEventListener('wheel', onWheel)
})
</script>

<template>
  <div class="canvas">
    <div class="nav-content">gg</div>
    <div class="nav" ref="visibleNav">
      <div
        class="nav-item-container"
        v-for="(item, index) in visibleNavItems"
        :key="item.title"
      >
        <div class="nav-item">{{ item.title }}</div>
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

.nav {
  width: clamp(200px, 40%, 500px);
  border: 1px solid white;
  height: clamp(300px, 70%, 600px);
  margin: auto 0px;
}

.nav-item-container {
  padding: 10px;
  border: 1px solid green;
}

.nav-item {
  border: 1px solid red;
  height: 50px;
}
</style>
