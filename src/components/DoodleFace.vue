<script setup>
import { animate } from 'motion'
import { onMounted, onUnmounted, ref } from 'vue'
const mouseX = ref(0)
const mouseY = ref(0)

const eye = ref(null)

const updateMousePosition = e => {
    mouseX.value = e.clientX
    mouseY.value = e.clientY

    const middlePointX = viewportWidth / 2
    const middlePointY = viewportHeight / 2

    let initialX = mouseX.value - middlePointX
    let travelX = initialX / 30

    let initialY = mouseY.value - middlePointY
    let travelY = initialY / 30

    // console.log(travelX)
    animate(eye.value, { x: travelX, y: travelY }, { duration: 0 })
}

const viewportWidth = window.innerWidth
const viewportHeight = window.innerHeight

onMounted(() => {
    eye.value = document.querySelectorAll('.eye')
    document.addEventListener('mousemove', updateMousePosition)
})

onUnmounted(() => {
    document.removeEventListener('mousemove', updateMousePosition)
})
</script>

<template>
    <div class="face">
        <div class="hair"></div>
        <div class="ear ear-left">
            <div class="ear-hole-left"></div>
        </div>
        <div class="ear ear-right">
            <div class="ear-hole-right"></div>
        </div>
        <div class="eyes">
            <div class="left-brow"></div>
            <div class="left-eye eye">
                <div class="eye-ball"></div>
                <div class="eye-bag"></div>
            </div>
            <div class="right-brow"></div>
            <div class="right-eye eye">
                <div class="eye-ball"></div>
                <div class="eye-bag"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.face {
    width: 300px;
    height: 400px;
    position: relative;
    margin: 0 auto;
    border: 1px solid white;
    border-radius: 30% 30% 60% 60%;
    z-index: 1;
}

.hair {
    width: calc(100% + 10%);
    height: 20%;
    border: 1px solid white;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -70%);
}

.ear {
    width: 20%;
    height: 25%;

    position: absolute;
}

.ear-left {
    left: -20%;
    top: 35%;
    transform: rotate(-12deg);
    border: 1px solid white;
    border-right: 0px;
    border-radius: 30% 30% 30% 50%;
    display: flex;
    align-items: center;
    justify-content: right;
}

.ear-hole-left {
    width: 40%;
    height: 50%;
    position: relative;
    border: 1px solid white;
    border-right: 0px;
    border-bottom: 0;
    border-radius: 50%;
    right: 10px;
}

.ear-right {
    right: -20%;
    top: 35%;
    transform: rotate(12deg);
    border-radius: 30% 30% 50% 30%;
    border: 1px solid white;
    border-left: 0px;
    display: flex;
    align-items: center;
    justify-content: left;
}

.ear-hole-right {
    width: 40%;
    height: 50%;
    position: relative;
    border: 1px solid white;
    border-left: 0px;
    border-bottom: 0;
    border-radius: 50%;
    left: 10px;
}

.eyes {
    width: 90%;
    height: 20%;
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.left-brow {
    width: 40%;
    height: 20%;
    position: absolute;
    left: 0;
    top: 0;
    border: 1px solid white;
    border-radius: 100% 10% 10% 10%;
    transform: rotate(5deg);
}

.right-brow {
    width: 40%;
    height: 20%;
    position: absolute;
    right: 0;
    top: 0;
    border: 1px solid white;
    border-radius: 10% 100% 10% 10%;
    transform: rotate(-5deg);
}

.left-eye,
.right-eye {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    position: absolute;
    bottom: 10%;
}

.left-eye {
    left: 17%;
}

.right-eye {
    right: 17%;
}

.eye-ball {
    width: 20px;
    height: 20px;
    border-radius: 100%;
    border: 1px solid white;
}

.eye-bag {
    width: 100%;
    height: 7px;
    border-radius: 30%;
    border: 1px solid white;
}
</style>
