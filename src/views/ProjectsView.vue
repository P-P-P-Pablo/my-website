<script setup>
import FirstArticle from '../components/FirstArticle.vue';
import Title from '../components/Title.vue';

</script>

<template>
    <div class="main-body">
        <Title class="title" title='My projects' />
        <FirstArticle />
    </div>
</template>

<style scoped>
.main-body {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    margin-left: 300px;
}

.title {
    margin-bottom: 100px;
}

p {
    margin: 20px 0;
}
</style>