<script setup>
const props = defineProps({
    contents: {
        type: Array,
    },
})
</script>

<template>
    <div class="content-container">
        <div>
            <div
                v-for="(content, index) in contents"
                :key="index"
                @click="content.onclick"
            >
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
