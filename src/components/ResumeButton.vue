<script setup>
import Arrow from '../components/Arrow.vue';

</script>

<template>
    <div class="resume-container">
        <Arrow class="top" :scale-max="1.3" :scale-min="0.8" />
        <Arrow class="top-left" :width="50" :length="50" :rotation="-50" :delay="300" />
        <Arrow class="left" :rotation="-90" :delay="50" />
        <Arrow class="top-right" :width="20" :length="20" :rotation="40" :scale-max="1.8" :delay="300" />
        <a class="download" target="_blank" href="CVPVI2023.pdf">Click here to download my resume</a>

        <Arrow class="bottom-left" :width="75" :length="75" :rotation="-135" :scale-min="0.7" />
        <Arrow class="bottom" :rotation="-180" :scale-min="0.7" :scale-max="1.5" :delay="500" />
        <Arrow class="near-bottom" :rotation="150" :width="30" :length="30" :scale-max="1.5" :delay="50" />
        <Arrow class="bottom-right" :width="75" :length="75" :rotation="130" :scale-max="1.2" :delay="200" />
        <Arrow class="right" :rotation="85" :scale-max="1.3" :scale-min="0.8" :delay="150" />
    </div>
</template>

<style scoped>
a {
    text-decoration: none;
}

.download {
    font-size: 10px;
    width: 80px;
    border-radius: 5px;
    background: linear-gradient(0deg, var(--tea-green) 0%, var(--maximum-blue-purple) 100%);
    border: none;
    font-family: 'Press Start 2P';
    font-size: 7px;
    text-align: center;
    line-height: 9px;
    padding: 3px;
}

.download:hover {
    opacity: 80%;
}

.download:active {
    transform: scale(1.05);
}

.resume-container {
    width: 200px;
    height: 200px;
    margin: 50px;

    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
}

.top {
    position: absolute;
    top: -35px;
    left: 50px;
}

.top-left {
    position: absolute;
    top: 30px;
    left: 5px;
}

.left {
    position: absolute;
    left: -60px;
    top: 50px;
}

.bottom-left {
    position: absolute;
    bottom: 10px;
    left: 15px;
}

.bottom {
    position: absolute;
    bottom: -80px;
    right: 50px;
}

.near-bottom {
    position: absolute;
    bottom: 45px;
    right: 65px;
}

.bottom-right {
    position: absolute;
    bottom: 0;
    right: -10px;
}

.right {
    position: absolute;
    right: -60px;
    top: 40px;
}

.top-right {
    position: absolute;
    right: 50px;
    top: 55px;
}
</style>
