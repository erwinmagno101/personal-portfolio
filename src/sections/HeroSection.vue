<script setup>
import { animate, inView } from 'motion'
import { onMounted, onUnmounted, ref } from 'vue'

const heroRef = ref(null)
const ballRef = ref(null)

const getMousePosition = e => {
    let xDistanceToMove
    let yDistanceToMove

    const ballrect = ballRef.value.getBoundingClientRect()
    let pointY = ballrect.top + ballrect.height / 2
    let pointX = ballrect.left + ballrect.width / 2

    yDistanceToMove = (e.clientY - pointY) / 10

    if (yDistanceToMove > 30) {
        yDistanceToMove = 30
    } else if (yDistanceToMove < -30) {
        yDistanceToMove = -30
    }

    animate(ballRef.value, { y: yDistanceToMove }, { duration: 0 })
}

onMounted(() => {
    inView(heroRef.value, () => {
        document.addEventListener('mousemove', getMousePosition)

        return () => {
            document.removeEventListener('mousemove', getMousePosition)
        }
    })
})

onUnmounted(() => {
    document.removeEventListener('mousemove', getMousePosition)
})
</script>

<template>
    <section class="hero" ref="heroRef">
        <div>
            <div class="name">
                <div>i am</div>
                <div>Dan Erwin,</div>
            </div>
            FRONT-END
        </div>
        <div>
            WEB DEVEL<span class="ball"
                ><div ref="ballRef"></div>
                <div>O</div></span
            >PER
            <div class="base">
                <div>Based in the Philippines</div>
            </div>
        </div>
        <div class="action-btn">Get in touch</div>
    </section>
</template>

<style scoped>
section {
    height: 900px;
    width: 100%;
    line-height: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

section > div:nth-child(1) {
    font-size: 12rem;
    width: fit-content;
    font-weight: 400;
}
section > div:nth-child(2) {
    font-size: 12rem;
    width: fit-content;
    margin: 0 auto;
    font-weight: 400;
}

.name {
    font-size: 2rem;
    padding-left: 1rem;
}

.name > div:nth-child(1) {
    font-size: 1.2rem;
}

.base {
    font-size: 1.5rem;
    padding-left: 1rem;
    text-align: right;
}

.action-btn {
    border: 1px solid black;
    padding: 1rem;
    font-size: 2rem;
    margin-top: 50px;
}

.ball {
    position: relative;
    width: fit-content;
}

.ball > div:nth-child(2) {
    display: inline-block;
}

.ball > div:first-child {
    content: '';
    width: 50px;
    height: 50px;
    background-color: black;
    position: absolute;
    border-radius: 100%;
    left: 33%;
    top: 38%;
}
</style>
