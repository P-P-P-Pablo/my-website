<script setup>
import { ref, reactive } from 'vue';
import JobCard from '../components/JobCard.vue';
import WindowFrame from '../components/WindowFrame.vue';

/* const job = {
    jobTitle: "Front-end Developer trainee",
    companyName: "360Medics",
    fromTo: "Jan 2021 - Jun 2021",
    missions: [
        "Create review sheets, quizzes, and special files as apps",
        "Format datas",
        "Worked with design and marketing team"
    ],
    technos: ["HTML/CSS", "Javascript", "Vuejs", "Angular", "NodeJs"],
    companyLogo: "360medics.jpg"
}; */

const maxWindows = 10;
let nextWindowIndex = ref(1);
const windows = reactive([{
    id: 0,
    visible: false,
    position: { top: 100, left: 100 },
    component: JobCard,
    props: {
        jobTitle: "Front-end Developer trainee",
        companyName: "360Medics",
        fromTo: "Jan 2021 - Jun 2021",
        missions: [
            "Create review sheets, quizzes, and special files as apps",
            "Format datas",
            "Worked with design and marketing team"
        ],
        technos: ["HTML/CSS", "Javascript", "Vuejs", "Angular", "NodeJs"],
        companyLogo: "360medics.jpg"
    }
}])


function addWindow() {
    if (nextWindowIndex.value < maxWindows) {
        windows.push({
            id: nextWindowIndex,
            visible: false,
            position: { top: 100, left: 100 },
            component: JobCard,
            props: {
                jobTitle: "Front-end Developer trainee",
                companyName: "360Medics",
                fromTo: "Jan 2021 - Jun 2021",
                missions: [
                    "Create review sheets, quizzes, and special files as apps",
                    "Format datas",
                    "Worked with design and marketing team"
                ],
                technos: ["HTML/CSS", "Javascript", "Vuejs", "Angular", "NodeJs"],
                companyLogo: "360medics.jpg"
            }
        })
        nextWindowIndex.value++;
    }
}

function handleClose(index) {
    windows.splice(index, 1);
    if (nextWindowIndex.value > 0) {
        nextWindowIndex.value--;
    }
}

function handleSavePosition(index, position) {
    windows[index].position = position;
}

</script>

<template>
    <div class="main-body">
        <button class="addwindow" @click="addWindow">Add Window</button>
        <WindowFrame v-for="(window, index) in windows" :key="window.id" :title="`Window ${window.id}`"
            :style="{ zIndex: '+' + window.id }" :position="window.position" @close="handleClose(index)"
            @savePosition="(position) => handleSavePosition(index, position)">
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
    bottom: 50px;
    right: 50px;
}
</style>