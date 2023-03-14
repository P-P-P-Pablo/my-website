<script setup>
import JobCard from '../components/JobCard.vue';
import Title from '../components/Title.vue';
import CVJSON from '../assets/CV.json';
import ResumeButton from '../components/ResumeButton.vue';
</script>

<template>
    <div class="main-body">
        <ResumeButton class="resume" />
        <Title class="title" title='My previous positions' />
        <JobCard v-for="(job, i) in CVJSON" :jobTitle="job.jobTitle" :companyName="job.companyName" :fromTo="job.fromTo"
            :missions="job.missions" :technos="job.technos" :companyLogo="job.companyLogo" :key="i" />
    </div>
</template>
<style scoped>
.main-body {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;
}

.title {
    margin-bottom: 50px;
}

@media (min-width: 900px) {
    .resume {
        position: absolute;
    }
    .title {
    margin-top: 160px;
}
}
</style>