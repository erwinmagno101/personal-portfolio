<script setup>
import { defineProps, defineEmits, onMounted } from 'vue'
import { animate as motionAnim } from 'motion'
import BioPage from './Pages/BioPage.vue'
import BlogPage from './Pages/BlogPage.vue'
import ContactPage from './Pages/ContactPage.vue'
import EducationPage from './Pages/EducationPage.vue'
import ExperiencePage from './Pages/ExperiencePage.vue'
import ProjectsPage from './Pages/ProjectsPage.vue'
import SkillsPage from './Pages/SkillsPage.vue'

const props = defineProps({
  navId: Number,
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

const getCurrentPage = () => {
  switch (props.navId) {
    case 1:
      return BioPage
    case 2:
      return ProjectsPage
    case 3:
      return ExperiencePage
    case 4:
      return SkillsPage
    case 5:
      return ProjectsPage
    case 6:
      return ProjectsPage
    case 7:
      return ProjectsPage
  }
}
</script>

<!-- PageView.vue -->
<template>
  <div class="page-view">
    <button @click="closePage" class="close-button">Close</button>
    <component :is="getCurrentPage()"></component>
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
  overflow-y: scroll;
}

.close-button {
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 10px;
}

.block {
  height: 500px;
  background-color: red;
}
</style>
