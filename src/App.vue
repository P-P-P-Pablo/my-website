<script setup>
import { onBeforeMount } from 'vue';
import { useCompStore } from './stores/availableComponentStore';
import { useWindowsStore } from './stores/windowsStore';

const compStore = useCompStore();
const windowsStore = useWindowsStore();
onBeforeMount(() => {
  compStore.generateAvailableComponentsFromJobData();
});
</script>

<template>
  <div class="app">
    <img class="logo" src=".\assets\logo2.png" />
    <router-view />

  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Press+Start+2P&family=MuseoModerno&display=swap');

.logo {
  position: absolute;
  width: 100px;
  height: 100px;
  margin: 20px;
  right: 0;
}

.main-body {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}
</style>
