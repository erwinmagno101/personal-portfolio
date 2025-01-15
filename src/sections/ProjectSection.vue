<script setup></script>
<template>
    <section>
        <div>
            <h2>Featured Projects</h2>
            <div class="projects-container">
                <div class="project" v-for="i in 3" :key="i">
                    <div class="img-container">
                        <img
                            src="https://placehold.co/400x500"
                            alt="Project Image"
                        />
                    </div>
                    <div class="content">
                        <div>Title here</div>
                        <div>Description</div>
                        <div>tags</div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <h2>Personal Projects</h2>
            <div class="projects-container"></div>
        </div>
    </section>
</template>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    gap: 200px;
    overflow-x: hidden;
}
.projects-container {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

section > div > :first-child {
    margin-bottom: 1rem;
}

.project {
    flex: 1;
    background: red;
    min-width: 500px;
    max-width: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
}

.project .img-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.project .img-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
