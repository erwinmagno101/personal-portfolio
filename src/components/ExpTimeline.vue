<script setup></script>

<template>
    <div class="container">
        <div class="timeline"></div>
        <!-- <svg width="500" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M0 10 Q 25 0, 50 10 T 100 10 T 150 10 T 200 10 T 250 10 T 300 10 T 350 10 T 400 10 T 450 10 T 500 10"
                fill="none"
                stroke="black"
                stroke-width="2"
            />
        </svg> -->
    </div>
</template>

<style scoped>
.container {
    width: 100%;
}

svg {
    transform: rotate(90deg);
}

.timeline {
    width: 10px;
    height: 700px;
    background-color: red;
}
</style>
