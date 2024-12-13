<script></script>

<template>
    <div class="indicator-container">
        <div class="indicator"></div>
    </div>
</template>

<style scoped>
.indicator-container {
    width: 5px;
    height: 100vh;
    position: fixed;
    z-index: 99;
}

.indicator {
    background-color: blue;
    width: 100%;
    height: 50%;
}
</style>
