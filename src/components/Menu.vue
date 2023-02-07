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
    position: fixed;
    flex-flow: column;
    align-items: center;
    width: 250px;
    height: 100%;
}

.logo {
    position: relative;
    top: 50px;
    left: 50px;
    width: 150px;
    height: auto;
}

.navigation {
    position: relative;
    top: 100px;
    left: 50px;
}
</style>
