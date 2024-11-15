<script setup></script>

<template>
    <section>
        <div>
            <div class="title2">i am</div>

            <div class="center-content">
                A WEB DEVELOPER SPECIALIZES IN FRONT-END TECHNOLOGIES, BASED IN
                THE PHILIPPINES
            </div>
        </div>
        <div class="title">DAN ERWIN</div>
        <div>HIRE THIS DUDE</div>
    </section>
</template>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 7rem;
}

.title {
    font-size: 10rem;
    font-weight: 600;
    text-align: center;
    font-stretch: ultra-expanded;
    letter-spacing: -0.4rem;
    word-spacing: 1rem;
    transform: scaleX(1.4);
    color: white;
    width: fit-content;
}

.title2 {
    font-size: 3rem;
    font-weight: 600;
    text-align: center;
    font-stretch: ultra-expanded;
    letter-spacing: -0.4rem;
    word-spacing: 1rem;
    color: white;
    width: fit-content;
}

.title:nth-child(1) {
    margin-bottom: -2rem;
}

.center-content {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 3rem;
    border-radius: 5px;
    border: 1px solid #373a40;
    text-align: center;
    word-spacing: 0.3rem;
    letter-spacing: 0.1rem;
}
</style>
