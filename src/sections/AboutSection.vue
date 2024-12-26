w
<script setup>
import SectionHeader from '@/components/SectionHeader.vue'
import { inView, scroll } from 'motion'
import { onMounted, onUnmounted, ref } from 'vue'
import { useSectionProgressStore } from '@/stores/section_progress'
import ExperienceDate from '@/components/ExperienceDate.vue'
import TimeLine from '@/components/TimeLine.vue'

const sectionProgressStore = useSectionProgressStore()

const aboutRef = ref(null)
const isHeaderSticking = ref(false)
let cancelScroll

onMounted(() => {
    inView(aboutRef.value, () => {
        cancelScroll = scroll(
            e =>
                sectionProgressStore.calculateProgress(
                    e,
                    isHeaderSticking.value,
                ),
            { target: aboutRef.value },
        )

        return () => {
            cancelScroll()
            cancelScroll = null
        }
    })
})

onUnmounted(() => {
    cancelScroll()
    cancelScroll = null
})
</script>

<template>
    <section class="section" ref="aboutRef">
        <SectionHeader title="About" v-model="isHeaderSticking" />
        <div class="section-content">
            <div>
                <h3 class="sub-heading">Bio</h3>
                <p class="sub-description">Me, Myself, I</p>
            </div>

            <div>
                <h3 class="sub-heading">Experience</h3>
                <p class="sub-description">The Journey</p>
                <ExperienceDate />
                <TimeLine />
            </div>
        </div>
    </section>
</template>

<style scoped>
.section {
    padding: 0 100px;
    display: flex;
    flex-direction: column;
    gap: 100px;
}

.section-content {
    display: flex;
    flex-direction: column;
    gap: 200px;
}

.sub-heading {
    font-size: 2rem;
    text-align: center;
    font-weight: 600;
}
.sub-description {
    text-align: center;
    margin-bottom: 50px;
}
</style>
