<script setup>
import Arrow from '../components/Arrow.vue';

</script>

<template>
    <div class="main-body">
        <Arrow class="little" width="50" length="50" rotation="-45" scale-max="1.1" scale-min="0.9"/>
        <Arrow class="medium" width="100" length="100" rotation="45" scale-max="1.1" scale-min="0.9"/>
        <Arrow class="big" width="150" length="150" rotation="90" scale-max="1.1" scale-min="0.9"/>
    </div>
</template>
