<script setup>
import ExperienceDate from '@/components/ExperienceDate.vue'
import SectionHeader from '@/components/SectionHeader.vue'
import TechGrid from '@/components/TechGrid.vue'
</script>

<template>
    <section class="section">
        <SectionHeader title="Skills" />
        <div class="section-content">
            <div>
                <h3 class="sub-heading">Technologies</h3>
                <p class="sub-description">
                    Honed throughout my coding journey
                </p>
                <TechGrid />
            </div>
            <div>
                <h3 class="sub-heading">Experience</h3>
                <p class="sub-description">
                    Honed throughout my coding journey
                </p>
                <ExperienceDate />
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
    padding-bottom: 30px;
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
