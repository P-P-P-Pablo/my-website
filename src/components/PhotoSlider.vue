<script setup>
import Photo from './Photo.vue';
import { reactive, onMounted } from 'vue'
const placeholder = "/300x300-placeholder.jpg";

const state = reactive({
    photolist: [
        placeholder,
        placeholder,
        placeholder,
        placeholder,
        placeholder
    ],
    innerStyles: {},
    step: ''
})

onMounted(() => {
    setStep()
})

function next() {
    moveLeft();
}
function moveLeft() {
    state.innerStyles = {
        transform: `translateX(-${state.step})`
    }
    console.log("left")
}

function setStep() {
    const innerWidth = 2000;
    const totalCards = state.photolist.length
    state.step = `${innerWidth / totalCards}px`
    console.log("state.step=" + state.step)
}
</script>

<template>
    <div class="photoslider">
        <div class="inner">
            <Photo v-for="photo, i in state.photolist" :keys="i" :src="photo" />
        </div>
    </div>
    <button>prev</button>
    <button @click="next">next</button>
</template>

<style scoped>
.photoslider {
    width: 1000px;
    height: 400px;
    border-radius: 8px;
    background: rgba(255, 255, 252, 0.5);
    box-shadow: 8px 10px 4px rgba(100, 100, 100, 0.3);

    display: flex;
    overflow: hidden;
}

.inner {
    align-self: center;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-evenly;
    width: 2000px;
    transition: transform 0.2s;
}

/* #left {
    transform: perspective(600px) rotateY(45deg);
}

#right {
    transform: perspective(600px) rotateY(-45deg);
} */

button {
    margin-right: 5px;
    margin-top: 10px;
}
</style>
