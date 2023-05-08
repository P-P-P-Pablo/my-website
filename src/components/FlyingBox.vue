<script setup>
defineProps({
    targetX: {
        type: Number,
        required: true
    },
    targetY: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="jumping-component" :style="`--targetx: ${targetX}px; --targety: ${targetY}px; --color: ${color}`">
        <slot></slot>
    </div>
</template>
  
<style scoped>
.jumping-component {
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    animation: jump 2s linear forwards;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background-clip: content-box;
    z-index: 0;

    /* Add shadow to the jumping element */
    filter: drop-shadow(0px 2px 4px var(--color));
}




@keyframes jump {
    0% {
        transform: translate3d(0, 0, 0) scale(1);
        filter: drop-shadow(0px 2px 4px var(--color));
    }

    25% {
        transform: translate3d(calc(var(--targetx)/4), calc(var(--targety)/4), 50px) scale(1.4);
        filter: drop-shadow(0px 4px 8px var(--color));
    }

    50% {
        transform: translate3d(calc(var(--targetx)/2), calc(var(--targety)/2), 100px) scale(1.8);
        filter: drop-shadow(0px 6px 12px var(--color));
    }

    75% {
        transform: translate3d(calc(var(--targetx)*3/4), calc(var(--targety)*3/4), 50px) scale(1.4);
        filter: drop-shadow(0px 4px 8px var(--color));
    }

    100% {
        transform: translate3d(var(--targetx), var(--targety), 0) scale(1);
        filter: drop-shadow(0px 2px 4px var(--color));
    }
}
</style>
