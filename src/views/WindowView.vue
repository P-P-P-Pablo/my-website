<script setup>
import WindowFrame from '../components/WindowFrame.vue';
import Button3D from '../components/3DButton.vue';
import { useWindowsStore } from '../stores/windowsStore';
import { onMounted, reactive } from 'vue';
import ResumeButton from '../components/ResumeButton.vue';
import FunkyTitle from '../components/FunkyTitle.vue';

const windowsStore = useWindowsStore();

const state = reactive({
    visitorNo: 0
})

onMounted(() => {
    state.visitorNo = Math.floor(Math.random() * 1000000);
})

const addPreviousPositionWindow = () => {
    windowsStore.addComponentWindow('jobcard_0');
    windowsStore.addComponentWindow('jobcard_1');
    windowsStore.addComponentWindow('jobcard_2');
}

const addProjectsWindow = () => {
    windowsStore.addComponentWindow('firstarticle');
}
</script>

<template>
    <div class="main-body">
        <div class="button-list">
            <Button3D @click="windowsStore.addComponentWindow('aboutme');" alt="About me">
                <img src="../assets/003-user.png" />
            </Button3D>
            <Button3D @click="addPreviousPositionWindow" alt="My previous positions">
                <img src="../assets/002-cv.png" />
            </Button3D>
            <Button3D @click="addProjectsWindow" alt="My previous projects">
                <img src="../assets/001-project.png" />
            </Button3D>
        </div>
        <ResumeButton class="resume" />
        <WindowFrame v-for="window in windowsStore.windows" :key="`${window.id}`" :idwindow="window.id"
            v-show="window.visible">
            <component :is="window.component" v-bind="window.props"></component>
        </WindowFrame>
        <FunkyTitle class="funky" :title="`Greetings, Visitor #${state.visitorNo} !`" />
    </div>
</template>

<style scoped>
.main-body {
    position: absolute;
    height: 99%;
    width: 99%;
}

.resume {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: -4;
}

.funky {
    position: absolute;
    bottom: 0;
    z-index: -4;
}

.button-list {
    position: absolute;
    height: 100%;
    left: 0;
    display: flex;
    flex-flow: column wrap;
}
</style>
