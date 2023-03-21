<script setup>
import WindowFrame from '../components/WindowFrame.vue';
import { useWindowsStore } from '../stores/windowsStore';
import { useCompStore } from '../stores/availableComponentStore';

const windowsStore = useWindowsStore();
const compStore = useCompStore();
</script>

<template>
    <div class="main-body">
        <button class="addwindow" :style="`--index : ${index}`" v-for="(component, index) in [...compStore.availableComponents]" :key="index"
            @click="windowsStore.addComponentWindow(component[0])">
            Add {{ component[1].name }}
        </button>
        <WindowFrame v-for="window in windowsStore.windows" :key="`${window.id}`" :idwindow="window.id" v-show="window.visible">
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
    right: calc(50px + 200px * var(--index))
}


</style>
