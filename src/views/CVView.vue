<script setup>
import JobCard from '../components/JobCard.vue';
import Title from '../components/Title.vue';
</script>

<template>
    <div class="main-body">
        <Title class="title" title='My previous positions' />
        <JobCard jobTitle="Job Title" companyName="Company Name" fromTo="0000 - 9999"
            :missions="['Mission 1', 'Mission 2', 'Mission 3']" :technos="['Techno 1', 'Techno 2', 'Techno 3']"
            companyLogo="\300x300-placeholder.jpg" />
    </div>
</template>
<style scoped>
.title {
    margin-bottom: 100px;
}
</style>