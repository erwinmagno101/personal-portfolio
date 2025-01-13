<script setup>
import { onMounted } from 'vue'
import TechnologyCarousel from '@/components/widgets/TechnologyCarousel.vue'
import ServicesCp from '@/components/widgets/ServicesCp.vue'

onMounted(() => {})
</script>

<template>
    <section>
        <div>
            <ServicesCp />
        </div>

        <div>
            <h2>Technologies and Tools</h2>
            <TechnologyCarousel />
        </div>

        <div class="tag-line">
            <div>
                INTERACTIVE
                <div></div>
            </div>
            <div>
                <div></div>
                RESPONSIVE
            </div>
            <div>VISUAL DYNAMICS</div>
        </div>
        <div>
            <div class="quote">
                <div class="image">
                    <img src="https://placehold.co/300" />
                </div>
                <div class="content">
                    <div>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Amet voluptatum quisquam id. Necessitatibus,
                        magnam ab?
                    </div>
                    <div>
                        <div>Dan Erwin C. Magno</div>
                        <div>Front-end Web Developer</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    gap: 100px;
    overflow-x: hidden;
}

h2 {
    font-size: 1.5rem;
    padding: 1rem 0;
    padding-bottom: 2rem;
}

.tag-line {
    font-size: 10rem;
}

.tag-line > div:nth-child(1),
.tag-line > div:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

.tag-line > div:nth-child(1) > div,
.tag-line > div:nth-child(2) > div {
    height: 10px;
    flex: 1;
    background-color: white;
}

.tag-line > div:last-child {
    margin: 0 auto;
    width: fit-content;
}

.quote {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10rem;
}

.quote .image > img {
    border-radius: 50%;
}
</style>
