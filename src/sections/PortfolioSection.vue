w
<script setup>
import SectionHeader from '@/components/SectionHeader.vue'
import TechGrid from '@/components/TechGrid.vue'
import { inView, scroll } from 'motion'
import { onMounted, onUnmounted, ref } from 'vue'
import { useSectionProgressStore } from '@/stores/section_progress'
import CertificateComponent from '@/components/CertificateComponent.vue'
import ProjectComponent from '@/components/ProjectComponent.vue'

const sectionProgressStore = useSectionProgressStore()

const portfolioRef = ref(null)
const isHeaderSticking = ref(false)
let cancelScroll

onMounted(() => {
    inView(portfolioRef.value, () => {
        cancelScroll = scroll(
            e =>
                sectionProgressStore.calculateProgress(
                    e,
                    isHeaderSticking.value,
                ),
            { target: portfolioRef.value },
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
    <section class="section" ref="portfolioRef">
        <SectionHeader title="Portfolio" v-model="isHeaderSticking" />
        <div class="section-content">
            <div>
                <h3 class="sub-heading">Projects</h3>
                <p class="sub-description">The Marks Left Behind</p>
                <ProjectComponent />
            </div>

            <div>
                <h3 class="sub-heading">Certificates</h3>
                <p class="sub-description">The Recognitions</p>
                <CertificateComponent />
            </div>
        </div>
    </section>
</template>

<style scoped>
.section {
    min-height: 2000px;
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
}
.sub-description {
    text-align: center;
    margin-bottom: 50px;
}
</style>
