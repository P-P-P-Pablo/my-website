<script setup>

defineProps({
  title: String,
})

</script>

<template>
  <h1>{{ title }}</h1>
</template>

<style scoped>
h1 {
  text-shadow: 8px 10px 4px rgba(100, 100, 100, 0.5);
  font-family: Lobster;
  font-size: 48px;
  line-height: 48px;
  font-weight: 400;
  text-align: center;
  color: black;
  margin-top: 100px;
}
</style>
