<script setup>
import ScrollingBg from '@/components/widgets/ScrollingBg.vue'
import { LocateFixed, ArrowDown, Github, Linkedin, Mail } from 'lucide-vue-next'
import { animate, timeline, stagger } from 'motion'
import { onMounted, ref } from 'vue'

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

const onMountAnimation = () => {
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
    timeline(sequence)
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

    onMountAnimation()
})
</script>

<template>
    <section class="hero" ref="heroRef">
        <ScrollingBg />
        <div class="content">
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
    height: 900px;
    width: 100%;
    line-height: 1;
    user-select: none;
    overflow-x: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.content {
    margin: 0 50px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.content > div:nth-child(1) {
    font-size: 7rem;
    font-weight: 400;
    position: absolute;
    left: 0;
    bottom: 20px;
    letter-spacing: -5px;
    text-wrap: nowrap;
}

.content > div:nth-child(3) {
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
</style>
