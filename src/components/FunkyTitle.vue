<script setup>

defineProps({
  title: String,
})

</script>

<template>
  <h1 class="funkytitle">{{ title }}</h1>
</template>

<style scoped>
.funkytitle {
  text-shadow: 8px 10px 4px rgba(100, 100, 100, 0.5);
  font-family: Lobster;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  animation: 4s gradiant linear infinite;
  background-clip: text !important;
  -webkit-background-clip: text !important;
  color: transparent;
  margin: 5px;
  margin-top: 10px;
}

.funkytitle:hover {
  animation: 300ms hover linear infinite;
}

@keyframes gradiant {
  0% {
    background-image: radial-gradient(circle, #2C5D37 0%, #E3C515 45%, #EE51B1 100%);
  }

  10% {
    background-image: radial-gradient(circle, #2C5D37 0%, #E3C515 50%, #EE51B1 100%);
  }

  20% {
    background-image: radial-gradient(circle, #E3C515 0%, #EE51B1 55%, #A59CD3 100%);
  }

  30% {
    background-image: radial-gradient(circle, #E3C515 0%, #EE51B1 50%, #A59CD3 100%);
  }

  40% {
    background-image: radial-gradient(circle, #EE51B1 0%, #A59CD3 45%, #4B2D9F 100%);
  }

  50% {
    background-image: radial-gradient(circle, #EE51B1 0%, #A59CD3 50%, #4B2D9F 100%);
  }

  60% {
    background-image: radial-gradient(circle, #A59CD3 0%, #4B2D9F 55%, #000000 100%);
  }

  70% {
    background-image: radial-gradient(circle, #A59CD3 0%, #4B2D9F 50%, #000000 100%);
  }

  80% {
    background-image: radial-gradient(circle, #4B2D9F 0%, #000000 45%, #2C5D37 100%);
  }

  90% {
    background-image: radial-gradient(circle, #4B2D9F 0%, #000000 50%, #2C5D37 100%);
  }

  100% {
    background-image: radial-gradient(circle, #000000 0%, #2C5D37 55%, #E3C515 100%);
  }
}

@keyframes hover {
  0% {
    text-shadow: 2px -2px 0 #00f6de;
    color: #ff0921;
  }

  10% {
    text-shadow: -3px 3px 0 #2044e8;
    color: #dfbb17;
  }

  20% {
    text-shadow: 4px -4px 0 #c500ed;
    color: #3aff12;
  }

  30% {
    text-shadow: -5px 5px 0 #17f105;
    color: #e80efa;
  }

  40% {
    text-shadow: 6px -6px 0 #f6ea00;
    color: #0915ff;
  }

  50% {
    text-shadow: -7px 7px 0 #f10c1a;
    color: #0ef3e5;
  }

  60% {
    text-shadow: 8px -8px 0 #c500ed;
    color: #3aff12;
  }

  70% {
    text-shadow: -9px 9px #2044e8;
    color: #dfbb17;
  }

  80% {
    text-shadow: 10px -10px #17f105;
    color: #e80efa;
  }

  90% {
    text-shadow: -5px 5px #f6ea00;
    color: #0915ff;
  }

  100% {
    text-shadow: 2px -2px #ffffff;
    color: #000000;
  }
}
</style>
