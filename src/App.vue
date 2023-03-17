<script setup>
import Menu from './components/Menu.vue'
import TestView from './views/TestView.vue';
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
