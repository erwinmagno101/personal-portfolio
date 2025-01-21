<script setup>
import { onMounted, ref } from 'vue'
import TechnologyCarousel from '@/components/widgets/TechnologyCarousel.vue'
import ServicesCp from '@/components/widgets/ServicesCp.vue'
import { animate, inView, stagger, timeline } from 'motion'
import { Quote } from 'lucide-vue-next'

const aboutSectionRef = ref(null)
const quoteRef = ref(null)
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

const contentMountAnimation = () => {
    const image = quoteRef.value.querySelector('.image')
    const content = quoteRef.value.querySelector('.content')

    const quote = content.children[0]
    const title = content.children[1]
    animate(quote.children[0], { opacity: 1, y: [50, 0] }, { duration: 0.5 })
    animate(
        [quote.children[1], quote.children[2]],
        { opacity: 0.1 },
        { duration: 1 },
    )
    animate(title.children, { opacity: 0.7 }, { duration: 0.5, delay: 0.4 })

    animate(image.children[0], { opacity: 1 }, { delay: 0.4, duration: 0.5 })
    const frameSequence = [
        [image.children[1], { opacity: 1 }, { duration: 0.2 }],
        [image.children[1], { width: '101%' }, { duration: 0.3, at: 0.1 }],
    ]

    timeline(frameSequence)
}
onMounted(() => {
    inView('.tag-line', taglineMountAnimation)
    inView('.quote', contentMountAnimation, { margin: '0px 0px -300px 0px' })
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
            <div class="quote" ref="quoteRef">
                <div class="image">
                    <img src="/src/assets/images/profile.png" />
                    <div class="frame"></div>
                </div>
                <div class="content">
                    <div>
                        <div>eat, code, sleep, repeat</div>
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
    padding-bottom: 1px;
}

.quote .image {
    height: 400px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: visible;
}

.quote .image > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    position: relative;
    z-index: 2;
    opacity: 0;
}

.quote .image > .frame {
    width: 0%;
    height: 70%;
    position: absolute;
    border: 1px solid white;
    bottom: -1px;
    opacity: 0;
}

.quote .content > div:nth-child(1) {
    font-size: 4rem;
    margin-bottom: 5rem;
    position: relative;
}

.quote .content > div:nth-child(1) > * {
    opacity: 0;
}

.quote .content > div:nth-child(2) {
    font-size: 2rem;
    text-align: center;
}

.quote .content > div:nth-child(2) > * {
    opacity: 0;
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
