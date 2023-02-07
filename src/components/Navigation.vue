<script setup>
</script>

<template>
    <div class="navigation">
        <div class="nav-body">

            <div class="menu-item home">
                <router-link to="/" class="link">
                    <img src="../assets/home-ico.svg" alt="Home" />
                </router-link>
                <p class="menu-name">Home</p>
            </div>
            <div class="menu-item cv">
                <router-link to="/cv" class="link">
                    <img src="../assets/cv-ico.svg" alt="Curriculum" />

                </router-link>
                <p class="menu-name">CV</p>
            </div>
            <div class="menu-item projects">
                <router-link to="/projects" class="link">
                    <img src="../assets/project-ico.svg" alt="Projects" />

                </router-link>
                <p class="menu-name">Projects</p>

            </div>
        </div>
    </div>

</template>

<style scoped>
.navigation {
    width: fit-content;
}

.nav-body {
    width: 150px;
    height: 40px;
    background-color: var(--baby-blue-eyes);

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    overflow: visible;

}

.link {
    width: 25px;
    height: 25px;
    align-content: center;
    justify-content: center;
    flex-flow: column nowrap;
    display: flex;

    color: inherit;
    text-decoration: none;
    filter: none;
}

.menu-item {
    width: 25px;
    height: 25px;
    overflow: visible;
}

.menu-name {
    color: var(--light-pink);
    transition: all 1s ease-in-out 0.1s;
    font-family: Lobster;
}

.menu-item:hover .menu-name {
    display: block;
    color: black;

    text-shadow: 2px 1px 2px rgba(100, 100, 100, 0.5);
}

</style>
