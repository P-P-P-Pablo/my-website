<script setup>
import JobCard from '../components/JobCard.vue';
import WindowFrame from '../components/WindowFrame.vue';

const job = {
    "jobTitle": "Front-end Developer trainee",
    "companyName": "360Medics",
    "fromTo": "Jan 2021 - Jun 2021",
    "missions": [
        "Create review sheets, quizzes, and special files as apps",
        "Format datas",
        "Worked with design and marketing team"
    ],
    "technos": ["HTML/CSS", "Javascript", "Vuejs", "Angular", "NodeJs"],
    "companyLogo": "360medics.jpg"
};

</script>

<template>
    <div class="main-body">
        <WindowFrame title="test dragable window">
            <JobCard :jobTitle="job.jobTitle" :companyName="job.companyName" :fromTo="job.fromTo" :missions="job.missions"
                :technos="job.technos" :companyLogo="job.companyLogo" />
        </WindowFrame>
        
    </div>
</template>

<style scoped>
@media (min-width: 900px) {
    .main-body {
        margin-top: -150px;
    }
}
</style>