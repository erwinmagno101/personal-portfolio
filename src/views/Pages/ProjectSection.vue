<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { scroll, animate, inView } from 'motion'
import { useNavigationStore } from '@/stores/navigation'
import SectionComponent from '@/components/SectionComponent.vue'
import SectionHeading from '@/components/SectionHeading.vue'

const projectRef = ref(null)

onMounted(() => {})
</script>

<template>
    <SectionComponent ref="projectRef">
        <SectionHeading
            title="Projects"
            subtitle='"Projects are the culmination of what we are capable of; they define the difference we are able to make"'
        />
        <div class="container">
            <div v-for="i in 4" :key="i" class="project-block-container">
                <div class="project-block">
                    <div class="img"></div>
                    <div class="content">
                        <div class="project-logo">LOGO</div>
                        <div class="project-title">TITLE OF WEBSITE</div>
                        <div class="project-description">
                            description of the website projet here blakjsd
                            sadfkaj asdkfgjhh gd gd ga dghqwsf
                        </div>
                        <div class="project-tag-container">
                            <div class="project-tag" v-for="i in 6" :key="i">
                                {{ i }}javascript
                            </div>
                        </div>
                        <div class="project-btn">Button Here</div>
                    </div>
                </div>
            </div>
        </div>
    </SectionComponent>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    gap: 5rem;
}

.project-block-container {
    width: 100%;
    height: 700px;
}

.project-block {
    height: 100%;
    display: flex;
    position: relative;
    overflow: hidden;
    border-top: 1px solid var(---secondary);
    gap: 5rem;
    padding: 2rem 0;
}

.img {
    flex: 1 1 0;
    border: 1px solid var(---secondary);
    background-color: white;
}

.content {
    flex: 1 1 0;
    border-top: 1px solid var(---secondary);
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.project-logo {
    flex: 1 1 0;
    font-size: 2rem;
    margin-top: 2rem;
}
.project-title {
    font-size: 3rem;
    font-weight: 600;
    line-height: 1;
}
.project-description {
    font-size: 1.2rem;
    font-weight: 300;
    letter-spacing: 1px;
}
.project-tag-container {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
}

.project-tag {
    font-size: 1.2rem;
    padding: 0.2rem 1rem;
    border: 1px solid var(---secondary);
    border-radius: 20px;
}
.project-btn {
    border: 1px solid var(---secondary);
    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;
    padding: 1rem;
}
</style>
