<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Mousewheel } from 'swiper/modules'

import 'swiper/css'

const onSwiper = swiper => {
    // console.log(swiper)
}
const onSlideChange = () => {
    // console.log('slide change')
}
</script>

<template>
    <swiper
        direction="vertical"
        :slides-per-view="3"
        :space-between="50"
        mousewheel
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        loop
        :modules="[Mousewheel]"
    >
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
    </swiper>
</template>

<style scoped>
.swiper {
    height: 400px; /* Adjust the height of the swiper container */
}

.swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px; /* Ensure the slides have a fixed height */
    background-color: #eee; /* Optional: Add a background to distinguish slides */
}
</style>
