<script setup>
import { onMounted, ref, watch, nextTick } from 'vue'
import { animate } from 'motion'

const navItems = ref([
  { title: 'Blog' },
  { title: 'Contact' },
  { title: 'Home' },
  { title: 'About' },
  { title: 'Project' },
])

const navContents = [
  { heading: 'Home' },
  { heading: 'About' },
  { heading: 'Project' },
  { heading: 'Blog' },
  { heading: 'Contact' },
]

const nav = ref(null)

const onWheel = event => {
  if (event.deltaY > 0) {
    wheeldown()
  } else {
    wheelup()
  }
}

const wheelup = () => {
  animateOnscroll()
  let removedNav = navItems.value[4]

  let listItems = document.querySelectorAll('.nav-item-container')
  let navDiv = document.querySelector('.nav')
  let yPosition = navDiv.getBoundingClientRect().top
  animate(navDiv, { y: yPosition - 200 }, { duration: 1 })
  animate(listItems[4], { height: '.1px' }, { duration: 0 }).finished.then(
    () => {
      let nav = navItems.value.slice(0, 4)
      nav.unshift(removedNav)
      navItems.value = nav
      fixHeight(0)
    },
  )
}

const wheeldown = () => {
  animateOnscroll()
  let removedNav = navItems.value[0]

  let listItems = document.querySelectorAll('.nav-item-container')
  animate(
    listItems[0],
    { height: '.1px' }, // Ensuring a non-zero minimum height
    { duration: 1, easing: 'cubic-bezier(0.1, 0.9, 0.2, 1)' },
  ).finished.then(() => {
    let nav = navItems.value.slice(1)
    nav.push(removedNav)
    navItems.value = nav
    fixHeight(4)
  })
}

const fixHeight = async navIndex => {
  await nextTick()
  let listItems = document.querySelectorAll('.nav-item-container')

  listItems.forEach((element, index) => {
    if (navIndex === index) {
      animate(element, { height: '200px' }, { duration: 0 })
    }
  })
}

const animateOnscroll = async () => {
  await nextTick()
  let listItems = document.querySelectorAll('.nav-item')

  listItems.forEach((element, index) => {
    if (index === 3) {
      animate(element, { scale: 1 }, { duration: 1 })
    } else {
      animate(element, { scale: 0.7 }, { duration: 1 })
    }
  })
}

onMounted(() => {
  let listItems = document.querySelectorAll('.nav-item')

  listItems.forEach((element, index) => {
    if (index === 2) {
      animate(element, { scale: 1 }, { duration: 0 })
    } else {
      animate(element, { scale: 0.7 }, { duration: 0 })
    }
  })
  addEventListener('wheel', onWheel)
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
