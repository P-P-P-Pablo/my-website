<script setup>
import { ref, reactive } from 'vue'

const windowRef = ref(null)

const state = reactive({
    diffX: 0,
    diffY: 0,
    prevX: 0,
    prevY: 0,
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

// Handle dragging start for desktop
function dragStart(event) {
    event.preventDefault();
    if (state.fullscreen) return;
    state.prevX = event.clientX;
    state.prevY = event.clientY;
    if (event.changedTouches && event.changedTouches.length == 1) {
        state.touchID = event.changedTouches[0].identifier;
    }
    document.onmouseup = closeDragElement;
    document.ontouchend = closeDragElement;
    document.onmousemove = elementDrag;
    document.ontouchmove = touchDrag;
}

// Handle dragging for desktop
function elementDrag(event) {
    event.preventDefault();
    state.diffX = state.prevX - event.clientX;
    state.diffY = state.prevY - event.clientY;
    state.prevX = event.clientX;
    state.prevY = event.clientY;
    windowRef.value.style.top = (windowRef.value.offsetTop - state.diffY) + "px";
    windowRef.value.style.left = (windowRef.value.offsetLeft - state.diffX) + "px";
}

// Handle dragging for touch devices
function touchDrag(event) {
    event.preventDefault();
    if (event.changedTouches.length == 1) {
        const touch = event.changedTouches[0];
        if (touch.identifier == state.touchID) {
            state.diffX = state.prevX - touch.clientX;
            state.diffY = state.prevY - touch.clientY;
            state.prevX = touch.clientX;
            state.prevY = touch.clientY;
            windowRef.value.style.top = (windowRef.value.offsetTop - state.diffY) + "px";
            windowRef.value.style.left = (windowRef.value.offsetLeft - state.diffX) + "px";
        }
    }
}

// Handle dragging end
function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;

    document.ontouchend = null;
    document.ontouchmove = null;
}

// Collapse and expand the window
function collapseWindow() {
    state.collapsed = !state.collapsed;
    emit('savePosition', { top: windowRef.value.offsetTop, left: windowRef.value.offsetLeft });
}

// Toggle fullscreen mode
function toggleFullscreen() {
    state.fullscreen = !state.fullscreen;
    if (state.fullscreen) {
        state.prevPosition = { top: windowRef.value.offsetTop, left: windowRef.value.offsetLeft };
        windowRef.value.style.top = 0 + "px";
        windowRef.value.style.left = 0 + "px";
        windowRef.value.style.width = '100%';
        windowRef.value.style.height = '100%';
        emit('savePosition', { top: 0, left: 0 });
    } else {
        windowRef.value.style.width = 'auto';
        windowRef.value.style.height = 'auto';
        windowRef.value.style.top = state.prevPosition.top + "px";
        windowRef.value.style.left = state.prevPosition.left + "px";
        // Restore the previous position when exiting fullscreen
        emit('savePosition', state.prevPosition);
    }
}
</script>

<template>
    <div class="window" ref="windowRef" :style="{ top: position.top + 'px', left: position.left + 'px' }">
        <div class="window-header" @mousedown="dragStart" @touchstart="dragStart">
            <span>{{ title }}</span>
            <div class="buttons">
                <button v-if="!state.fullscreen" @click="collapseWindow">{{ state.collapsed ? '□' : '_' }}</button>
                <button v-if="!state.collapsed" @click="toggleFullscreen">{{ state.fullscreen ? '⛶' : '⛶' }}</button>
                <button
                    @click="$emit('savePosition', { top: windowRef.offsetTop, left: windowRef.offsetLeft }); $emit('close');">X</button>
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

