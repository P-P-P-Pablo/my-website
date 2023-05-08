<script setup>
// this component will be used in src\views\TestView.vue
// It is a combination of a Box and a FlyingBox
// the goal is to make the FlyingBox move away from the center of the Box
// when the user click on the box 

import Box from '../components/Box.vue';
import FlyingBox from '../components/FlyingBox.vue';




</script>

<template>
    <div class="copitest">
        <Box class="box">
            <FlyingBox :targetX="100" :targetY="200" color="red"><img src="../assets/cat.svg" alt="Cat" /></FlyingBox>
            <FlyingBox :targetX="200" :targetY="100" color="blue"><img src="../assets/cat.svg" alt="Cat" /></FlyingBox>
            <FlyingBox :targetX="-200" :targetY="-100" color="yellow"><img src="../assets/cat.svg" alt="Cat" /></FlyingBox>
        </Box>
    </div>
</template>

<style scoped>
.copitest {
    position: relative;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 0;
}
</style>