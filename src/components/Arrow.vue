<script setup>
defineProps({
    width: {
        type: Number,
        required: false,
        default: 100
    },
    length: {
        type: Number,
        required: false,
        default: 100
    },
    rotation: {
        type: Number,
        required: false,
        default: 0
    },
    scaleMax: {
        type: Number,
        required: false,
        default: 1.1
    },
    scaleMin: {
        type: Number,
        required: false,
        default: 0.9
    },
    color:{
        type: String,
        required: false,
        default: "#ffc6ffff"
    },
    delay:{
        type: Number,
        required: false,
        default: 0
    }
})
</script>

<template>
    <div class="arrow"
        :style="`--width: ${width}px; --length: ${length}px; --rotation: ${rotation}deg; --scalemax: ${scaleMax}; --scalemin: ${scaleMin}; --arrowcolor: ${color}; --delay: ${delay}ms`">
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
    animation-delay: var(--delay);
}

.arrow-point {
    width: 0;
    height: 0;
    border-left: calc(0.4 * var(--width)) solid transparent;
    border-right: calc(0.4 * var(--width)) solid transparent;
    border-top: calc(0.5 * var(--length)) solid var(--arrowcolor);
}

.arrow-body {
    width: 40%;
    height: 66%;
    background-color: var(--arrowcolor);
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
