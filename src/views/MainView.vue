<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Mousewheel, EffectCoverflow } from 'swiper/modules'
import { ref } from 'vue'

import 'swiper/css'
import { onMounted } from 'vue'

const activeNav = ref(null)

const onSwiper = swiper => {}

const onSlideChange = swiper => {
    activeNav.value = swiper.activeIndex
}

const swiperRef = ref(null)

const navItems = [
    { title: 'Project' },
    { title: 'Home' },
    { title: 'About' },
    { title: 'Blog' },
    { title: 'Contact' },
]

onMounted(() => {})
</script>

<template>
    <swiper
        direction="vertical"
        :slides-per-view="3"
        :space-between="30"
        mousewheel
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        loop
        effect="coverflow"
        :coverflow-effect="{
            slideShadows: false,
            rotate: -80,
            modifier: 0.5,
        }"
        :modules="[Mousewheel, EffectCoverflow]"
    >
        <swiper-slide v-for="(item, index) in navItems" :key="index">
            <div>{{ item.title }}</div>
        </swiper-slide>
    </swiper>
</template>

<style scoped>
.swiper {
    height: 700px; /* Adjust the height of the swiper container */
    width: 300px;
    overflow: hidden;
}

.swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eee; /* Optional: Add a background to distinguish slides */
}
</style>
