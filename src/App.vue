<script setup>
import Menu from './components/Menu.vue'
</script>

<template>
  <div class="app">
    <!-- <Menu /> -->
    <router-view />
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
