<script setup>
import { animate, inView } from 'motion'
import { onMounted, onUnmounted, ref } from 'vue'
import { LocateFixed } from 'lucide-vue-next'
import PrimaryButton from '@/components/PrimaryButton.vue'

const heroRef = ref(null)
const ballRef = ref([])
let isAnimating = false

const getMousePosition = e => {
    if (isAnimating) return
    isAnimating = true

    ballRef.value.forEach(el => {
        let xDistanceToMove
        let yDistanceToMove

        requestAnimationFrame(() => {
            const ballrect = el.getBoundingClientRect()
            let pointY = ballrect.top + ballrect.height / 2
            let pointX = ballrect.left + ballrect.width / 2

            yDistanceToMove = (e.clientY - pointY) / 10
            xDistanceToMove = (e.clientX - pointX) / 10

            if (yDistanceToMove > 30) {
                yDistanceToMove = 30
            } else if (yDistanceToMove < -30) {
                yDistanceToMove = -30
            }

            if (xDistanceToMove > 30) {
                xDistanceToMove = 30
            } else if (xDistanceToMove < -30) {
                xDistanceToMove = -30
            }

            animate(
                el,
                { y: yDistanceToMove, x: xDistanceToMove },
                { duration: 0.2 },
            )

            isAnimating = false
        })
    })
}

const animateIconLocation = () => {
    let iconLocation = heroRef.value.querySelector('.icon-base')

    animate(
        iconLocation,
        { rotate: 90 },
        {
            duration: 1,
            repeat: Infinity,
            repeatType: 'reverse',
            easing: 'linear',
        },
    )
}

onMounted(() => {
    animateIconLocation()
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
            FR<span class="ball"
                ><div :ref="el => (ballRef[0] = el)"></div>
                <div>O</div></span
            >NT-END
        </div>
        <div>
            WEB DEVEL<span class="ball"
                ><div :ref="el => (ballRef[1] = el)"></div>
                <div>O</div></span
            >PER
            <div class="base">
                <LocateFixed class="icon-base" />
                <div>Based in the Philippines</div>
            </div>
            <PrimaryButton class="action-btn" />
        </div>
    </section>
</template>

<style scoped>
.action-btn {
    margin: 0 auto;
    margin-top: 50px;
}

section {
    height: 900px;
    width: 100%;
    line-height: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;
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
    display: flex;
    width: fit-content;
    margin-left: auto;
    gap: 0.5rem;
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
    background-color: var(--font-color);
    position: absolute;
    border-radius: 100%;
    left: 33%;
    top: 38%;
}
</style>
