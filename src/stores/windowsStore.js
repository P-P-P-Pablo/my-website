import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useWindowsStore = defineStore('windows', () => {
    const windows = ref([])
    let nextWindowIndex = ref(0);
    
    return { }
  })
  