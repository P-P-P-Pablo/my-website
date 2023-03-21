<script setup>
import { onBeforeMount } from 'vue';
import Menu from './components/Menu.vue'
import TestView from './views/TestView.vue';
import { useCompStore } from './stores/availableComponentStore';
import { useWindowsStore } from './stores/windowsStore';

const compStore = useCompStore();
const windowsStore = useWindowsStore();
onBeforeMount(() => {
  compStore.generateAvailableComponentsFromJobData();
  console.log('windows', windowsStore.windows);
  console.log('availableComponentStore', compStore.availableComponents);
});
</script>

<template>
  <div class="app">
    <!-- <Menu /> -->
    <!-- <router-view /> -->
    <TestView />

  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Press+Start+2P&family=MuseoModerno&display=swap');



.main-body {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}
</style>
