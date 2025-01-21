<script setup>
import ScrollingBg from '@/components/widgets/ScrollingBg.vue'
import { at } from 'lodash'
import { LocateFixed, ArrowDown, Github, Linkedin, Mail } from 'lucide-vue-next'
import { animate, timeline, stagger, scroll } from 'motion'
import { onMounted, onUnmounted, ref } from 'vue'

const sw = defineModel({})

const heroRef = ref(null)

const actionBtnAnim = (e, state) => {
    animate(e.target, { color: state ? 'black' : 'white' }, { duration: 0.1 })
    animate(
        e.target.children[0],
        { height: state ? '100%' : '0%' },
        { duration: 0.2 },
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

let finishedEnterAnim = false

const onEnterAnim = () => {
    const divider = heroRef.value.querySelector('.divider')
    const name = heroRef.value.querySelector('.name')
    const actionBtn = heroRef.value.querySelector('.action-btn')
    const base = heroRef.value.querySelector('.base')
    const social = heroRef.value.querySelectorAll('.social')
    const note = heroRef.value.querySelector('.note')

    const sequence = [
        [actionBtn, { opacity: 0 }, { duration: 0 }],
        [divider, { width: ['0%', '100%'] }, { duration: 1 }],
        [
            name.children[1],
            { opacity: [0, 1], y: [20, 0] },
            { duration: 0.2, easing: 'ease-out' },
        ],
        [
            name.children[0],
            { opacity: [0, 1], y: [25, 0] },
            { duration: 0.2, easing: 'ease-out', at: 1.1 },
        ],
        [
            base,
            { opacity: [0, 1], y: [-20, 0] },
            { duration: 0.2, easing: 'ease-out', at: 1 },
        ],
        [
            social,
            { opacity: [0, 1], y: [-25, 0] },
            { duration: 0.2, delay: stagger(0.1) },
        ],
        [note, { opacity: [0, 1], y: [-25, 0] }, { duration: 0.2, delay: 0.2 }],
    ]
    timeline(sequence).finished.then(() => (finishedEnterAnim = true))
}

const onExitAnim = event => {
    if (event.deltaY < 0 || !finishedEnterAnim) return

    const divider = heroRef.value.querySelector('.divider')
    const name = heroRef.value.querySelector('.name')
    const actionBtn = heroRef.value.querySelector('.action-btn')
    const base = heroRef.value.querySelector('.base')
    const social = heroRef.value.querySelectorAll('.social')
    const note = heroRef.value.querySelector('.note')
    const bg = heroRef.value.querySelector('.bg')

    const sequence = [
        [note, { y: [50], opacity: [1, 0] }, { duration: 0.2 }],
        [bg, { opacity: [1, 0] }, { duration: 0.5 }],
        [name, { x: [-50], opacity: [1, 0] }, { duration: 0.2, at: 0.5 }],
        [social, { x: [50], opacity: [1, 0] }, { duration: 0.2, at: 0.5 }],
        [base, { x: [50], opacity: [1, 0] }, { duration: 0.2, at: 0.5 }],
        [divider, { width: ['100%', ' 0%'] }, { duration: 0.5, at: 1 }],
        [divider, { opacity: 0 }, { duration: 0.1, at: 1.5 }],
    ]

    timeline(sequence).finished.then(() => (sw.value = true))
    finishedEnterAnim = false
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
})

onUnmounted(() => {
    document.removeEventListener('wheel', onExitAnim)
})
</script>

<template>
    <section class="hero" ref="heroRef">
        <ScrollingBg class="bg" />
        <div class="hero-content">
            <div class="name">
                <div>i am</div>
                <div>Dan Erwin</div>
            </div>
            <hr class="divider" />
            <div>
                <div class="base">based in Philippines</div>
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
            <div
                class="action-btn"
                @mouseenter="e => actionBtnAnim(e, true)"
                @mouseleave="e => actionBtnAnim(e, false)"
            >
                <div></div>
                <div>Get in Touch</div>
            </div>
        </div>
        <div class="note">
            CHECK ME OUT <ArrowDown class="arrow"></ArrowDown>
        </div>
    </section>
</template>

<style scoped>
section {
    height: 100vh;
    min-height: 600px;
    width: 100%;
    line-height: 1;
    user-select: none;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.hero-content {
    margin: 0 50px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.hero-content > div:nth-child(1) {
    font-size: 7rem;
    font-weight: 400;
    position: absolute;
    left: 0;
    bottom: 20px;
    letter-spacing: -5px;
    text-wrap: nowrap;
}

.hero-content > div:nth-child(1) > div:nth-child(1) {
    font-size: 3rem;
}

.hero-content > div:nth-child(3) {
    font-size: 2rem;
    font-weight: 300;
    position: absolute;
    right: 0;
    top: 20px;
    text-wrap: nowrap;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: fit-content;
    gap: 1rem;
}

.socials {
    display: flex;
    gap: 1rem;
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

hr {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    height: 1px;
    background-color: white;
}

.note {
    position: absolute;
    bottom: 50px;
    left: 0;
    margin-left: 50px;
    display: flex;
    align-items: center;
}

.arrow {
    margin-left: 1rem;
}

.location {
    height: 5rem;
    width: 5rem;
}

.action-btn {
    background-color: black;
    border: 1px solid white;
    height: fit-content;
    border-radius: 20px;
    padding: 1rem 1.5rem;
    font-size: 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.action-btn > div:nth-child(1) {
    background-color: white;
    width: 100%;
    height: 0%;
    position: absolute;
    z-index: -1;
}

@media (max-width: 1024px) {
    .hero-content {
        margin: 0 20px;
    }
}

@media (max-width: 640px) {
    .hero-content > div:nth-child(1) {
        font-size: 4rem;
    }

    .hero-content > div:nth-child(1) > div:nth-child(1) {
        font-size: 2rem;
    }

    .hero-content > div:nth-child(3) {
        font-size: 1rem;
    }

    .social {
        height: 30px;
        width: 30px;
    }

    .social > :first-child {
        z-index: 2;
        width: 15px;
    }

    .note {
        bottom: 50px;
        margin-left: 20px;
        font-size: 0.7rem;
    }

    .arrow {
        width: 20px;
    }
}
</style>
