<script setup>
defineProps({
    src: String,
})
</script>

<template>
    <div class="photo">
        <img :src="src" />
    </div>
</template>

<style scoped>
.photo {
    width: 20%;
    max-width: 300px;
    max-height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
}

img {
    max-height: 300px;
    max-width: 300px;
    margin: auto;
    box-shadow: 8px 10px 4px rgba(100, 100, 100, 0.3);
}
</style>
