<script setup>
import WindowFrame from '../components/WindowFrame.vue';
import { useWindowsStore } from '../stores/windowsStore';

const windows = useWindowsStore();
</script>

<template>
    <div class="main-body">
        <button class="addwindow jobcard" :style="`--index : ${index}`" v-for="(job, index) in jobData" :key="index"
            @click="() => windows.addComponentWindow(`jobcard_${index}`)">
            Add {{ job.jobTitle }}
        </button>
        <button class="addwindow resume" @click="windows.addComponentWindow('resume')">Add resume Window</button>
        <button class="addwindow title" @click="windows.addComponentWindow('title')">Add title Window</button>
        <WindowFrame v-for="window in windows" :key="`${window.id}`" :idwindow="window.id" v-show="window.visible">
            <component :is="window.component" v-bind="window.props"></component>
        </WindowFrame>

    </div>
</template>

<style scoped>
.main-body {
    position: relative;
    height: 100vh;
    width: 100vw;
}

.addwindow {
    position: absolute;

}

.jobcard {
    bottom: 50px;
    right: calc(50px + 200px * var(--index))
}

.title {
    right: 50px;
    bottom: 75px
}

.resume {
    right: 50px;
    bottom: 100px
}
</style>
