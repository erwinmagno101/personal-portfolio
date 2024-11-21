<script setup>
import { inView } from 'motion'
import { onMounted, watch, ref } from 'vue'

const props = defineProps({
    contents: {
        type: Array,
    },
})
const activeIndex = ref(null)

const scrollTo = elementClass => {
    document.querySelector(elementClass).scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
    })
}
watch(
    () => activeIndex.value,
    newVal => {
        setActiveIndex()
    },
)

const setActiveIndex = () => {
    props.contents.forEach((element, index) => {
        inView(document.querySelector(element.tag), () => {
            activeIndex.value = index
        })
    })
}

onMounted(() => {
    setActiveIndex()
})
</script>

<template>
    <div class="content-container">
        <div>
            <div
                v-for="(content, index) in contents"
                :key="index"
                @click="() => scrollTo(content.tag)"
            >
                <span v-if="activeIndex === index">--></span>

                {{ content.title }}
            </div>
        </div>
    </div>
</template>

<style scoped>
.content-container {
    position: absolute;
    width: 100%;
    top: 20%;
    padding: 0 2rem;
}

.content-container > div {
    border: 1px solid white;
}
</style>
