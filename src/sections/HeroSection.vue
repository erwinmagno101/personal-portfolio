<script setup>
import ScrollingBg from '@/components/widgets/ScrollingBg.vue'
import { LocateFixed } from 'lucide-vue-next'
import { animate } from 'motion'
import { onMounted, ref } from 'vue'

const heroRef = ref(null)
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
        </div>
        <div class="note">CHECK ME OUT</div>
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
    bottom: 0;
    margin-left: 50px;
}
</style>
