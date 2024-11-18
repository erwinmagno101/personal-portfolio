<script setup>
import { computed, onMounted, ref } from 'vue'

const props = defineProps({
    title: String,
    contents: Array,
    position: String,
})

const isHovering = ref(false)

const linepos = computed(() => {
    if (props.position === 'top-left') {
        return 'line-top-left'
    }

    if (props.position === 'top-right') {
        return 'line-top-right'
    }

    if (props.position === 'bottom-left') {
        return 'line-bottom-left'
    }
    return 'line-bottom-right'
})
</script>

<template>
    <div class="info" :class="position">
        <div
            class="info-trigger"
            :class="[linepos]"
            @mouseenter="isHovering = true"
            @mouseleave="isHovering = false"
        >
            {{ title }}
        </div>
        <div
            v-if="isHovering"
            class="info-content"
            @mouseenter="isHovering = true"
            @mouseleave="isHovering = false"
        >
            <div v-for="(content, index) in contents" :key="index">
                {{ content }}
            </div>
        </div>
    </div>
</template>

<style scoped>
.info {
    position: absolute;
}

.top-left {
    top: 0;
    left: 0;
    transform: translate(-200%, 100%);
}

.top-right {
    top: -10%;
    right: 0;
    transform: translate(200%, 100%);
}

.bottom-left {
    bottom: 10%;
    left: 0;
    transform: translate(-200%, 100%);
}

.bottom-right {
    bottom: 10%;
    right: 0;
    transform: translate(200%, 100%);
}

.info-trigger {
    cursor: pointer;
    background-color: #151515;
    padding: 1rem;
    border: 1px solid white;
}

.line-top-left::before {
    content: '';
    width: 200px;
    height: 100px;
    border-bottom: 1px solid white;
    border-left: 1px solid white;
    position: absolute;
    transform-origin: left;
    top: 0;
    left: 0;
    transform: skewX(20deg) translate(40%, 10%);
    z-index: -99;
}

.line-top-right::before {
    content: '';
    width: 200px;
    height: 100px;
    border-bottom: 1px solid white;
    border-right: 1px solid white;
    position: absolute;
    transform-origin: left;
    top: 0;
    right: 0;
    transform: skewX(-20deg) translate(-40%, 10%);
    z-index: -99;
}

.line-bottom-left::before {
    content: '';
    width: 200px;
    height: 100px;
    border-top: 1px solid white;
    border-left: 1px solid white;
    position: absolute;
    transform-origin: left;
    top: -100%;
    left: 0;
    transform: skewX(-20deg) translate(40%, 10%);
    z-index: -99;
}

.line-bottom-right::before {
    content: '';
    width: 200px;
    height: 100px;
    border-top: 1px solid white;
    border-right: 1px solid white;
    position: absolute;
    transform-origin: left;
    top: -100%;
    right: 0;
    transform: skewX(20deg) translate(-40%, 10%);
    z-index: -99;
}

.info-content {
    position: absolute;
    width: 250px;
    left: 50%;
    bottom: -10%;
    transform: translate(-50%, 100%);
    border: 1px solid white;
    background-color: #151515;
}
</style>
