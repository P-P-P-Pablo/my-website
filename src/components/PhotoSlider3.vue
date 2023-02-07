<script setup>
import Photo from './Photo.vue';
import FunkyTitle from './FunkyTitle.vue'
import { onMounted, reactive, ref, computed } from 'vue';
import axios from 'axios';

const state = reactive({
    visitorNo: 0,
    photolist: [],
    currentPhoto: 0,
    step: 320
})

const inner = ref(null)

function focusAnotherPhoto(index) {
    /* if (index == state.photolist.length - 1) {
        state.photolist.push(state.photolist.shift());
        state.currentPhoto = index - 1;
    } else if (index == 0) {
        state.photolist.unshift(state.photolist.pop());
        state.currentPhoto = index + 1;
    } else {
        state.currentPhoto = index;
    } */
    state.currentPhoto = index;
    if (index == state.photolist.length - 2 && state.photolist.length < 50) {
        getCats()
    }

}

function setPhotoClass(index) {
    if (index == state.currentPhoto) {
        return "center"
    } else if (index == state.currentPhoto - 1) {
        return "left"
    } else if (index < state.currentPhoto - 1) {
        return "nonvisible-left"
    } else if (index == state.currentPhoto + 1) {
        return "right"
    } else if (index > state.currentPhoto + 1) {
        return "nonvisible-right"
    }
}

const innerStyle = computed(() => {
    return {
        width: state.photolist.length * state.step + 600 + 'px',
        transform: `translateX(${-(state.currentPhoto * state.step - 40)}px)`
    }
})

function getCats() {
    axios.get('https://api.thecatapi.com/v1/images/search?limit=10')
        .then(response => {
            const cats = response.data
            state.photolist.push(...cats)
        })
}


onMounted(() => {
    getCats();
    state.currentPhoto = Math.floor(state.photolist.length / 2);
    state.visitorNo = Math.floor(Math.random() * 1000000);
})

</script>

<template>
    <div class="photoslider">
        
        <div class="inner" :style="innerStyle" ref="inner">
            <div class="goto last" @click="focusAnotherPhoto(state.photolist.length - 1)"><img src="../assets/cat.svg"
                    alt="Cat" /><span>Go to last cat</span></div>
            <Photo v-for="photo, i in state.photolist" :key="photo.id" :src="photo.url" :class="setPhotoClass(i)"
                @click="focusAnotherPhoto(i)" />
            <div class="goto first" @click="getCats()"><img src="../assets/cat.svg" alt="Cat" /><span>Get more
                    cats</span></div>
        </div>
        
    </div>
    <FunkyTitle :title="`Greetings, Visitor #${state.visitorNo} !`" />
</template>

<style scoped>
.photoslider {
    width: 1000px;
    height: 400px;
    border-radius: 8px;
    background: rgba(255, 255, 252, 0.5);
    box-shadow: 8px 10px 4px rgba(100, 100, 100, 0.3);
    overflow: hidden;
}

.inner {
    display: flex;
    height: 400px;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    transition: transform 800ms ease-in-out 100ms;
    overflow: visible;
}

.photo {
    transition: transform 800ms ease-in-out 100ms;
    margin-left: 10px;
    margin-right: 10px;
}

.nonvisible-left {
    transform: perspective(600px) rotateY(85deg);
}

.left {
    transform: perspective(600px) rotateY(55deg);
}

.left:hover {
    transform: perspective(600px) rotateY(40deg);
}

.right {
    transform: perspective(600px) rotateY(-55deg);
}

.right:hover {
    transform: perspective(600px) rotateY(-40deg);
}

.nonvisible-right {
    transform: perspective(600px) rotateY(-85deg);
}

.goto {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column nowrap;
    width: 300px;
    height: 300px;
    transition: transform 800ms ease-in-out 100ms;
}

.goto span {
    font-family: Lobster;
    text-shadow: 8px 10px 4px rgba(100, 100, 100, 0.3);
}

.goto img {
    filter: drop-shadow(8px 10px 4px rgba(100, 100, 100, 0.3));
}

.first {
    transform: perspective(600px) rotateY(-60deg);
}

.first:hover {
    transform: perspective(600px) rotateY(-30deg);
}

.last {
    transform: perspective(600px) rotateY(60deg);
}

.last:hover {
    transform: perspective(600px) rotateY(30deg);
}
</style>
