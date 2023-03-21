import { defineStore } from "pinia";
import { ref } from "vue";
import { useCompStore } from "./availableComponentStore";

export const useWindowsStore = defineStore("windows", () => {
  const availableComponents = useCompStore();

  // i will need to use [...windows.value] to get the array corresponding to the set
  const windows = ref(new Set());
  let nextWindowIndex = ref(0);
  const maxWindows = 10;

  // Generate Window Element from the list of windows
  const addComponentWindow = (componentKey) => {
    const componentData = availableComponents.getComponentData(componentKey);
    if (componentData) {
      addWindow(componentKey, componentData);
    } else {
      console.error("Component not found:", componentKey);
    }
  };

  // Adds a new window to the list of windows or make one visible if it already exists
  const addWindow = (componentKey, componentData) => {
    if (nextWindowIndex.value < maxWindows) {
      // Check if a window with the same componentKey already exists
      const existingWindow = [...windows.value].find(
        (window) => window.componentKey === componentKey
      );

      // If a window with the same componentKey does not exist, add a new window
      if (!existingWindow) {
        const id = nextWindowIndex.value++;
        windows.value.add({
          id,
          name: componentData.name,
          componentKey,
          visible: true,
          position: { top: 50 + 30 * (id % 6), left: 50 + 30 * (id % 6) },
          zIndex: id,
          component: componentData.component,
          props: componentData.props,
        });
      } else {
        // If a window with the same componentKey already exists, make it visible
        existingWindow.visible = true;
      }
    }
  };

  // Returns a window by its id
  const getWindowByID = (id) => {
    return [...windows.value].find((window) => window.id === id);
  };

  // Handles closing a window by setting its visible property to false
  const handleClose = (id) => {
    const windowToClose = getWindowByID(id);
    if (windowToClose) {
      windowToClose.visible = false;
    }
  };

  // Handles saving the position of a window
  function handleSavePosition(id, position) {
    const windowToUpdate = getWindowByID(id);
    if (windowToUpdate) {
      windowToUpdate.position = position;
    }
  }

  // Bring a window to the front by setting its zIndex to the highest zIndex + 1. Temporary unused, source of bug
  function bringToFront(windowToBringFront) {
    const highestZIndex = Math.max(
      ...[...windows.value].map((window) => window.zIndex)
    );
    windowToBringFront.zIndex = highestZIndex + 1;
  }
  return {
    windows,
    addComponentWindow,
    handleClose,
    handleSavePosition,
    getWindowByID,
  };
});
