<script setup>
import Photo from './Photo.vue';
import { onMounted, reactive } from 'vue'
const placeholder = "/300x300-placeholder.jpg";

const state = reactive({
    photolist: [
        "/blanc.png",
        "/bleu.png",
        "/jaune.png",
        "/rouge.png",
        "/noir.png"
    ],
    visiblePhotos: [],
    currentPhoto: 0
})

function setCurrentPhoto(index) {
    state.currentPhoto = index;

    let left, center, right;

    const lastInArray = state.photolist.length - 1;

    if (index == lastInArray + 1 || index == 0) {
        state.currentPhoto = 0; // restart counter

        left = lastInArray;
        center = 0;
        right = 1;
    } else if (index == - 1 || index == lastInArray) {
        state.currentPhoto = lastInArray; // restart counter

        left = lastInArray - 1;
        center = lastInArray;
        right = 0;
    } else {
        left = index - 1;
        center = index;
        right = index + 1
    }

    state.visiblePhotos = [
        state.photolist[left],
        state.photolist[center],
        state.photolist[right]
    ]
}

onMounted(() => {
    setCurrentPhoto(Math.floor(state.photolist.length / 2));
})
</script>

<template>
    <div class="photoslider">
        <Photo id="left" :src="state.visiblePhotos[0]" @click="setCurrentPhoto(state.currentPhoto - 1)" />
        <Photo id="center" :src="state.visiblePhotos[1]" />
        <Photo id="right" :src="state.visiblePhotos[2]" @click="setCurrentPhoto(state.currentPhoto + 1)" />
    </div>
</template>

<style scoped>
.photoslider {
    width: 1000px;
    height: 400px;
    border-radius: 8px;
    background: rgba(255, 255, 252, 0.5);
    box-shadow: 8px 10px 4px rgba(100, 100, 100, 0.3);

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
}

.photo {
    transition: transform 500ms ease-in-out 100ms;
}

#left {
    transform: perspective(600px) rotateY(45deg);
}

#left:hover {
    transform: perspective(600px) rotateY(40deg);
}

#right {
    transform: perspective(600px) rotateY(-45deg);
}

#right:hover {
    transform: perspective(600px) rotateY(-40deg);
}
</style>
