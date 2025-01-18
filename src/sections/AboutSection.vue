<script setup>
import { onMounted, ref } from 'vue'
import TechnologyCarousel from '@/components/widgets/TechnologyCarousel.vue'
import ServicesCp from '@/components/widgets/ServicesCp.vue'
import { animate, inView, stagger } from 'motion'
import { Quote } from 'lucide-vue-next'

const aboutSectionRef = ref(null)
const taglineMountAnimation = () => {
    const tagLine = aboutSectionRef.value.querySelector('.tag-line')
    const tagLineArr = [...tagLine.children]

    const linesArr = []

    tagLineArr.forEach(el => {
        if (el.children.length > 0) linesArr.push(el.children[0])
    })

    animate(
        linesArr,
        { width: '100%' },
        { duration: 1, delay: stagger(0.7, { start: 1 }) },
    )
    animate(
        tagLine.children,
        { opacity: [0, 1], y: [100, 0] },
        { duration: 0.8, delay: stagger(0.7, { start: 0.5 }) },
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
                        eat, code, sleep, repeat
                        <Quote class="quote-bg" />
                        <Quote class="quote-bg" />
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
    gap: 200px;
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
    align-items: center;
    gap: 1rem;
    width: 100%;
}

.tag-line > div:nth-child(1) {
    justify-content: left;
}
.tag-line > div:nth-child(2) {
    justify-content: right;
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
}

.quote .image > img {
    border-radius: 50%;
}

.quote .content > div:nth-child(1) {
    font-size: 4rem;
    margin-bottom: 5rem;
    position: relative;
}

.quote .content > div:nth-child(2) {
    font-size: 2rem;
    opacity: 0.7;
    text-align: center;
}

.quote .content > div:nth-child(2) > div:last-child {
    font-size: 1rem;
}

.quote-bg:nth-of-type(1) {
    position: absolute;
    left: 0;
    top: 0;
    width: fit-content;
    height: 100%;
    opacity: 0.1;
    transform: rotateY(180deg) translateY(-50%);
}

.quote-bg:nth-of-type(2) {
    position: absolute;
    right: 0;
    top: 0;
    width: fit-content;
    height: 100%;
    opacity: 0.1;
    transform: translateY(50%);
}
</style>
