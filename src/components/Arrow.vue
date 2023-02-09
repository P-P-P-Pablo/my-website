<script setup>
defineProps({
    width: Number,
    length: Number,
    rotation: Number,
    scaleMax: Number,
    scaleMin: Number
})
</script>

<template>
    <div class="arrow" :style="`--width: ${width}px; --length: ${length}px; --rotation: ${rotation}deg; --scalemax: ${scaleMax}; --scalemin: ${scaleMin};`">
        <div class="arrow-body"></div>
        <div class="arrow-point"></div>
    </div>
</template>

<style scoped>
.arrow {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    width: var(--width);
    height: var(--length);
    animation: pulse 1s infinite ease-in-out alternate;
}

.arrow-point {
    width: 0;
    height: 0;
    border-left: calc(0.4 * var(--width)) solid transparent;
    border-right: calc(0.4 * var(--width)) solid transparent;
    border-top: calc(0.5 * var(--length)) solid var(--mauve);
    filter: drop-shadow(8px 10px 4px rgba(100, 100, 100, 0.3));
}

.arrow-body {
    width: 40%;
    height: 66%;
    background-color: var(--mauve);
    box-shadow: 8px 10px 4px rgba(100, 100, 100, 0.3);
}



@keyframes pulse {
    from {
        transform: scale(var(--scalemin)) rotate(var(--rotation));
    }

    to {
        transform: scale(var(--scalemax)) rotate(var(--rotation));
    }
}
</style>
