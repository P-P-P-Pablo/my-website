<script setup>
import { ref, reactive } from 'vue'

const window = ref(null)

const state = reactive({
    pos1: 0,
    pos2: 0,
    pos3: 0,
    pos4: 0,
    touchID: 0,
    collapsed: false,
    prevPosition: { top: 0, left: 0 },
    fullscreen: false,
})

defineProps({
    title: String,
    position: { top: Number, left: Number },
})

const emit = defineEmits(['savePosition', 'close']);

function dragStart(event) {
    event.preventDefault();
    if (state.fullscreen) return;
    state.pos3 = event.clientX;
    state.pos4 = event.clientY;
    if (event.changedTouches && event.changedTouches.length == 1) {
        state.touchID = event.changedTouches[0].identifier;
    }
    document.onmouseup = closeDragElement;
    document.ontouchend = closeDragElement;
    document.onmousemove = elementDrag;
    document.ontouchmove = touchDrag;
}

function elementDrag(event) {
    event.preventDefault();
    state.pos1 = state.pos3 - event.clientX;
    state.pos2 = state.pos4 - event.clientY;
    state.pos3 = event.clientX;
    state.pos4 = event.clientY;
    window.value.style.top = (window.value.offsetTop - state.pos2) + "px";
    window.value.style.left = (window.value.offsetLeft - state.pos1) + "px";
}

function touchDrag(event) {
    event.preventDefault();
    if (event.changedTouches.length == 1) {
        const touch = event.changedTouches[0];
        if (touch.identifier == state.touchID) {
            state.pos1 = state.pos3 - touch.clientX;
            state.pos2 = state.pos4 - touch.clientY;
            state.pos3 = touch.clientX;
            state.pos4 = touch.clientY;
            window.value.style.top = (window.value.offsetTop - state.pos2) + "px";
            window.value.style.left = (window.value.offsetLeft - state.pos1) + "px";
        }
    }
}

function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;

    document.ontouchend = null;
    document.ontouchmove = null;
}

function collapseWindow() {
    state.collapsed = !state.collapsed;
    emit('savePosition', { top: window.value.offsetTop, left: window.value.offsetLeft });
}

function toggleFullscreen() {
    state.fullscreen = !state.fullscreen;
    if (state.fullscreen) {
        state.prevPosition = { top: window.value.offsetTop, left: window.value.offsetLeft };
        window.value.style.top = 0 + "px";
        window.value.style.left = 0 + "px";
        window.value.style.width = '100%';
        window.value.style.height = '100%';
        emit('savePosition', { top: 0, left: 0 });
    } else {
        window.value.style.width = 'auto';
        window.value.style.height = 'auto';
        window.value.style.top = state.prevPosition.top + "px";
        window.value.style.left = state.prevPosition.left + "px";
        // Restore the previous position when exiting fullscreen
        emit('savePosition', state.prevPosition);
    }
}

</script>

<template>
    <div class="window" ref="window" :style="{ top: position.top + 'px', left: position.left + 'px' }">
        <div class="window-header" @mousedown="dragStart" @touchstart="dragStart">
            <span>{{ title }}</span>
            <div class="buttons">
                <button @click="collapseWindow">{{ state.collapsed ? '□' : '_' }}</button>
                <button @click="toggleFullscreen">{{ state.fullscreen ? '⛶' : '⛶' }}</button>
                <button
                    @click="$emit('savePosition', { top: window.value.offsetTop, left: window.value.offsetLeft }); $emit('close');">X</button>
            </div>
        </div>
        <div class="content" :class="state.collapsed ? 'collapsed' : ''">
            <slot></slot>
        </div>
    </div>
</template>


<style scoped>
.window {
    position: fixed;
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
