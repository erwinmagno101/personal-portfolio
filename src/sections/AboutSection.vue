<script setup>
import { onMounted, ref } from 'vue'
import TechnologyCarousel from '@/components/widgets/TechnologyCarousel.vue'
import ServicesCp from '@/components/widgets/ServicesCp.vue'
import { animate, inView, stagger } from 'motion'

const aboutSectionRef = ref(null)
const taglineMountAnimation = () => {
    const tagLine = aboutSectionRef.value.querySelector('.tag-line')
    const tagLineArr = [...tagLine.children]

    const linesArr = []

    tagLineArr.forEach(el => {
        if (el.children.length > 0) linesArr.push(el.children[0])
    })

    animate(linesArr, { width: '100%' }, { duration: 3, delay: stagger(1) })
    animate(
        tagLine.children,
        { opacity: [0, 1] },
        { duration: 2, delay: stagger(1) },
    )
}
onMounted(() => {
    inView('.tag-line', taglineMountAnimation)
})
</script>

<template>
    <section ref="aboutSectionRef">
        <div>
            <ServicesCp />
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
            <TechnologyCarousel />
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

.tag-line > * {
    opacity: 0;
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
    background-color: white;
    width: 0%;
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
    height: 200vh;
}

.quote .image > img {
    border-radius: 50%;
}
</style>
