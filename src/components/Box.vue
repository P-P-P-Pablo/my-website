<script setup>
import { reactive, watch } from 'vue';

const state = reactive({
    boxClicked: false,
    delayedRender: false
})

watch(() => state.boxClicked, (newValue) => {
    // Only show the slot if the box has been clicked
    if (newValue) {
        setTimeout(() => {
            state.delayedRender = true;
        }, 400);

    }
});

</script>
<template>
    <div class="boxy">
        <input id="chk" type="checkbox" v-model.lazy="state.boxClicked" />
        <label for="chk"></label>
        <slot v-if="state.delayedRender"></slot>
    </div>
</template>
<style scoped>
.boxy {
    --brown: #a57746;
    --brown2: #9c6f3d;
    --brown3: #8a5e34;
    --brown4: #7b512d;
    --size: 60px;
    --speed: 0.3s;
    --outline: 0 0 0.5px 0px var(--brown4);
    --hover-angle: 40deg;
    --open-angle: 125deg;
}

.boxy,
.boxy label,
.boxy input {
    appearance: none;
    width: var(--size);
    height: var(--size);
    display: block;
    position: absolute;
    outline: none;
    user-select: none;
    margin: 0;
}

.boxy {
    background: linear-gradient(300deg, var(--brown2), var(--brown3));
    box-shadow: inset 2px 2px 10px -1px var(--brown4);


}

.boxy:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    line-height: var(--size);
    color: white;
    text-align: center;
    font-size: 16px;
}

.boxy label,
.boxy label:before,
.boxy label:after,
.boxy input,
.boxy input:before,
.boxy input:after {
    content: "";
    position: absolute;
    perspective: 200px;
}

.boxy label:before,
.boxy label:after,
.boxy input:before,
.boxy input:after {
    box-shadow: 0 0 0.5px 0px var(--brown4);
    transition: all var(--speed) ease;
    z-index: 1;
}

.boxy label {
    text-indent: 80px;
    white-space: nowrap;
    line-height: var(--size);
}

.boxy label:before,
.boxy label:after {
    width: 50%;
    height: 100%;
    top: 0;
    left: 0;
    transform-origin: left;
    background: linear-gradient(270deg, var(--brown), var(--brown2));
}

.boxy label:after {
    right: 0;
    left: auto;
    transform-origin: right;
    background: linear-gradient(90deg, var(--brown), var(--brown2));
}

.boxy input:before,
.boxy input:after {
    width: 100%;
    height: 50%;
    transform-origin: top;
    background: linear-gradient(0deg, var(--brown), var(--brown2));
}

.boxy input:after {
    bottom: 0;
    transform-origin: bottom;
    background: linear-gradient(180deg, var(--brown), var(--brown2));
}

.boxy input:checked:before {
    transform: rotate3d(1, 0, 0, 125deg);
    background: linear-gradient(-20deg, var(--brown), var(--brown3));
}

.boxy input:checked:after {
    transform: rotate3d(1, 0, 0, -125deg);
    background: linear-gradient(165deg, var(--brown), var(--brown3));
}

.boxy input:checked+label:before {
    transform: rotate3d(0, 1, 0, -125deg);
    background: linear-gradient(270deg, var(--brown), var(--brown3));
}

.boxy input:checked+label:after {
    transform: rotate3d(0, 1, 0, 125deg);
    background: linear-gradient(90deg, var(--brown), var(--brown3));
}

.boxy:hover input:not(:checked)+label:before,
.boxy input:focus:not(:checked)+label:before {
    transform: rotate3d(0, 1, 0, -40deg);
    box-shadow: 0 0 0.5px 0px var(--brown4), 3px 0px 2px rgba(0, 0, 0, 0.2);
}

.boxy:hover input:not(:checked)+label:after,
.boxy input:focus:not(:checked)+label:after {
    transform: rotate3d(0, 1, 0, 40deg);
    box-shadow: 0 0 0.5px 0px var(--brown4), -3px 0px 2px rgba(0, 0, 0, 0.2);
}


.boxy label:before {
    transition-delay: calc(var(--speed) * 1/3);
}

.boxy label:after {
    transition-delay: calc(var(--speed) * 1/2);
}

.boxy input:checked+label:before {
    transition-delay: 0s;

}

.boxy input:checked+label:after {
    transition-delay: calc(var(--speed) * 1/3);

}

.boxy input:checked:before {
    transition-delay: calc(var(--speed) * 1/2);

}

.boxy input:checked:after {
    transition-delay: calc(var(--speed) * 1.3);

}
</style>