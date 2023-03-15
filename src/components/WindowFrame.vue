<script setup>
import { ref, reactive } from 'vue'

const window = ref(null)

const state = reactive({
    pos1: 0,
    pos2: 0,
    pos3: 0,
    pos4: 0,
    touchID: 0,
    collapsed: false
})

defineProps({
    title: String,
})

function dragStart(event) {
    event.preventDefault();
    // get the mouse cursor position at startup:
    state.pos3 = event.clientX;
    state.pos4 = event.clientY;
    if (event.changedTouches && event.changedTouches.length == 1) {
        state.touchID = event.changedTouches[0].identifier;
    }
    document.onmouseup = closeDragElement;
    document.ontouchend = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
    document.ontouchmove = touchDrag;
}

function elementDrag(event) {
    event.preventDefault();
    // calculate the new cursor position:
    state.pos1 = state.pos3 - event.clientX;
    state.pos2 = state.pos4 - event.clientY;
    state.pos3 = event.clientX;
    state.pos4 = event.clientY;
    // set the element's new position:
    window.value.style.top = (window.value.offsetTop - state.pos2) + "px";
    window.value.style.left = (window.value.offsetLeft - state.pos1) + "px";
}

function touchDrag(event) {
    event.preventDefault();
    if (event.changedTouches.length == 1) {
        const touch = event.changedTouches[0];
        if (touch.identifier == state.touchID) {
            // calculate the new cursor position:
            state.pos1 = state.pos3 - touch.clientX;
            state.pos2 = state.pos4 - touch.clientY;
            state.pos3 = touch.clientX;
            state.pos4 = touch.clientY;
            // set the element's new position:
            window.value.style.top = (window.value.offsetTop - state.pos2) + "px";
            window.value.style.left = (window.value.offsetLeft - state.pos1) + "px";
        }
    }
}

function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;

    document.ontouchend = null;
    document.ontouchmove = null;
}

function collapseWindow() {
    state.collapsed = !state.collapsed
}

</script>

<template>
    <div class="window" ref="window">
        <div class="window-header" @mousedown="dragStart" @touchstart="dragStart">
            <span>{{ title }}</span>
            <div class="buttons">
                <button @click="collapseWindow">{{ state.collapsed ? '□' : '_' }}</button>
                <button>X</button>
            </div>

        </div>
        <div class="content" :class="state.collapsed ? 'collapsed' : ''">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.window {
    position: absolute;
    border: 3px solid #f1f1f1;
    box-shadow: 8px 10px 4px rgba(100, 100, 100, 0.3);
}

.window-header {
    padding: 10px;
    background: #f1f1f1;
    display: flex;
    flex: row nowrap;
    justify-content: space-between;
    cursor: move;
}


.content {
    height: fit-content;
    width: fit-content;
}

.buttons {
    margin-left: 10px;
}

.collapsed {
    display: none;
}
</style>
