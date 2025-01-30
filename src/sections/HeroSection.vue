<script setup>
import { LocateFixed, ArrowDown, Github, Linkedin, Mail } from 'lucide-vue-next'
import { animate, timeline, stagger, scroll } from 'motion'
import { onMounted, onUnmounted, ref } from 'vue'

const sw = defineModel({})

const heroRef = ref(null)

let finishedEnterAnim = false

const onEnterAnim = () => {
    const note = heroRef.value.querySelector('.note')

    const sequence = [
        [note, { opacity: [0, 1], y: [-25, 0] }, { duration: 0.2, delay: 0.2 }],
    ]
    timeline(sequence).finished.then(() => (finishedEnterAnim = true))
}

const onExitAnim = event => {
    if (event.deltaY < 0 || !finishedEnterAnim) return

    const note = heroRef.value.querySelector('.note')

    const sequence = [[note, { y: [50], opacity: [1, 0] }, { duration: 0.2 }]]

    timeline(sequence).finished.then(() => (sw.value = true))
    finishedEnterAnim = false
}
const setViewportHeight = () => {
    document.documentElement.style.setProperty(
        '--vh',
        `${window.innerHeight * 0.01}px`,
    )
}

const socialBtnAnim = (e, state) => {
    animate(e.target, { scale: state ? 1.1 : 1 }, { duration: 0.2 })
    animate(
        e.target.children[0],
        { color: state ? 'black' : 'white' },
        { duration: 0.1 },
    )
    animate(
        e.target.children[1],
        { height: state ? '100%' : '0%' },
        { duration: 0.2 },
    )
}

onMounted(() => {
    animate(
        heroRef.value.querySelector('.arrow'),
        { y: [5, -5] },
        {
            duration: 1,
            repeat: Infinity,
            direction: 'alternate',
            type: 'spring',
            stiffness: 50,
            damping: 300,
        },
    )

    onEnterAnim()
    document.addEventListener('wheel', onExitAnim)
    setViewportHeight()
    window.addEventListener('resize', setViewportHeight)
})

onUnmounted(() => {
    document.removeEventListener('wheel', onExitAnim)
    window.removeEventListener('resize', setViewportHeight)
})
</script>

<template>
    <section class="hero" ref="heroRef">
        <div class="job-title">
            <div>FRONT-END</div>
            <div>WEB DEVELOPER</div>
        </div>
        <div>
            <div class="cta-btn">Get in Touch</div>
            <div class="cta-line"></div>
        </div>
        <div class="personal-info">
            <div>DAN ERWIN MAGNO</div>
            <div><LocateFixed /> Based in Philippines</div>
            <div class="socials">
                <div
                    class="social"
                    @mouseenter="e => socialBtnAnim(e, true)"
                    @mouseleave="e => socialBtnAnim(e, false)"
                >
                    <Github></Github>
                    <div></div>
                </div>
                <div
                    class="social"
                    @mouseenter="e => socialBtnAnim(e, true)"
                    @mouseleave="e => socialBtnAnim(e, false)"
                >
                    <Linkedin></Linkedin>
                    <div></div>
                </div>
                <div
                    class="social"
                    @mouseenter="e => socialBtnAnim(e, true)"
                    @mouseleave="e => socialBtnAnim(e, false)"
                >
                    <Mail></Mail>
                    <div></div>
                </div>
            </div>
        </div>
        <div class="note">
            CHECK ME OUT <ArrowDown class="arrow"></ArrowDown>
        </div>
    </section>
</template>

<style scoped>
section {
    height: calc(var(--vh) * 100);
    min-height: 600px;
    width: 100%;
    line-height: 1;
    user-select: none;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 30px;
}

.note {
    margin-top: auto;
    display: flex;
    align-items: center;
    height: fit-content;
}

.arrow {
    margin-left: 1rem;
}

.hero > div:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 7rem 0;
    position: relative;
}
.job-title {
    font-size: 10rem;
}

.cta-btn {
    font-size: 1.5rem;
    border: 1px solid white;
    padding: 1rem 2rem;
    position: relative;
    border-radius: 1.5rem;
    background-color: black;
    z-index: 2;
}

.cta-line {
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: white;
    z-index: 1;
}

.personal-info {
    margin-left: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
}

.personal-info > div:nth-child(1) {
    font-size: 5rem;
}
.personal-info > div:nth-child(2) {
    font-size: 1.5rem;
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 1rem;
}

.socials {
    display: flex;
    gap: 1rem;
    width: fit-content;
}

.social {
    border: 1px solid white;
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: black;
    position: relative;
    overflow: hidden;
    cursor: pointer;
}

.social > :first-child {
    z-index: 2;
}

.social > div:nth-child(2) {
    background-color: white;
    width: 100%;
    height: 0%;
    position: absolute;
    z-index: 1;
}
</style>
