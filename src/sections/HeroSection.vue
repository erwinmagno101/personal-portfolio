<script setup>
import ScrollingBg from '@/components/widgets/ScrollingBg.vue'
import { LocateFixed, MoveDown } from 'lucide-vue-next'
import { animate } from 'motion'
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

onMounted(() => {
    animate(
        heroRef.value.querySelector('.arrow'),
        { y: [10, 0] },
        {
            duration: 1,
            repeat: Infinity,
            direction: 'alternate',
            type: 'spring',
            stiffness: 50,
            damping: 300,
        },
    )
})
</script>

<template>
    <section class="hero" ref="heroRef">
        <ScrollingBg />
        <div class="content">
            <div>
                <div>i am</div>
                <div>Dan Erwin</div>
            </div>
            <hr />
            <div>
                <div>Philippines</div>
                <div>based</div>
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
        <div class="note">CHECK ME OUT <MoveDown class="arrow" /></div>
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
}

.content > div:nth-child(1) {
    font-size: 7rem;
    font-weight: 400;
    transform: translateY(-60%);
    letter-spacing: -5px;
    text-wrap: nowrap;
}

.content > div:nth-child(3) {
    font-size: 7rem;
    font-weight: 400;
    transform: translateY(60%);
    letter-spacing: -5px;
    margin-left: auto;
    text-align: right;
    text-wrap: nowrap;
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
}

.arrow {
    margin-left: 1rem;
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
