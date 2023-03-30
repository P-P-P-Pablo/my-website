<script setup>

import Button3D from '../components/3DButton.vue';
import ResumeButton from '../components/ResumeButton.vue';
import Title from '../components/Title.vue';
import { reactive, onMounted } from 'vue';

const state = reactive({
    screenWidth: 0
})

onMounted(() => {
    state.screenWidth = window.innerWidth;
    console.log(state.screenWidth)
});

</script>

<template>
    <div class="main-body">
        <Title title='Hello' />

        <div class="pres">
            <p>Hey there!</p>
            <p>My name is Pablo and I'm a web developer. You are about to see my personal website. </p>
            <p>This a showcase of my skills. I don't want to brag about it because I don't think that's really something exceptional.</p>
            <p>I'm still working on the mobile version. Technically it works, but this is not the optimal way to check this website because you need a bigger screen to really interact with this website. There is not a lot of content, for now, and the website is mainly to help me find a job so, if you're a mobile user, you should find a button to download my resume below and I invite you to come back on a bigger screen.</p>
            <p>I would also strongly advise you to check out the Github repo of this site, you can find it the "projects" part.</p>
        </div>
        <ResumeButton class="resume" />
        <Button3D class="enter" alt="" href="/home">Let's go !</Button3D>
    </div>
</template>

<style scoped>
.pres {
    font-family: 'Press Start 2P';
    width: 100%;
    max-width: 1000px;
}

.resume {
    position: relative;
}

@media screen and (max-width: 600px) {
    .enter {
        display: none;
    }
}

@media screen and (min-width: 601px) {
    .resume {
        display: none;
    }
}

p {
    margin: 5% 0;
}
</style>
