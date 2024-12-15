<script setup>
const navList = [
    { title: 'Home' },
    { title: 'Skills' },
    { title: 'Project' },
    { title: 'About' },
    { title: 'Contact' },
]
</script>

<template>
    <div class="nav-container">
        <div class="Logo">LOGO HERE</div>
        <nav>
            <div>
                <div v-for="(nav, index) in navList" :key="index">
                    {{ nav.title }}
                </div>
            </div>
        </nav>
        <div class="Logo">LOGO HERE</div>
    </div>
</template>

<style scoped>
.nav-container {
    width: 100%;
    display: flex;
}

nav {
    flex: 1 1 0;
}

nav > div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem;
    width: fit-content;
    margin: 0 auto;
}
</style>
