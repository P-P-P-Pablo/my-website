<script setup>
import Navigation from './Navigation.vue';

</script>

<template>
    <div class="main-menu">
        <img class="logo" src="..\assets\logo2.png" />
        <Navigation />
    </div>
</template>

<style scoped>
.main-menu {
    display: flex;
    flex-flow: row;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    margin: 20px;
}

.logo {
    max-width: 150px;
    width: 25%;
    height: auto;
}
</style>
