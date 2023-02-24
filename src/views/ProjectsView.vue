<script setup>
import FirstArticle from '../components/FirstArticle.vue';

</script>

<template>
    <div class="main-body">
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

p {
    margin: 20px 0;
}
</style>