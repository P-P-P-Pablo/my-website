<script setup>
import { ref, reactive, computed } from 'vue';
import JobCard from '../components/JobCard.vue';
import WindowFrame from '../components/WindowFrame.vue';
import ResumeButton from '../components/ResumeButton.vue';
import FunkyTitle from '../components/FunkyTitle.vue';
import jobData from '../assets/CV.json';

const maxWindows = 10;
let nextWindowIndex = ref(1);
const windows = reactive([])

function generateAvailableComponents(jobData) {
    const components = {};

    jobData.forEach((job, index) => {
        components[`jobcard_${index}`] = {
            component: JobCard,
            props: job,
        };
    });

    return components;
}

const availableComponents = computed(() => ({
    ...generateAvailableComponents(jobData),
    resume: {
        component: ResumeButton,
        props: {},
    },
    title: {
        component: FunkyTitle,
        props: { title: `Greetings, Visitor #${Math.floor(Math.random() * 1000000)} !` },
    },
}));


function addComponentWindow(componentKey) {
    const componentData = availableComponents.value[componentKey];
    if (componentData) {
        addWindow(componentKey, componentData.component, componentData.props);
    } else {
        console.error("Component not found:", componentKey);
    }
}
// Adds a new window to the list of windows
function addWindow(componentKey, component, componentProps) {
  if (nextWindowIndex.value < maxWindows) {
    // Check if a window with the same componentKey already exists
    const existingWindow = windows.find(
      (window) => window.componentKey === componentKey
    );

    // If a window with the same componentKey does not exist, add a new window
    if (!existingWindow) {
      const id = nextWindowIndex.value++;
      windows.push({
        id,
        componentKey,
        visible: true,
        position: { zIndex: id, top: 50 + 30 * (id % 6), left: 50 + 30 * (id % 6) },
        component,
        props: componentProps,
      });
    } else {
      // If a window with the same componentKey already exists, make it visible
      existingWindow.visible = true;
      bringToFront(existingWindow);
    }
  }
}


// Handles closing a window by setting its visible property to false
function handleClose(id) {
    const windowToClose = windows.find((window) => window.id === id);
    if (windowToClose) {
        windowToClose.visible = false;
    }
}

// Handles saving the position of a window
function handleSavePosition(id, position) {
    const windowToUpdate = windows.find((window) => window.id === id);
    if (windowToUpdate) {
        windowToUpdate.position = position;
    }
}

function bringToFront(windowToBringFront) {
    const highestZIndex = Math.max(...windows.map((window) => window.position.zIndex));
    windowToBringFront.position.zIndex = highestZIndex + 1;
    windows.value = [...windows];
}
</script>

<template>
    <div class="main-body">
        <button class="addwindow jobcard" :style="`--index : ${index}`" v-for="(job, index) in jobData" :key="index"
            @click="() => addComponentWindow(`jobcard_${index}`)">
            Add {{ job.jobTitle }}
        </button>
        <button class="addwindow resume" @click="addComponentWindow('resume')">Add resume Window</button>
        <button class="addwindow title" @click="addComponentWindow('title')">Add title Window</button>
        <WindowFrame v-for="window in windows" :key="`${window.id}_${window.position.zIndex}`"
            :title="`Window ${window.id}`" :style="{ zIndex: window.position.zIndex }" :position="{ ...window.position }"
            v-show="window.visible" @close="handleClose(window.id)"
            @savePosition="(position) => handleSavePosition(window.id, position)" @bringtofront="bringToFront(window)">
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
