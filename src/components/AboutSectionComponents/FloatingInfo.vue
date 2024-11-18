<script setup>
import { ref } from 'vue'

const isHovering = ref(false)
</script>

<template>
    <div class="info">
        <div
            class="info-trigger"
            @mouseenter="isHovering = true"
            @mouseleave="isHovering = false"
        >
            personal info
        </div>
        <div
            v-if="isHovering"
            class="info-content"
            @mouseenter="isHovering = true"
            @mouseleave="isHovering = false"
        >
            personal info here personal info here personal info here
        </div>
    </div>
</template>

<style scoped>
.info {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-200%, 100%);
    border: 1px solid white;
}

.info-trigger {
    cursor: pointer;
    background-color: #151515;
}

.info::before {
    content: '';
    width: 200px;
    height: 100px;
    border-bottom: 1px solid red;
    border-left: 1px solid red;
    position: absolute;
    transform-origin: left;
    top: 0;
    left: 0;
    transform: skewX(20deg) translate(40%, 10%);
    z-index: -99;
}

.info-content {
    position: absolute;
    width: 250px;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 100%);
    border: 1px solid green;
    background-color: black;
}
</style>
