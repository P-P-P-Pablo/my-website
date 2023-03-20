<script setup>
import { ref, reactive, computed } from 'vue'
import { useWindowsStore } from '../stores/windowsStore';

const windows = useWindowsStore();

const props = defineProps({
    idwindow: Number,
})
const windowRef = ref();
/* {
    title: String,
    position: { top: Number, left: Number },
    zIndex: Number
} */

const getthisWindow = () => {
    return windows.getWindowByID(props.idwindow);
}
const thisWindow = ref(getthisWindow());

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

// Set the window's position
function setPosition(top, left) {
    windowRef.value.style.top = top + "px";
    windowRef.value.style.left = left + "px";
}

// Handle dragging start for desktop
async function dragStart(event) {
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

    state.diffX = state.prevX - event.clientX;
    state.diffY = state.prevY - event.clientY;
    state.prevX = event.clientX;
    state.prevY = event.clientY;
    windowRef.value.style.top = (windowRef.value.offsetTop - state.diffY) + "px";
    windowRef.value.style.left = (windowRef.value.offsetLeft - state.diffX) + "px";
}

// Handle dragging for touch devices
function touchDrag(event) {

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
    windows.handleSavePosition(props.idwindow, { top: windowRef.value.offsetTop, left: windowRef.value.offsetLeft })
}
function closeWindow() {
    windows.handleSavePosition(props.idwindow, { top: windowRef.value.offsetTop, left: windowRef.value.offsetLeft })
    windows.handleClose(window.id)
}

// Toggle fullscreen mode
function toggleFullscreen() {
    state.fullscreen = !state.fullscreen;
    if (state.fullscreen) {
        state.prevPosition = { top: windowRef.value.offsetTop, left: windowRef.value.offsetLeft };
        windowRef.value.style.width = '100%';
        windowRef.value.style.height = '100%';
        setPosition(0, 0);
        windows.handleSavePosition(props.idwindow, { top: 0, left: 0 })
    } else {
        windowRef.value.style.width = 'auto';
        windowRef.value.style.height = 'auto';
        setPosition(state.prevPosition.top, state.prevPosition.left);
        // Restore the previous position when exiting fullscreen
        windows.handleSavePosition(props.idwindow, state.prevPosition)
    }
}
</script>

<template>
    <div class="window" ref="windowRef"
        :style="{ top: thisWindow.position.top + 'px', left: thisWindow.position.left + 'px' }">
        <div class="window-header" @mousedown.prevent="dragStart" @touchstart.prevent="dragStart">
            <span>{{ thisWindow.title }}</span>
            <div class="buttons">
                <button v-if="!state.fullscreen" @click.prevent="collapseWindow">{{ state.collapsed ? '□' : '_' }}</button>
                <button v-if="!state.collapsed" @click.prevent="toggleFullscreen">{{ state.fullscreen ? '⛶' : '⛶'
                }}</button>
                <button @click.prevent="closeWindow">X</button>

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
    user-select: none;
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

