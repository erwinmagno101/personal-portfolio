<script setup></script>
<template>
    <section>
        <div>
            <h2>Featured Projects</h2>
            <div class="projects-container">
                <div class="project" v-for="i in 3" :key="i">
                    <div class="img-container">
                        <div class="title">Title here</div>
                        <div class="background"></div>
                        <img
                            src="https://placehold.co/400x500"
                            alt="Project Image"
                        />
                    </div>
                    <div class="content">
                        <div>Title here</div>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Voluptatum mollitia cum saepe praesentium
                            consectetur blanditiis dolore veritatis.
                        </div>
                        <div>
                            <div v-for="i in 5" :key="i">#test</div>
                        </div>
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
    min-width: 500px;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.project .img-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border: 1px solid rgba(255, 255, 255, 0.3);
}

.project .img-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.img-container .title {
    position: absolute;
    z-index: 1;
    font-size: 5rem;
}

.img-container .background {
    width: 100%;
    height: 100%;
    background-color: black;
    position: absolute;
}

.project .content > div:nth-child(1) {
    font-size: 1.5rem;
}

.project .content > div:nth-child(2) {
    opacity: 0.5;
}
.project .content > div:nth-child(3) {
    opacity: 0.5;
    display: flex;
    flex-wrap: wrap;
    gap: 0 1rem;
}
</style>
